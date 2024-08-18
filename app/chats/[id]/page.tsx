// import ChatMessagesList from "@/components/chat-messages-list";
// import db from "@/lib/db";
// import getSession from "@/lib/session";
// import { Prisma } from "@prisma/client";
// import { notFound } from "next/navigation";
// import { unstable_cache as nextCache, revalidateTag } from "next/cache";

// async function getRoom(id: string) {
//   const room = await db.chatRoom.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       users: {
//         select: {
//           id: true,
//         },
//       },
//     },
//   });
//   if (room) {
//     const session = await getSession();
//     const canSee = Boolean(room.users.find((user) => user.id === session.id));
//     if (!canSee) return null;
//   }
//   return room;
// }

// async function getMessages(chatRoomId: string) {
//   const messages = await db.message.findMany({
//     where: {
//       chatRoomId,
//     },
//     select: {
//       id: true,
//       payload: true,
//       created_at: true,
//       userId: true,
//       isRead: true,
//       user: {
//         select: {
//           avatar: true,
//           username: true,
//         },
//       },
//     },
//   });
//   return messages;
// }

// async function getUserProfile(userId: number) {
//   const user = await db.user.findUnique({
//     where: {
//       id: userId,
//     },
//     select: {
//       username: true,
//       avatar: true,
//     },
//   });
//   return user;
// }

// function getCachedUserProfile(userId: number) {
//   const cachedOperation = nextCache(
//     getUserProfile,
//     [`user-profile-${userId}`],
//     { tags: [`user-profile-${userId}`] }
//   );
//   return cachedOperation(userId);
// }

// export type InitialChatMessages = Prisma.PromiseReturnType<typeof getMessages>;

// const ChatRoom = async ({ params }: { params: { id: string } }) => {
//   const room = await getRoom(params.id);
//   if (!room) {
//     return notFound();
//   }
//   const initialMessages = await getMessages(params.id);
//   const session = await getSession();
//   const readMessage = async (messageId: number) => {
//     "use server";
//     await db.message.update({
//       where: {
//         id: messageId,
//       },
//       data: {
//         isRead: true,
//       },
//     });
//     revalidateTag(`chat-list`);
//   };
//   if (
//     initialMessages.length > 0 &&
//     initialMessages[initialMessages.length - 1].userId !== session.id! &&
//     !initialMessages[initialMessages.length - 1].isRead
//   ) {
//     readMessage(initialMessages[initialMessages.length - 1].id);
//   }
//   const user = await getCachedUserProfile(session.id!);
//   if (!user) {
//     return notFound();
//   }
//   return (
//     <ChatMessagesList
//       chatRoomId={params.id}
//       userId={session.id!}
//       username={user.username}
//       avatar={user.avatar ?? ""}
//       initialMessages={initialMessages}
//       readMessage={readMessage}
//     />
//   );
// };

// export default ChatRoom;









import ChatMessagesList from "@/components/chat-messages-list";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { Prisma, Product } from "@prisma/client";
import { notFound } from "next/navigation";
import { unstable_cache as nextCache, revalidateTag } from "next/cache";

interface IChatMessagesListProps {
  initialMessages: InitialChatMessages;
  userId: number;
  buyerId: number;
  chatRoomId: string;
  username: string;
  avatar: string;
  product: Product;
  onSold: () => void;
  readMessage: (messageId: number) => Promise<void>;
}

export type InitialChatMessages = Prisma.PromiseReturnType<typeof getMessages>;

async function getRoom(id: string) {
  const room = await db.chatRoom.findUnique({
    where: { id },
    include: {
      users: {
        select: {
          id: true,
        },
      },
      product: true,  
    },
  });
  if (room) {
    const session = await getSession();
    const canSee = Boolean(room.users.find((user) => user.id === session.id));
    if (!canSee) return null;
    return room;
  }
  return null;
}

async function getMessages(chatRoomId: string) {
  const messages = await db.message.findMany({
    where: { chatRoomId },
    select: {
      id: true,
      payload: true,
      created_at: true,
      userId: true,
      isRead: true,
      user: {
        select: {
          avatar: true,
          username: true,
        },
      },
    },
  });
  return messages;
}

async function getUserProfile(userId: number) {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: {
      username: true,
      avatar: true,
    },
  });
  return user;
}

function getCachedUserProfile(userId: number) {
  const cachedOperation = nextCache(
    getUserProfile,
    [`user-profile-${userId}`],
    { tags: [`user-profile-${userId}`] }
  );
  return cachedOperation(userId);
}

const ChatRoom = async ({ params }: { params: { id: string } }) => {
  const room = await getRoom(params.id);
  if (!room || !room.product) {
    return notFound();
  }
  const initialMessages = await getMessages(params.id);
  const session = await getSession();
  const user = await getCachedUserProfile(session.id!);
  
  if (!user) {
    return notFound();
  }

  const onSold = () => {
    console.log("Product marked as sold");
    // Additional logic to mark the product as sold
  };

  const readMessage = async (messageId: number) => {
    await db.message.update({
      where: { id: messageId },
      data: { isRead: true },
    });
    revalidateTag(`chat-list`);
  };

  return (
    <ChatMessagesList
      chatRoomId={params.id}
      userId={session.id!}
      buyerId={session.id!}  // Assuming current session ID is the buyer ID, adjust as needed
      username={user.username}
      avatar={user.avatar ?? ""}
      initialMessages={initialMessages}
      readMessage={readMessage}
      product={room.product}
      onSold={onSold}
    />
  );
};

export default ChatRoom;


