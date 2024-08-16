// import db from "@/lib/db";
// import getSession from "@/lib/session";
// import { formatToAUD, getProduct } from "@/lib/utils";
// import { ChevronLeftIcon, UserIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { unstable_cache as nextCache } from "next/cache";

// const getCachedProduct = nextCache(getProduct, ["product-detail"], {
//   tags: ["product-detail"],
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

//   return (
//     <div>
//       <div className="relative aspect-square">
//         {product.photo ? (
//           <Image
//             fill
//             src={`${product.photo}/public`}
//             alt={product.title}
//             className="object-cover"
//           />
//         ) : (
//           <Image
//             fill
//             src="/images/default-product.png" // Fallback image
//             alt="Default Product Image"
//             className="object-cover"
//           />
//         )}
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
//             />
//           ) : (
//             <UserIcon className="h-10 w-10 text-neutral-500" />
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
//             {formatToAUD(product.price)}원
//           </span>
//         </div>
//         <div className="flex items-center gap-3">
//           <Link
//             className="bg-orange-500 px-5 py-2.5 rounded-md text-white font-semibold"
//             href={``}
//           >
//             채팅하기
//           </Link>
//           {isOwner ? (
//             <Link
//               href={`/home/${id}/edit`}
//               className="flex items-center justify-center px-5 py-2.5 bg-blue-500 rounded-md text-white font-semibold"
//             >
//               편집
//             </Link>
//           ) : null}
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
import { notFound } from "next/navigation";
import { unstable_cache as nextCache } from "next/cache";

const getCachedProduct = nextCache(getProduct, ["product-detail"], {
  tags: ["product-detail"],
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

  return (
    <div className="bg-[#FFFBEA] text-[#333333] shadow-lg rounded-lg overflow-hidden">
      <div className="relative aspect-square">
        {product.photo ? (
          <Image
            fill
            src={`${product.photo}/public`}
            alt={product.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <Image
            fill
            src="/images/default-product.png" // Fallback image
            alt="Default Product Image"
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div className="px-4 py-4 flex items-center gap-4 border-b border-[#FF6B6B]">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          {product.user.avatar ? (
            <Image
              src={product.user.avatar}
              alt={product.user.username}
              width={48}
              height={48}
              className="object-cover"
            />
          ) : (
            <UserIcon className="w-12 h-12 text-[#FF6B6B]" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#333333]">{product.user.username}</h3>
        </div>
      </div>
      <div className="px-4 py-4">
        <h1 className="text-3xl font-bold text-[#FF6B6B] mb-2">{product.title}</h1>
        <p className="text-[#333333]">{product.description}</p>
      </div>
      <div className="fixed inset-x-0 bottom-0 bg-[#FFFBEA] shadow-lg border-t border-[#FF6B6B] flex justify-between items-center p-4">
        <div className="flex gap-4 items-center">
          <Link href="/home">
            <ChevronLeftIcon className="w-6 h-6 text-[#FF6B6B] hover:text-[#333333] transition-colors" />
          </Link>
          <span className="text-xl font-semibold text-[#333333]">
            {formatToAUD(product.price)} AUD
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            className="bg-[#FF6B6B] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#4ECDC4] transition-colors"
            href={``}
          >
            Chat
          </Link>
          {isOwner ? (
            <Link
              href={`/home/${id}/edit`}
              className="bg-[#4ECDC4] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#FF6B6B] transition-colors"
            >
              Edit
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
