// import { PlusIcon } from "@heroicons/react/24/solid";
// import Link from "next/link";

// export default function Live() {
//   return (
//     <div className="flex flex-col gap-10 py-8 px-6 bg-gray-50 rounded-2xl shadow-2xl relative overflow-hidden">
//       <Link
//         href="/streams/add"
//         className="bg-indigo-500 flex items-center justify-center rounded-full size-16 fixed bottom-24 right-8 text-white transition-transform transform hover:scale-105 hover:bg-indigo-700 shadow-lg"
//         style={{
//           boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
//         }}
//       >
//         <PlusIcon className="size-10" />
//       </Link>
//     </div>
//   );
// }


import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Live() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen flex flex-col items-center justify-center">
      <Link
        href="/streams/add"
        className="bg-purple-500 flex items-center justify-center rounded-full h-16 w-16 text-white transition-transform transform hover:scale-110 shadow-xl"
        style={{
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <PlusIcon className="h-8 w-8" />
      </Link>
    </div>
  );
}
