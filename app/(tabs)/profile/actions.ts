// app/profile/actions.ts

"use server";

import getSession from "@/lib/session"; // Corrected the import to default import
import { redirect } from "next/navigation";

export const logOut = async () => {
  const session = await getSession();
  if ("destroy" in session) {
    await session.destroy();
  }
  redirect("/");
};
