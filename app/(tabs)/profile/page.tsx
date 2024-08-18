// import db from "@/lib/db";
// import getSession from "@/lib/session";
// import Link from "next/link";
// import { notFound, redirect } from "next/navigation";

// const getUser = async () => {
//   const session = await getSession();
//   if (session.id) {
//     const user = await db.user.findUnique({
//       where: {
//         id: session.id,
//       },
//     });
//     if (user) {
//       return user;
//     }
//   }
//   notFound();
// };

// const Profile = async () => {
//   const user = await getUser();
//   const logOut = async () => {
//     "use server";
//     const session: any = await getSession();
//     await session.destroy();
//     redirect("/");
//   };
//   return (
//     <div className="flex flex-col gap-3">
//       <h1>Welcome! {user?.username}!</h1>
//       <Link
//         href={`/user/${user.id}`}
//         className="py-2 px-4 bg-orange-500 rounded-md text-white w-fit"
//       >
//         See Profile
//       </Link>
//       <Link
//         className="px-3 py-2 rounded-md bg-blue-500 w-fit cursor-pointer text-white"
//         href={`/profile/edit`}
//       >
//         Edit Profile
//       </Link>
//       <form onSubmit={logOut}>
//         <button className="px-3 py-2 rounded-md bg-red-500 w-fit cursor-pointer text-white">
//           Log out
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Profile;





// app/profile/page.tsx

import db from "@/lib/db";
import getSession from "@/lib/session";
import Link from "next/link";
import { notFound } from "next/navigation";
import { logOut } from "./actions"; // Import the logOut action

const getUser = async () => {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
};

const Profile = async () => {
  const user = await getUser();

  return (
    <div className="flex flex-col gap-3">
      <h1>Welcome! {user?.username}!</h1>
      <Link
        href={`/user/${user.id}`}
        className="py-2 px-4 bg-orange-500 rounded-md text-white w-fit"
      >
        See Profile
      </Link>
      <Link
        className="px-3 py-2 rounded-md bg-blue-500 w-fit cursor-pointer text-white"
        href={`/profile/edit`}
      >
        Edit Profile
      </Link>
      <form action={logOut} method="post"> {/* Use action attribute to invoke the logOut function */}
        <button className="px-3 py-2 rounded-md bg-red-500 w-fit cursor-pointer text-white">
          Log out
        </button>
      </form>
    </div>
  );
};

export default Profile;
