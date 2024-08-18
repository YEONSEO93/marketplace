// import CloseButton from "@/components/close-button";
// import Image from "next/image";
// import { notFound, redirect } from "next/navigation";
// import { formatToAUD, getProduct } from "@/lib/utils";
// import Link from "next/link";
// import getSession from "@/lib/session";
// import { UserIcon } from "@heroicons/react/24/solid";
// import db from "@/lib/db";
// import { revalidateTag } from "next/cache";

// const Modal = async ({ params }: { params: { id: string } }) => {
//   const id = Number(params.id);
//   if (isNaN(id)) return notFound();
//   const product = await getProduct(id);
//   if (!product) return notFound();
//   const session = await getSession();
//   const isOwner = session.id === product.userId;
//   const createChatRoom = async () => {
//     "use server";
//     if (product.isSold) return;
//     const roomExists = await db.chatRoom.findFirst({
//       where: {
//         productId: product.id,
//       },
//       select: {
//         id: true,
//       },
//     });
//     if (roomExists) {
//       revalidateTag("chat-list");
//       return redirect(`/chats/${roomExists.id}`);
//     }
//     const room = await db.chatRoom.create({
//       data: {
//         users: {
//           connect: [
//             {
//               id: product.userId,
//             },
//             {
//               id: session.id!,
//             },
//           ],
//         },
//         productId: id,
//       },
//       select: {
//         id: true,
//       },
//     });
//     revalidateTag("chat-list");
//     redirect(`/chats/${room.id}`);
//   };
//   return (
//     <div className="absolute z-50 w-full h-full flex items-center justify-center left-0 top-0 bg-black bg-opacity-60">
//       <CloseButton />
//       <div className="max-w-[20rem] w-full flex flex-col justify-center items-center bg-neutral-700 rounded-md overflow-hidden">
//         <div className="aspect-square rounded-md flex items-center justify-center text-neutral-200 w-full relative">
//           <Image
//             fill
//             src={`${product.photo}/public`}
//             alt={product.title}
//             className="h-28 object-cover"
//           />
//         </div>
//         <div className="flex flex-col p-5 gap-5 w-full">
//           <div className="flex gap-2 items-center">
//             {product.user.avatar ? (
//               <Image
//                 src={product.user.avatar}
//                 alt={product.user.username}
//                 width={40}
//                 height={40}
//                 className="object-cover rounded-full"
//                 priority
//               />
//             ) : (
//               <UserIcon className="size-10" />
//             )}
//             <span>{product.user.username}</span>
//           </div>
//           <div className="h-[1px] w-full rounded-md bg-neutral-600" />
//           <h1 className="text-xl font-semibold">{product.title}</h1>
//           <h2 className="text-sm">{product.description}</h2>
//           <div className="flex justify-between mt-6 items-center">
//             <h3 className="font-semibold">{formatToAUD(product.price)} KRW</h3>
//             <div className="flex gap-3">
//               {isOwner ? (
//                 <Link
//                   href={`/home/${id}/edit`}
//                   className="flex items-center justify-center px-2.5 py-1.5 bg-blue-500 rounded-md text-white font-semibold"
//                 >
//                   Edit
//                 </Link>
//               ) : (
//                 <form onSubmit={createChatRoom}>
//                   <button type="submit" className="bg-orange-500 px-2.5 py-1.5 rounded-md text-white font-semibold">
//                     Chat
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;




import CloseButton from "@/components/close-button";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { formatToAUD, getProduct } from "@/lib/utils";
import Link from "next/link";
import getSession from "@/lib/session";
import { UserIcon } from "@heroicons/react/24/solid";
import db from "@/lib/db";
import { revalidateTag } from "next/cache";

const Modal = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();
  const product = await getProduct(id);
  if (!product) return notFound();
  const session = await getSession();
  const isOwner = session.id === product.userId;
  
  const createChatRoom = async () => {
    "use server";
    if (product.isSold) return;
    const roomExists = await db.chatRoom.findFirst({
      where: {
        productId: product.id,
      },
      select: {
        id: true,
      },
    });
    if (roomExists) {
      revalidateTag("chat-list");
      return redirect(`/chats/${roomExists.id}`);
    }
    const room = await db.chatRoom.create({
      data: {
        users: {
          connect: [
            {
              id: product.userId,
            },
            {
              id: session.id!,
            },
          ],
        },
        productId: id,
      },
      select: {
        id: true,
      },
    });
    revalidateTag("chat-list");
    redirect(`/chats/${room.id}`);
  };

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <CloseButton />
      <div className="max-w-lg w-full bg-white rounded-lg shadow-xl overflow-hidden transform transition-all">
        {/* Image Section */}
        <div className="relative w-full h-64 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 flex items-center justify-center">
          <Image
            src={`${product.photo}/public`}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        {/* Content Section */}
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            {product.user.avatar ? (
              <Image
                src={product.user.avatar}
                alt={product.user.username}
                width={40}
                height={40}
                className="object-cover rounded-full border-2 border-gray-300"
                priority
              />
            ) : (
              <UserIcon className="h-10 w-10 text-gray-500" />
            )}
            <span className="text-lg font-semibold text-gray-800">
              {product.user.username}
            </span>
          </div>
          <div className="h-[1px] w-full bg-gray-300" />
          <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
          <h2 className="text-sm text-gray-600">{product.description}</h2>
          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-bold text-indigo-600">
              {formatToAUD(product.price)} AUD
            </h3>
            <div className="flex gap-3">
              {isOwner ? (
                <Link
                  href={`/home/${id}/edit`}
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transform transition-transform hover:scale-105"
                >
                  Edit
                </Link>
              ) : (
                <form onSubmit={createChatRoom}>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transform transition-transform hover:scale-105"
                  >
                    Chat
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
