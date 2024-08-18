// import db from "@/lib/db";
// import getSession from "@/lib/session";
// import { formatToAUD, getProduct } from "@/lib/utils";
// import { ChevronLeftIcon, UserIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound, redirect } from "next/navigation";
// import { unstable_cache as nextCache, revalidateTag } from "next/cache";

// const getCachedProduct = nextCache(getProduct, ["product-detail"], {
//   tags: ["product-detail"],
//   revalidate: 300,
// });

// async function getProductTitle(id: number) {
//   const product = await db.product.findUnique({
//     where: {
//       id,
//     },
//     select: {
//       title: true,
//     },
//   });
//   return product;
// }

// const getCachedProductTitle = nextCache(getProductTitle, ["product-title"], {
//   tags: ["product-title", "product-detail"],
//   revalidate: 300,
// });

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const id = Number(params.id);
//   const product = await getCachedProductTitle(id);
//   if (!product) return;
//   return {
//     title: product.title,
//   };
// }

// const ProductDetail = async ({ params }: { params: { id: string } }) => {
//   const id = Number(params.id);
//   if (isNaN(id)) return notFound();
//   const product = await getCachedProduct(id);
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
//     <div>
//       <div className="relative aspect-square">
//         <Image
//           fill
//           src={`${product.photo}/public`}
//           alt={product.title}
//           className="object-cover"
//         />
//       </div>
//       <div className="px-3 py-5 flex items-center gap-3 border-b border-neutral-700">
//         <div className="size-10 rounded-full overflow-hidden">
//           {product.user.avatar ? (
//             <Image
//               src={product.user.avatar}
//               alt={product.user.username}
//               width={40}
//               height={40}
//               className="object-cover"
//               priority
//             />
//           ) : (
//             <UserIcon className="" />
//           )}
//         </div>
//         <div>
//           <h3>{product.user.username}</h3>
//         </div>
//       </div>
//       <div className="px-3 py-5 ">
//         <h1 className="text-2xl font-semibold">{product.title}</h1>
//         <p>{product.description}</p>
//       </div>
//       <div className="fixed w-full max-w-md bottom-0 mx-auto p-5 bg-neutral-800 flex justify-between items-center">
//         <div className="flex gap-4 items-center">
//           <Link href="/home">
//             <ChevronLeftIcon className="size-9" />
//           </Link>
//           <span className="font-semibold text-xl">
//             {formatToAUD(product.price)} KRW
//           </span>
//         </div>
//         <div className="flex items-center gap-3">
//           {isOwner ? (
//             <Link
//               href={`/home/${id}/edit`}
//               className="flex items-center justify-center px-5 py-2.5 bg-blue-500 rounded-md text-white font-semibold"
//             >
//               Edit
//             </Link>
//           ) : (
//             <form onSubmit={createChatRoom}>
//               <button className="bg-orange-500 px-5 py-2.5 rounded-md text-white font-semibold">
//                 Chat
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;






import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToAUD, getProduct } from "@/lib/utils";
import { ChevronLeftIcon, UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { unstable_cache as nextCache, revalidateTag } from "next/cache";

const getCachedProduct = nextCache(getProduct, ["product-detail"], {
  tags: ["product-detail"],
  revalidate: 300,
});

async function getProductTitle(id: number) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
    },
  });
  return product;
}

const getCachedProductTitle = nextCache(getProductTitle, ["product-title"], {
  tags: ["product-title", "product-detail"],
  revalidate: 300,
});

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const product = await getCachedProductTitle(id);
  if (!product) return;
  return {
    title: product.title,
  };
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();
  const product = await getCachedProduct(id);
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
    <div className="bg-gradient-to-b from-gray-50 via-white to-indigo-50 min-h-screen flex flex-col items-center justify-center">
      {/* Image Section */}
      <div className="relative w-full max-w-lg aspect-square bg-white rounded-b-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <Image
          fill
          src={`${product.photo}/public`}
          alt={product.title}
          className="object-cover"
        />
      </div>

      {/* User Info Section */}
      <div className="flex items-center gap-3 p-4 bg-white shadow-lg rounded-lg mt-6 w-full max-w-lg transform transition-all duration-500 hover:scale-105">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-indigo-200 shadow-lg">
          {product.user.avatar ? (
            <Image
              src={product.user.avatar}
              alt={product.user.username}
              width={64}
              height={64}
              className="object-cover"
              priority
            />
          ) : (
            <UserIcon className="h-full w-full text-gray-500" />
          )}
        </div>
        <div className="text-lg font-semibold text-gray-700">
          {product.user.username}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="bg-white shadow-xl rounded-lg p-6 mt-6 w-full max-w-lg transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>
      </div>

      {/* Action Buttons Section */}
      <div className="fixed w-full max-w-lg bottom-0 mx-auto p-6 bg-white shadow-xl flex justify-between items-center rounded-t-lg">
        <div className="flex items-center gap-4">
          <Link href="/home" className="text-indigo-600 transform transition-transform duration-300 hover:scale-110">
            <ChevronLeftIcon className="h-8 w-8" />
          </Link>
          <span className="text-xl font-bold text-indigo-600">
            {formatToAUD(product.price)} AUD
          </span>
        </div>
        <div className="flex items-center gap-3">
          {isOwner ? (
            <Link
              href={`/home/${id}/edit`}
              className="flex items-center justify-center px-5 py-2.5 bg-indigo-600 text-white rounded-md font-semibold shadow-lg transition-transform transform hover:scale-110"
            >
              Edit
            </Link>
          ) : (
            <form onSubmit={createChatRoom}>
              <button
                type="submit"
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-md font-semibold shadow-lg transition-transform transform hover:scale-110"
              >
                Chat
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
