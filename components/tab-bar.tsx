
// // "use client";

// // import {
// //   HomeIcon as SolidHomeIcon,
// //   NewspaperIcon as SolidNewspaperIcon,
// //   ChatBubbleOvalLeftEllipsisIcon as SolidChatIcon,
// //   VideoCameraIcon as SolidVideoCameraIcon,
// //   UserIcon as SolidUserIcon,
// // } from "@heroicons/react/24/solid";
// // import {
// //   HomeIcon as OutlineHomeIcon,
// //   NewspaperIcon as OutlineNewspaperIcon,
// //   ChatBubbleOvalLeftEllipsisIcon as OutlineChatIcon,
// //   VideoCameraIcon as OutlineVideoCameraIcon,
// //   UserIcon as OutlineUserIcon,
// // } from "@heroicons/react/24/outline";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";

// // export default function TabBar() {
// //   const pathname = usePathname();
// //   return (
// //     <div className="fixed bottom-0 w-full mx-auto max-w-screen-sm grid grid-cols-5 border-gray-600 border-t px-5 py-3">
// //       <Link href="/home" className="flex flex-col items-center gap-px text-white ">
// //         {pathname === "/home" ? (
// //           <SolidHomeIcon className="w-7 h-7 text-pink-600" />
// //         ) : (
// //           <OutlineHomeIcon className="w-7 h-7 " />
// //         )}
// //         <span>Home</span>
// //       </Link>
// //       <Link href="/life" className="flex flex-col items-center gap-px text-white">
// //         {pathname === "/life" ? (
// //           <SolidNewspaperIcon className="w-7 h-7  text-pink-600" />
// //         ) : (
// //           <OutlineNewspaperIcon className="w-7 h-7 " />
// //         )}
// //         <span>Life</span>
// //       </Link>
// //       <Link href="/chat" className="flex flex-col items-center gap-px  text-white">
// //         {pathname === "/chat" ? (
// //           <SolidChatIcon className="w-7 h-7  text-pink-600" />
// //         ) : (
// //           <OutlineChatIcon className="w-7 h-7 " />
// //         )}
// //         <span>Message</span>
// //       </Link>
// //       <Link href="/live" className="flex flex-col items-center gap-px  text-white">
// //         {pathname === "/live" ? (
// //           <SolidVideoCameraIcon className="w-7 h-7   text-pink-600" />
// //         ) : (
// //           <OutlineVideoCameraIcon className="w-7 h-7 " />
// //         )}
// //         <span>Live</span>
// //       </Link>
// //       <Link href="/profile" className="flex flex-col items-center gap-px text-white">
// //         {pathname === "/profile" ? (
// //           <SolidUserIcon className="w-7 h-7  text-pink-600" />
// //         ) : (
// //           <OutlineUserIcon className="w-7 h-7 " />
// //         )}
// //         <span>Profile</span>
// //       </Link>
// //     </div>
// //   );
// // }




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
//         <span>홈</span>
//       </Link>
//       <Link href="/life" className="flex flex-col items-center gap-px">
//         {pathname === "/life" ? (
//           <SolidNewspaperIcon className="size-7" />
//         ) : (
//           <OutlineNewspaperIcon className="size-7" />
//         )}
//         <span>동네생활</span>
//       </Link>
//       <Link href="/chat" className="flex flex-col items-center gap-px">
//         {pathname === "/chat" ? (
//           <SolidChatIcon className="size-7" />
//         ) : (
//           <OutlineChatIcon className="size-7" />
//         )}
//         <span>채팅</span>
//       </Link>
//       <Link href="/live" className="flex flex-col items-center gap-px">
//         {pathname === "/live" ? (
//           <SolidVideoCameraIcon className="size-7" />
//         ) : (
//           <OutlineVideoCameraIcon className="size-7" />
//         )}
//         <span>쇼핑</span>
//       </Link>
//       <Link href="/profile" className="flex flex-col items-center gap-px">
//         {pathname === "/profile" ? (
//           <SolidUserIcon className="size-7" />
//         ) : (
//           <OutlineUserIcon className="size-7" />
//         )}
//         <span>나의 당근</span>
//       </Link>
//     </div>
//   );
// };

// export default TabBar;



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
//     <div className="bg-[#FFFBEA] fixed bottom-0 w-full mx-auto max-w-md grid grid-cols-5 border-t border-[#FF6B6B] px-5 py-3 text-gray-800">
//       <Link href="/home" className="flex flex-col items-center gap-px">
//         {pathname === "/home" ? (
//           <SolidHomeIcon className="w-7 h-7 text-[#FF6B6B]" />
//         ) : (
//           <OutlineHomeIcon className="w-7 h-7 text-gray-600" />
//         )}
//         <span>Home</span>
//       </Link>
//       <Link href="/life" className="flex flex-col items-center gap-px">
//         {pathname === "/life" ? (
//           <SolidNewspaperIcon className="w-7 h-7 text-[#FF6B6B]" />
//         ) : (
//           <OutlineNewspaperIcon className="w-7 h-7 text-gray-600" />
//         )}
//         <span>Life</span>
//       </Link>
//       <Link href="/chat" className="flex flex-col items-center gap-px">
//         {pathname === "/chat" ? (
//           <SolidChatIcon className="w-7 h-7 text-[#FF6B6B]" />
//         ) : (
//           <OutlineChatIcon className="w-7 h-7 text-gray-600" />
//         )}
//         <span>Chat</span>
//       </Link>
//       <Link href="/live" className="flex flex-col items-center gap-px">
//         {pathname === "/live" ? (
//           <SolidVideoCameraIcon className="w-7 h-7 text-[#FF6B6B]" />
//         ) : (
//           <OutlineVideoCameraIcon className="w-7 h-7 text-gray-600" />
//         )}
//         <span>Live</span>
//       </Link>
//       <Link href="/profile" className="flex flex-col items-center gap-px">
//         {pathname === "/profile" ? (
//           <SolidUserIcon className="w-7 h-7 text-[#FF6B6B]" />
//         ) : (
//           <OutlineUserIcon className="w-7 h-7 text-gray-600" />
//         )}
//         <span>Profile</span>
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
    <div className="bg-[#FFFBEA] fixed top-0 bottom-0 left-0 w-16 flex flex-col items-center py-5 border-r border-[#FF6B6B] text-gray-800">
      <Link href="/home" className="flex flex-col items-center gap-1 py-3">
        {pathname === "/home" ? (
          <SolidHomeIcon className="w-7 h-7 text-[#FF6B6B]" />
        ) : (
          <OutlineHomeIcon className="w-7 h-7 text-gray-600" />
        )}
        <span className="text-xs">Home</span>
      </Link>
      <Link href="/life" className="flex flex-col items-center gap-1 py-3">
        {pathname === "/life" ? (
          <SolidNewspaperIcon className="w-7 h-7 text-[#FF6B6B]" />
        ) : (
          <OutlineNewspaperIcon className="w-7 h-7 text-gray-600" />
        )}
        <span className="text-xs">Life</span>
      </Link>
      <Link href="/chat" className="flex flex-col items-center gap-1 py-3">
        {pathname === "/chat" ? (
          <SolidChatIcon className="w-7 h-7 text-[#FF6B6B]" />
        ) : (
          <OutlineChatIcon className="w-7 h-7 text-gray-600" />
        )}
        <span className="text-xs">Chat</span>
      </Link>
      <Link href="/live" className="flex flex-col items-center gap-1 py-3">
        {pathname === "/live" ? (
          <SolidVideoCameraIcon className="w-7 h-7 text-[#FF6B6B]" />
        ) : (
          <OutlineVideoCameraIcon className="w-7 h-7 text-gray-600" />
        )}
        <span className="text-xs">Live</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-1 py-3">
        {pathname === "/profile" ? (
          <SolidUserIcon className="w-7 h-7 text-[#FF6B6B]" />
        ) : (
          <OutlineUserIcon className="w-7 h-7 text-gray-600" />
        )}
        <span className="text-xs">Profile</span>
      </Link>
    </div>
  );
};

export default TabBar;
