// "use server";

// import db from "@/lib/db";
// import getSession from "@/lib/session";
// import { revalidateTag } from "next/cache";

// export async function saveMessage(payload: string, chatRoomId: string) {
//   const session = await getSession();
//   await db.message.create({
//     data: {
//       payload,
//       chatRoomId,
//       userId: session.id!,
//     },
//     select: {
//       id: true,
//     },
//   });
//   revalidateTag("chat-list");
// }



"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { revalidateTag } from "next/cache";

export async function saveMessage(payload: string, chatRoomId: string) {
  const session = await getSession();
  if (!session || !session.id) {
    throw new Error("Unauthorized");
  }

  await db.message.create({
    data: {
      payload,
      chatRoomId,
      userId: session.id!,
    },
    select: {
      id: true,
    },
  });
  
  revalidateTag(`chat-room-${chatRoomId}`);
}
