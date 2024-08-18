import db from "@/lib/db";
import getSession from "@/lib/session";
import { unstable_cache as nextCache, revalidateTag } from "next/cache";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

async function getUser(userId: number) {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      email: true,
      username: true,
      avatar: true,
      password: true,
    },
  });
  return user;
}

const getCachedUser = (userId: number) => {
  const cachedOperation = nextCache(getUser, [`user-edit-${userId}`], {
    tags: [`user-${userId}`, `user-edit-${userId}`],
  });
  return cachedOperation(userId);
};

const ProfileEdit = async () => {
  const session = await getSession();
  const user = await getCachedUser(session.id!);
  const editProfile = async (formData: FormData) => {
    "use server";
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!username || !email || !password) return;
    await db.user.update({
      where: {
        id: user?.id,
      },
      data: {
        username,
        email,
        password: await bcrypt.hash(password, 12),
      },
    });
    revalidateTag(`user-${user?.id}`);
    redirect(`/user/${user?.id}`);
  };
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl">Edit Profile</h1>
      <form action={editProfile} className="flex flex-col gap-3">
        <label htmlFor="username">Username</label>
        <input
          placeholder="Enter your username"
          defaultValue={user?.username}
          className="w-full rounded-md bg-transparent text-white"
          name="username"
          id="username"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          placeholder="Enter your email"
          defaultValue={user?.email ?? ""}
          className="w-full rounded-md bg-transparent text-white"
          name="email"
          id="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter your password"
          type="password"
          className="w-full rounded-md bg-transparent text-white"
          name="password"
          id="password"
          required
        />
        <button className="bg-orange-500 rounded-md cursor-pointer py-2 transition-colors hover:bg-orange-400">
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
