// "use server";

// import db from "@/lib/db";
// import getSession from "@/lib/session";
// import { redirect } from "next/navigation";
// import { productSchema } from "./schema";
// import { revalidatePath, revalidateTag } from "next/cache";

// export async function uploadProduct(formData: FormData) {
//   const session = await getSession();
//   if (!session.id) return;
//   const data = {
//     photo: formData.get("photo"),
//     title: formData.get("title"),
//     price: formData.get("price"),
//     description: formData.get("description"),
//   };
//   const result = productSchema.safeParse(data);
//   if (!result.success) {
//     return result.error.flatten();
//   } else {
//     const product = await db.product.create({
//       data: {
//         title: result.data.title,
//         description: result.data.description,
//         price: result.data.price,
//         photo: result.data.photo,
//         user: {
//           connect: {
//             id: session.id,
//           },
//         },
//       },
//       select: {
//         id: true,
//       },
//     });
//     revalidatePath("/home");
//     revalidateTag("/product-detail");
//     redirect(`/home/${product.id}`);
//   }
// }

// export async function getUploadUrl() {
//   const response = await fetch(
//     `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
//       },
//     }
//   );
//   const data = await response.json();
//   return data;
// }



"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import { productSchema } from "./schema";
import { revalidatePath, revalidateTag } from "next/cache";

export async function uploadProduct(formData: FormData) {
  const session = await getSession();
  if (!session.id) return;
  
  const data = {
    photo: formData.get("photo"),
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
  };
  
  const result = productSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const product = await db.product.create({
      data: {
        title: result.data.title,
        description: result.data.description,
        price: result.data.price,
        photo: result.data.photo,
        user: {
          connect: {
            id: session.id,
          },
        },
      },
      select: {
        id: true,
      },
    });
    revalidatePath("/home");
    revalidateTag("/product-detail");
    redirect(`/home/${product.id}`);
  }
}

export async function getUploadUrl() {
  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      console.error("Failed to get upload URL:", response.statusText);
      return { success: false, error: response.statusText };
    }

    const data = await response.json();

    if (data.success) {
      return { success: true, result: data.result };
    } else {
      console.error("Failed to get upload URL:", data.errors);
      return { success: false, error: data.errors };
    }
  } catch (error) {
    console.error("Error occurred while fetching the upload URL:", error);
    return { success: false, error: "Network or server error" };
  }
}
