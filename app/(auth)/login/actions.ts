"use server";

import { z } from "zod";
import {
  PASSWORD_REGEX,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import db from "@/lib/db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { LogIn } from "@/lib/utils";

// Function to check if the email exists in the database
const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
    select: { id: true },
  });
  return Boolean(user);
};

// Schema validation using Zod
const formSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address.")
    .toLowerCase()
    .refine(checkEmailExists, "No account found with this email."),
  password: z
    .string({ required_error: "Password is required." })
    .min(PASSWORD_MIN_LENGTH, `Password must be at least ${PASSWORD_MIN_LENGTH} characters long.`)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

// Function to handle user login
export const login = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  
  const result = await formSchema.spa(data);
  
  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: { email: result.data.email },
      select: { id: true, password: true },
    });
    
    const ok = await bcrypt.compare(
      result.data.password,
      user!.password ?? "xxxx"
    );
    
    if (ok) {
      await LogIn(user!.id);
      redirect("/profile");
    } else {
      return {
        fieldErrors: {
          password: ["The password is incorrect."],
          email: [],
        },
      };
    }
  }
};
