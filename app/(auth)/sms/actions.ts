"use server";

import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";
import db from "@/lib/db";
import crypto from "crypto";
import { LogIn } from "@/lib/utils";

// Schema to validate the phone number format
const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "Please enter a valid phone number."
  );

// Function to check if the token exists for the provided phone number
async function tokenExists({ token, phone }: { token: number; phone: string }) {
  const exists = await db.sMSToken.findUnique({
    where: {
      token: token.toString(),
      phone,
    },
    select: {
      id: true,
    },
  });
  return Boolean(exists);
}

// Schema to validate the token
const tokenSchema = z
  .object({
    token: z.coerce
      .number({ required_error: "Please enter the verification code." })
      .min(100000, "Please enter a valid verification code.")
      .max(999999, "Please enter a valid verification code."),
    phone: z
      .string()
      .refine(validator.isMobilePhone, "Invalid phone number format."),
  })
  .refine(tokenExists, {
    message: "The verification code does not exist.",
    path: ["token"],
  });

interface ActionState {
  token: boolean;
  phone: string;
}

// Function to generate a unique token
async function getToken() {
  const token = crypto.randomInt(100000, 999999).toString();
  const exists = await db.sMSToken.findUnique({
    where: { token },
    select: { id: true },
  });
  if (exists) {
    return await getToken();
  } else {
    return token;
  }
}

// Main function to handle SMS login
export async function smsLogIn(prevState: ActionState, formData: FormData) {
  const phone = formData.get("phone") ?? prevState.phone;
  const token = formData.get("token");
  
  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);
    
    if (!result.success) {
      return {
        token: false,
        phone,
        error: result.error.flatten(),
      };
    } else {
      await db.sMSToken.deleteMany({
        where: {
          user: {
            phone: result.data,
          },
        },
      });
      
      const token = await getToken();
      await db.sMSToken.create({
        data: {
          token,
          phone: phone + "",
          user: {
            connectOrCreate: {
              where: {
                phone: result.data,
              },
              create: {
                username: crypto.randomBytes(10).toString("hex"),
                phone: result.data,
              },
            },
          },
        },
      });

      // Placeholder for sending SMS, uncomment and configure with Twilio or other SMS API
      // const client = twilio(
      //   process.env.TWILIO_ACCOUNT_SID,
      //   process.env.TWILIO_AUTH_TOKEN
      // );
      // await client.messages.create({
      //   body: `Your verification code is ${token}.`,
      //   from: process.env.TWILIO_PHONE_NUMBER!,
      //   to: phone,
      // });
      
      return {
        token: true,
        phone,
      };
    }
  } else {
    const result = await tokenSchema.spa({ token, phone });
    
    if (!result.success) {
      return {
        error: result.error.flatten(),
        phone,
        token: true,
      };
    } else {
      const token = await db.sMSToken.findUnique({
        where: {
          phone: phone + "",
          token: result.data.token + "",
        },
        select: {
          id: true,
          userId: true,
        },
      });
      
      await LogIn(token!.userId);
      await db.sMSToken.delete({
        where: { id: token!.id },
      });
      redirect("/profile");
    }
  }
}
