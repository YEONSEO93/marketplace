// "use client";

// import { saveMessage } from "@/app/chats/[id]/actions";
// import { InitialChatMessages } from "@/app/chats/[id]/page";
// import { formatToTimeAgo } from "@/lib/utils";
// import {
//   ArrowUpCircleIcon,
//   ChevronLeftIcon,
//   UserIcon,
// } from "@heroicons/react/24/solid";
// import { RealtimeChannel, createClient } from "@supabase/supabase-js";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// const SUPABASE_PUBLIC_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhdWt1eHdraHZydWpvaGpkdW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwNjY0ODMsImV4cCI6MjAzOTY0MjQ4M30.Lknixdfe5hv2-OCsoZFs1IY05pwakKRn8K4WPlDXsN4";
// const SUPABASE_URL = "https://saukuxwkhvrujohjduns.supabase.co";

// interface IChatMessagesListProps {
//   initialMessages: InitialChatMessages;
//   userId: number;
//   buyerId: number;
//   chatRoomId: string;
//   username: string;
//   avatar: string;
//   product: {
//     id: number;
//     title: string;
//     isSold: boolean;
//     userId: number;
//   };
//   onSold: () => void;
//   readMessage: (messageId: number) => void;
// }

// const ChatMessagesList = ({
//   initialMessages,
//   userId,
//   buyerId,
//   chatRoomId,
//   username,
//   avatar,
//   readMessage,
//   product,
//   onSold,
// }: IChatMessagesListProps) => {
//   const [messages, setMessages] = useState(initialMessages);
//   const [message, setMessage] = useState("");
//   const channel = useRef<RealtimeChannel>();
  
//   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     setMessage(value);
//   };

//   const onSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     const newMessage = {
//       id: Date.now(),
//       payload: message,
//       created_at: new Date(),
//       updated_at: new Date(),  // Ensure updated_at is included
//       chatRoomId,  // Ensure chatRoomId is included
//       userId,
//       isRead: false,
//       user: {
//         username,
//         avatar,
//       },
//     };

//     setMessages((prevMsgs) => [...prevMsgs, newMessage]);

//     channel.current?.send({
//       type: "broadcast",
//       event: "message",
//       payload: newMessage,
//     });

//     await saveMessage(message, chatRoomId);
//     setMessage("");
//   };

//   useEffect(() => {
//     const client = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
//     channel.current = client.channel(`room-${chatRoomId}`);
//     channel.current
//       .on("broadcast", { event: "message" }, (payload) => {
//         readMessage(messages[messages.length - 1].id);
//         setMessages((prevMsgs) => [...prevMsgs, payload.payload]);
//       })
//       .subscribe();

//     return () => {
//       channel.current?.unsubscribe();
//     };
//   }, []);

//   const ulRef = useRef<HTMLUListElement>(null);
  
//   useEffect(() => {
//     if (ulRef.current) {
//       ulRef.current.scrollTop = ulRef.current.scrollHeight;
//     }
//   }, [ulRef]);

//   return (
//     <div className="py-5 flex flex-col gap-5 h-screen">
//       <div className="w-full flex justify-between border-b-neutral-600 items-center">
//         <div className="flex gap-5">
//           <Link href="/chat">
//             <ChevronLeftIcon className="size-8 text-white cursor-pointer" />
//           </Link>
//           <h1 className="text-2xl">{product.title}</h1>
//         </div>
//         {product.isSold ? (
//           <Link
//             className="py-2 px-3 bg-orange-500 rounded-md cursor-pointer text-white"
//             href={`/user/${
//               product.userId === userId ? buyerId : product.userId
//             }/review`}
//           >
//             Leave a Review
//           </Link>
//         ) : (
//           <form action={onSold}>
//             <button className="py-2 px-3 bg-orange-500 rounded-md cursor-pointer">
//               Mark as Sold
//             </button>
//           </form>
//         )}
//       </div>
//       <ul
//         className="px-3 flex flex-col gap-5 overflow-y-auto flex-1 justify-end"
//         ref={ulRef}
//       >
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`flex gap-2 items-start ${
//               message.userId === userId && "justify-end"
//             }`}
//           >
//             {message.userId !== userId &&
//               (message.user.avatar ? (
//                 <Image
//                   src={message.user.avatar}
//                   alt={message.user.username}
//                   width={50}
//                   height={50}
//                   className="size-8 rounded-full"
//                 />
//               ) : (
//                 <UserIcon className="size-8 rounded-full" />
//               ))}
//             <div className="flex flex-col gap-1">
//               <span
//                 className={`${
//                   message.userId === userId ? "bg-orange-500" : "bg-neutral-500"
//                 } p-2.5 rounded-md`}
//               >
//                 {message.payload}
//               </span>
//               <span
//                 className={`text-xs ${message.userId === userId && "text-end"}`}
//               >
//                 {formatToTimeAgo(message.created_at.toString())}
//               </span>
//             </div>
//           </div>
//         ))}
//       </ul>
//       <form className="flex relative" onSubmit={onSubmit}>
//         <input
//           required
//           onChange={onChange}
//           value={message}
//           className="bg-transparent rounded-full w-full h-10 focus:outline-none px-5 ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-neutral-50 border-none placeholder:text-neutral-400"
//           type="text"
//           name="message"
//           placeholder="Write a message..."
//           autoComplete="off"
//         />
//         <button className="absolute right-0">
//           <ArrowUpCircleIcon className="size-10 text-orange-500 transition-colors hover:text-orange-300" />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatMessagesList;






// "use client";

// import { saveMessage } from "@/app/chats/[id]/actions";
// import { InitialChatMessages } from "@/app/chats/[id]/page";
// import { formatToTimeAgo } from "@/lib/utils";
// import {
//   ArrowUpCircleIcon,
//   ChevronLeftIcon,
//   UserIcon,
// } from "@heroicons/react/24/solid";
// import { RealtimeChannel, createClient } from "@supabase/supabase-js";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// const SUPABASE_PUBLIC_KEY = "your-public-key";
// const SUPABASE_URL = "your-supabase-url";

// interface IChatMessagesListProps {
//   initialMessages: InitialChatMessages;
//   userId: number;
//   buyerId: number;
//   chatRoomId: string;
//   username: string;
//   avatar: string;
//   product: {
//     id: number;
//     title: string;
//     isSold: boolean;
//     userId: number;
//   };
//   onSold: () => void;
//   readMessage: (messageId: number) => void;
// }

// const ChatMessagesList = ({
//   initialMessages,
//   userId,
//   buyerId,
//   chatRoomId,
//   username,
//   avatar,
//   readMessage,
//   product,
//   onSold,
// }: IChatMessagesListProps) => {
//   const [messages, setMessages] = useState(initialMessages);
//   const [message, setMessage] = useState("");
//   const channel = useRef<RealtimeChannel>();

//   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     setMessage(value);
//   };

//   const onSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     try {
//       const newMessage = {
//         id: Date.now(),
//         payload: message,
//         created_at: new Date(),
//         updated_at: new Date(),
//         chatRoomId,
//         userId,
//         isRead: false,
//         user: {
//           username,
//           avatar,
//         },
//       };

//       setMessages((prevMsgs) => [...prevMsgs, newMessage]);

//       channel.current?.send({
//         type: "broadcast",
//         event: "message",
//         payload: newMessage,
//       });

//       await saveMessage(message, chatRoomId);
//       setMessage("");
//     } catch (error) {
//       console.error("Error submitting message:", error);
//       // Handle the error appropriately
//     }
//   };

//   useEffect(() => {
//     const client = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
//     channel.current = client.channel(`room-${chatRoomId}`);
//     channel.current
//       .on("broadcast", { event: "message" }, (payload) => {
//         readMessage(messages[messages.length - 1].id);
//         setMessages((prevMsgs) => [...prevMsgs, payload.payload]);
//       })
//       .subscribe();

//     return () => {
//       channel.current?.unsubscribe();
//     };
//   }, []);

//   const ulRef = useRef<HTMLUListElement>(null);

//   useEffect(() => {
//     if (ulRef.current) {
//       ulRef.current.scrollTop = ulRef.current.scrollHeight;
//     }
//   }, [ulRef]);

//   return (
//     <div className="py-5 flex flex-col gap-5 h-screen">
//       <div className="w-full flex justify-between border-b-neutral-600 items-center">
//         <div className="flex gap-5">
//           <Link href="/chat">
//             <ChevronLeftIcon className="size-8 text-white cursor-pointer" />
//           </Link>
//           <h1 className="text-2xl">{product.title}</h1>
//         </div>
//         {product.isSold ? (
//           <Link
//             className="py-2 px-3 bg-orange-500 rounded-md cursor-pointer text-white"
//             href={`/user/${
//               product.userId === userId ? buyerId : product.userId
//             }/review`}
//           >
//             Leave a Review
//           </Link>
//         ) : (
//           <form action={onSold}>
//             <button className="py-2 px-3 bg-orange-500 rounded-md cursor-pointer">
//               Mark as Sold
//             </button>
//           </form>
//         )}
//       </div>
//       <ul
//         className="px-3 flex flex-col gap-5 overflow-y-auto flex-1 justify-end"
//         ref={ulRef}
//       >
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`flex gap-2 items-start ${
//               message.userId === userId && "justify-end"
//             }`}
//           >
//             {message.userId !== userId &&
//               (message.user.avatar ? (
//                 <Image
//                   src={message.user.avatar}
//                   alt={message.user.username}
//                   width={50}
//                   height={50}
//                   className="size-8 rounded-full"
//                 />
//               ) : (
//                 <UserIcon className="size-8 rounded-full" />
//               ))}
//             <div className="flex flex-col gap-1">
//               <span
//                 className={`${
//                   message.userId === userId ? "bg-orange-500" : "bg-neutral-500"
//                 } p-2.5 rounded-md`}
//               >
//                 {message.payload}
//               </span>
//               <span
//                 className={`text-xs ${message.userId === userId && "text-end"}`}
//               >
//                 {formatToTimeAgo(message.created_at.toString())}
//               </span>
//             </div>
//           </div>
//         ))}
//       </ul>
//       <form className="flex relative" onSubmit={onSubmit}>
//         <input
//           required
//           onChange={onChange}
//           value={message}
//           className="bg-transparent rounded-full w-full h-10 focus:outline-none px-5 ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-neutral-50 border-none placeholder:text-neutral-400"
//           type="text"
//           name="message"
//           placeholder="Write a message..."
//           autoComplete="off"
//         />
//         <button className="absolute right-0">
//           <ArrowUpCircleIcon className="size-10 text-orange-500 transition-colors hover:text-orange-300" />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatMessagesList;


"use client";

import React, { useState } from "react";
import { saveMessage } from "@/app/chats/[id]/actions";

interface ChatMessagesListProps {
  chatRoomId: string;
  userId: number;
  username: string;
  avatar: string;
  initialMessages: any[];  // Adjust to the actual message type
  readMessage: (messageId: number) => void;
}

const ChatMessagesList: React.FC<ChatMessagesListProps> = ({ 
  chatRoomId, 
  userId, 
  username, 
  avatar, 
  initialMessages, 
  readMessage 
}) => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    await saveMessage(newMessage, chatRoomId);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        payload: newMessage,
        userId,
        created_at: new Date().toISOString(),
        user: { avatar, username },
        isRead: true,
      },
    ]);
    setNewMessage("");
  };

  return (
    <div>
      <div>
        {messages.map((message: any) => (
          <div key={message.id}>
            <img src={message.user.avatar} alt={message.user.username} />
            <div>{message.payload}</div>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatMessagesList;
