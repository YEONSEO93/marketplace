// "use client";

// import {
//   HomeIcon as SolidHomeIcon,
//   NewspaperIcon as SolidNewspaperIcon,
//   ChatBubbleOvalLeftEllipsisIcon as SolidChatIcon,
//   VideoCameraIcon as SolidVideoCameraIcon,
//   UserIcon as SolidUserIcon,
// } from "@heroicons/react/24/solid";
// import {
//   HomeIcon as OutlineHomeIcon,
//   NewspaperIcon as OutlineNewspaperIcon,
//   ChatBubbleOvalLeftEllipsisIcon as OutlineChatIcon,
//   VideoCameraIcon as OutlineVideoCameraIcon,
//   UserIcon as OutlineUserIcon,
// } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const TabBar = () => {
//   const pathname = usePathname();
//   return (
//     <div className="bg-neutral-800 fixed bottom-0 w-full mx-auto max-w-md grid grid-cols-5 border-neutral-600 border-t px-5 py-3 *:text-white">
//       <Link href="/home" className="flex flex-col items-center gap-px">
//         {pathname === "/home" ? (
//           <SolidHomeIcon className="size-7" />
//         ) : (
//           <OutlineHomeIcon className="size-7" />
//         )}
//         <span>Home</span>  
//       </Link>
//       <Link href="/life" className="flex flex-col items-center gap-px">
//         {pathname === "/life" ? (
//           <SolidNewspaperIcon className="size-7" />
//         ) : (
//           <OutlineNewspaperIcon className="size-7" />
//         )}
//         <span>Local Life</span>  
//       </Link>
//       <Link href="/chat" className="flex flex-col items-center gap-px">
//         {pathname === "/chat" ? (
//           <SolidChatIcon className="size-7" />
//         ) : (
//           <OutlineChatIcon className="size-7" />
//         )}
//         <span>Chat</span>  
//       </Link>
//       <Link href="/live" className="flex flex-col items-center gap-px">
//         {pathname === "/live" ? (
//           <SolidVideoCameraIcon className="size-7" />
//         ) : (
//           <OutlineVideoCameraIcon className="size-7" />
//         )}
//         <span>Shopping</span>  
//       </Link>
//       <Link href="/profile" className="flex flex-col items-center gap-px">
//         {pathname === "/profile" ? (
//           <SolidUserIcon className="size-7" />
//         ) : (
//           <OutlineUserIcon className="size-7" />
//         )}
//         <span>My Profile</span> 
//       </Link>
//     </div>
//   );
// };

// export default TabBar;



"use client";

import {
  HomeIcon as SolidHomeIcon,
  NewspaperIcon as SolidNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as SolidChatIcon,
  VideoCameraIcon as SolidVideoCameraIcon,
  UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid";
import {
  HomeIcon as OutlineHomeIcon,
  NewspaperIcon as OutlineNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as OutlineChatIcon,
  VideoCameraIcon as OutlineVideoCameraIcon,
  UserIcon as OutlineUserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TabBar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-full w-24 bg-gradient-to-b from-gray-900 to-black shadow-2xl flex flex-col items-center py-8 space-y-8 text-white">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 opacity-20 blur-xl animate-pulse"></div>

      <div className="relative z-10 group">
        <Link href="/home" className="flex flex-col items-center gap-2 group">
          {pathname === "/home" ? (
            <SolidHomeIcon className="h-8 w-8 text-white transition-transform duration-300 ease-out transform group-hover:scale-110" />
          ) : (
            <OutlineHomeIcon className="h-8 w-8 text-gray-400 transition-transform duration-300 ease-out transform group-hover:scale-110 group-hover:text-white" />
          )}
          <span className="text-xs group-hover:text-white transition-colors duration-300 ease-out">Home</span>
        </Link>
      </div>

      <div className="relative z-10 group">
        <Link href="/life" className="flex flex-col items-center gap-2">
          {pathname === "/life" ? (
            <SolidNewspaperIcon className="h-8 w-8 text-white transition-transform duration-300 ease-out transform group-hover:scale-110" />
          ) : (
            <OutlineNewspaperIcon className="h-8 w-8 text-gray-400 transition-transform duration-300 ease-out transform group-hover:scale-110 group-hover:text-white" />
          )}
          <span className="text-xs group-hover:text-white transition-colors duration-300 ease-out">Local Life</span>
        </Link>
      </div>

      <div className="relative z-10 group">
        <Link href="/chat" className="flex flex-col items-center gap-2">
          {pathname === "/chat" ? (
            <SolidChatIcon className="h-8 w-8 text-white transition-transform duration-300 ease-out transform group-hover:scale-110" />
          ) : (
            <OutlineChatIcon className="h-8 w-8 text-gray-400 transition-transform duration-300 ease-out transform group-hover:scale-110 group-hover:text-white" />
          )}
          <span className="text-xs group-hover:text-white transition-colors duration-300 ease-out">Chat</span>
        </Link>
      </div>

      <div className="relative z-10 group">
        <Link href="/live" className="flex flex-col items-center gap-2">
          {pathname === "/live" ? (
            <SolidVideoCameraIcon className="h-8 w-8 text-white transition-transform duration-300 ease-out transform group-hover:scale-110" />
          ) : (
            <OutlineVideoCameraIcon className="h-8 w-8 text-gray-400 transition-transform duration-300 ease-out transform group-hover:scale-110 group-hover:text-white" />
          )}
          <span className="text-xs group-hover:text-white transition-colors duration-300 ease-out">Shopping</span>
        </Link>
      </div>

      <div className="relative z-10 group">
        <Link href="/profile" className="flex flex-col items-center gap-2">
          {pathname === "/profile" ? (
            <SolidUserIcon className="h-8 w-8 text-white transition-transform duration-300 ease-out transform group-hover:scale-110" />
          ) : (
            <OutlineUserIcon className="h-8 w-8 text-gray-400 transition-transform duration-300 ease-out transform group-hover:scale-110 group-hover:text-white" />
          )}
          <span className="text-xs group-hover:text-white transition-colors duration-300 ease-out">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default TabBar;
