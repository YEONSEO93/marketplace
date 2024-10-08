// import ListChat from "@/components/list-chat";
// import db from "@/lib/db";
// import getSession from "@/lib/session";
// import { unstable_cache as nextCache } from "next/cache";

// const getChats = async (userId: number) => {
//   const chats = await db.chatRoom.findMany({
//     where: {
//       users: {
//         some: {
//           id: userId,
//         },
//       },
//     },
//     select: {
//       id: true,
//       messages: {
//         take: 1,
//         orderBy: {
//           created_at: "desc",
//         },
//       },
//       users: {
//         where: {
//           id: {
//             not: userId,
//           },
//         },
//         select: {
//           avatar: true,
//           username: true,
//         },
//       },
//     },
//     orderBy: {
//       created_at: "desc",
//     },
//   });
//   return chats;
// };

// const getCachedChats = nextCache(getChats, ["chat-list"], {
//   tags: ["chat-list"],
// });

// const ChatPage = async () => {
//   const session = await getSession();
//   const chats = await getCachedChats(session.id!);
//   return (
//     <div>
//       <h1 className="text-white text-4xl">Chats</h1>
//       {chats.map((chat, idx) => (
//         <ListChat
//           id={chat.id}
//           key={idx}
//           messages={chat.messages}
//           users={chat.users}
//           userId={session.id!}
//         />
//       ))}
//     </div>
//   );
// };

// export default ChatPage;


import ListChat from "@/components/list-chat";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { unstable_cache as nextCache } from "next/cache";

const getChats = async (userId: number) => {
  try {
    const chats = await db.chatRoom.findMany({
      where: {
        users: {
          some: {
            id: userId,
          },
        },
      },
      select: {
        id: true,
        messages: {
          take: 1,
          orderBy: {
            created_at: "desc",
          },
        },
        users: {
          where: {
            id: {
              not: userId,
            },
          },
          select: {
            avatar: true,
            username: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return chats;
  } catch (error) {
    console.error("Failed to load chats:", error);
    return [];
  }
};

const getCachedChats = nextCache(getChats, ["chat-list"], {
  tags: ["chat-list"],
});

const ChatPage = async () => {
  const session = await getSession();
  if (!session || !session.id) {
    return <div className="text-red-500">You must be logged in to view chats.</div>;
  }
  const chats = await getCachedChats(session.id!);
  if (chats.length === 0) {
    return <div className="text-gray-500">No chats available.</div>;
  }
  return (
    <div>
      <h1 className="text-white text-4xl">Chats</h1>
      {chats.map((chat, idx) => (
        <ListChat
          id={chat.id}
          key={idx}
          messages={chat.messages}
          users={chat.users}
          userId={session.id!}
        />
      ))}
    </div>
  );
};

export default ChatPage;

