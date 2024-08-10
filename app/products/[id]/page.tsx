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
//         <Image fill src={product.photo} alt={product.title} />
//       </div>
//       <div className="p-5 flex items-center gap-3 border-b border-neutral-700">
//         <div className="size-10 rounded-full">
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
//           <button className="bg-red-500 px-5 py-2.5 rounded-full text-white font-semibold">
//             Delete product
//           </button>
//         ) : null}
//         <Link
//           className="bg-violet-600 px-5 py-2.5 rounded-full text-white font-semibold"
//           href={``}
//         >
//           Message
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
    <div className="max-w-3xl mx-auto bg-neutral-900 shadow-md rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-square bg-neutral-800">
        <Image
          fill
          src={product.photo}
          alt={product.title}
          className="object-cover"
        />
      </div>

      {/* User Info */}
      <div className="p-5 flex items-center gap-3 border-b border-neutral-700">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-700">
          {product.user.avatar ? (
            <Image
              src={product.user.avatar}
              width={40}
              height={40}
              alt={product.user.username}
              className="object-cover"
            />
          ) : (
            <UserIcon className="w-10 h-10 text-neutral-400" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            {product.user.username}
          </h3>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h1 className="text-3xl font-bold text-white">{product.title}</h1>
        <p className="text-neutral-400 mt-2">{product.description}</p>
      </div>

      {/* Footer Actions */}
      <div className="fixed w-full max-w-3xl bottom-0 left-0 p-5 bg-neutral-800 border-t border-neutral-700 flex justify-between items-center shadow-lg">
        <span className="font-semibold text-2xl text-white">
          ${formatToWon(product.price)}
        </span>
        <div className="flex gap-3">
          {isOwner ? (
            <button className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-full text-white font-semibold transition">
              Delete product
            </button>
          ) : null}
          <Link
            className="bg-violet-600 hover:bg-violet-700 px-5 py-2.5 rounded-full text-white font-semibold transition"
            href={``}
          >
            Message
          </Link>
        </div>
      </div>
    </div>
  );
}
