// import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";
// import Link from "next/link";

// const SocialLogin = () => {
//   return (
//     <>
//       <div className="w-full h-px bg-neutral-500 rounded-full mb-4" />
//       <div className="flex justify-center gap-4">
//         <Link
//           className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg py-2 px-4 shadow-sm"
//           href="/github/start"
//         >
//           <span className="rounded-full bg-white p-1 shadow-md">
//             <Image
//               width={24}
//               height={24}
//               src="/github.svg"
//               alt="Github Logo"
//               className="rounded-full"
//             />
//           </span>
//           <span className="text-gray-700 font-semibold">GitHub</span>
//         </Link>
//         <Link
//           className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg py-2 px-4 shadow-sm"
//           href="/sms"
//         >
//           <span className="rounded-full bg-white p-1 shadow-md">
//             <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-gray-700" />
//           </span>
//           <span className="text-gray-700 font-semibold">SMS</span>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default SocialLogin;



import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const SocialLogin = () => {
  return (
    <>
      <div className="w-full h-px bg-indigo-500 rounded-full mb-4" />
      <div className="flex justify-center gap-4">
        <Link
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transition-colors rounded-full py-2 px-4 shadow-lg transform hover:scale-105"
          href="/github/start"
        >
          <span className="rounded-full bg-white p-1 shadow-md">
            <Image
              width={24}
              height={24}
              src="/github.svg"
              alt="Github Logo"
              className="rounded-full"
            />
          </span>
          <span className="text-white font-semibold">GitHub</span>
        </Link>
        <Link
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transition-colors rounded-full py-2 px-4 shadow-lg transform hover:scale-105"
          href="/sms"
        >
          <span className="rounded-full bg-white p-1 shadow-md">
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-indigo-600" />
          </span>
          <span className="text-white font-semibold">SMS</span>
        </Link>
      </div>
    </>
  );
};

export default SocialLogin;
