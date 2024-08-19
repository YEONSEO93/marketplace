
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
    <div className="fixed left-0 top-0 h-full w-32 bg-gradient-to-b from-gray-900 to-black shadow-2xl flex flex-col items-center py-8 space-y-8 text-white">
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

      {/* <div className="relative z-10 group">
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
      </div> */}

      <div className="relative z-10 group">
        <Link href="/live" className="flex flex-col items-center gap-2">
          {pathname === "/live" ? (
            <SolidVideoCameraIcon className="h-8 w-8 text-white transition-transform duration-300 ease-out transform group-hover:scale-110" />
          ) : (
            <OutlineVideoCameraIcon className="h-8 w-8 text-gray-400 transition-transform duration-300 ease-out transform group-hover:scale-110 group-hover:text-white" />
          )}
          <span className="text-xs group-hover:text-white transition-colors duration-300 ease-out">Live Streaming</span>
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


