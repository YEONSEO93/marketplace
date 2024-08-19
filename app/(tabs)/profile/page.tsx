

// // app/profile/page.tsx

// import db from "@/lib/db";
// import getSession from "@/lib/session";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { logOut } from "./actions"; // Import the logOut action

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
//       <form action={logOut} method="post"> {/* Use action attribute to invoke the logOut function */}
//         <button className="px-3 py-2 rounded-md bg-red-500 w-fit cursor-pointer text-white">
//           Log out
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Profile;



import db from "@/lib/db";
import getSession from "@/lib/session";
import Link from "next/link";
import { notFound } from "next/navigation";
import { logOut } from "./actions";
import { UserIcon, PencilSquareIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

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
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="w-full bg-white p-8 shadow-md rounded-b-lg">
        <h1 className="text-gray-800 text-3xl font-semibold text-center">
          Welcome, {user?.username}!
        </h1>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow w-full max-w-lg p-6 grid gap-6 mt-10">
        <Link
          href={`/user/${user.id}`}
          className="flex items-center gap-3 py-3 px-6 text-base rounded-md bg-white border border-gray-300 text-gray-800 font-medium shadow-sm hover:shadow-md transition-shadow"
        >
          <UserIcon className="w-5 h-5" />
          See Profile
        </Link>
        <Link
          href={`/profile/edit`}
          className="flex items-center gap-3 py-3 px-6 text-base rounded-md bg-white border border-gray-300 text-gray-800 font-medium shadow-sm hover:shadow-md transition-shadow"
        >
          <PencilSquareIcon className="w-5 h-5" />
          Edit Profile
        </Link>
        <form action={logOut} method="post" className="w-full">
          <button
            className="flex justify-center items-center gap-3 w-full py-3 px-6 text-base rounded-md bg-white border border-red-400 text-red-600 font-medium shadow-sm hover:shadow-md hover:bg-red-50 transition-all"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            Log out
          </button>
        </form>
      </main>
    </div>
  );
};

export default Profile;

