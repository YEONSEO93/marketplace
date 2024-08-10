// import db from "@/lib/db";
// import getSession from "@/lib/session";
// import { formatToWon } from "@/lib/utils";
// import { UserIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// async function getIsOwner(userId: number) {
//   const session = await getSession();
//   if (session.id) {
//     return session.id === userId;
//   }
//   return false;
// }

// async function getProduct(id: number) {
//   const product = await db.product.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       user: {
//         select: {
//           username: true,
//           avatar: true,
//         },
//       },
//     },
//   });
//   return product;
// }

// export default async function ProductDetail({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const id = Number(params.id);
//   if (isNaN(id)) {
//     return notFound();
//   }
//   const product = await getProduct(id);
//   if (!product) {
//     return notFound();
//   }
//   const isOwner = await getIsOwner(product.userId);
//   return (
//     <div>
//       <div className="relative aspect-square">
//         <Image
//           className="object-cover"
//           fill
//           src={`${product.photo}/width=500,height=500`}
//           alt={product.title}
//         />
//       </div>
//       <div className="p-5 flex items-center gap-3 border-b border-neutral-700">
//         <div className="size-10 overflow-hidden rounded-full">
//           {product.user.avatar !== null ? (
//             <Image
//               src={product.user.avatar}
//               width={40}
//               height={40}
//               alt={product.user.username}
//             />
//           ) : (
//             <UserIcon />
//           )}
//         </div>
//         <div>
//           <h3>{product.user.username}</h3>
//         </div>
//       </div>
//       <div className="p-5">
//         <h1 className="text-2xl font-semibold">{product.title}</h1>
//         <p>{product.description}</p>
//       </div>
//       <div className="fixed w-full bottom-0 left-0 p-5 pb-10 bg-neutral-800 flex justify-between items-center">
//         <span className="font-semibold text-xl">
//           ${formatToWon(product.price)}
//         </span>
//         {isOwner ? (
//           <button className="bg-red-500 px-5 py-2.5 rounded-md text-white font-semibold">
//             Delete
//           </button>
//         ) : null}
//         <Link
//           className="bg-orange-500 px-5 py-2.5 rounded-md text-white font-semibold"
//           href={``}
//         >
//           message
//         </Link>
//       </div>
//     </div>
//   );
// }


import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToWon } from "@/lib/utils";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getIsOwner(userId: number) {
  const session = await getSession();
  if (session.id) {
    return session.id === userId;
  }
  return false;
}

async function getProduct(id: number) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
          avatar: true,
        },
      },
    },
  });
  return product;
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const product = await getProduct(id);
  if (!product) {
    return notFound();
  }
  const isOwner = await getIsOwner(product.userId);
  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="relative w-full h-80">
        <Image
          className="object-cover rounded-lg"
          fill
          src={`${product.photo}/width=500,height=500`}
          alt={product.title}
        />
      </div>
      <div className="flex items-center gap-4 mt-5">
        <div className="w-12 h-12 overflow-hidden rounded-full border border-neutral-700">
          {product.user.avatar !== null ? (
            <Image
              src={product.user.avatar}
              width={40}
              height={40}
              alt={product.user.username}
              className="object-cover"
            />
          ) : (
            <UserIcon className="w-12 h-12 text-neutral-500" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{product.user.username}</h3>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-bold text-neutral-900">{product.title}</h1>
        <p className="text-neutral-700 mt-2">{product.description}</p>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-neutral-900 p-5">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <span className="text-xl font-bold text-white">
            ${formatToWon(product.price)}
          </span>
          <div className="flex gap-3">
            {isOwner && (
              <button className="bg-gray-500 hover:bg-red-600 px-5 py-2.5 rounded-md text-white font-semibold transition">
                Delete
              </button>
            )}
            <Link
              className="bg-teal-600 hover:bg-orange-600 px-5 py-2.5 rounded-md text-white font-semibold transition"
              href={``}
            >
              Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
