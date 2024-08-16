// import CloseButton from "@/components/close-button";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { formatToAUD, getProduct } from "@/lib/utils";
// import Link from "next/link";
// import getSession from "@/lib/session";
// import { UserIcon } from "@heroicons/react/24/solid"; // Import Heroicon

// const Modal = async ({ params }: { params: { id: string } }) => {
//   const id = Number(params.id);
//   if (isNaN(id)) return notFound();
//   const product = await getProduct(id);
//   if (!product) return notFound();
//   const session = await getSession();
//   const isOwner = session.id === product.userId;

//   return (
//     <div className="absolute z-50 w-full h-full flex items-center justify-center left-0 top-0 bg-black bg-opacity-60">
//       <CloseButton />
//       <div className="max-w-[20rem] w-full flex flex-col justify-center items-center bg-neutral-700 rounded-md overflow-hidden">
//         <div className="aspect-square rounded-md flex items-center justify-center text-neutral-200 w-full relative">
//           <Image
//             fill
//             src={product.photo ? `${product.photo}/public` : "/images/default-product.png"} // Fallback image
//             alt={product.title || "Product Image"}
//             className="h-28 object-cover"
//           />
//         </div>
//         <div className="flex flex-col p-5 gap-5 w-full">
//           <div className="flex gap-2 items-center">
//             {product.user.avatar ? (
//               <Image
//                 src={product.user.avatar}
//                 alt={product.user.username || "User Avatar"}
//                 width={30}
//                 height={30}
//                 className="rounded-full"
//               />
//             ) : (
//               <UserIcon className="h-8 w-8 text-gray-400" /> // Heroicon as fallback
//             )}
//             <span>{product.user.username}</span>
//           </div>
//           <div className="h-[1px] w-full rounded-md bg-neutral-600" />
//           <h1 className="text-xl font-semibold">{product.title}</h1>
//           <h2 className="text-sm">{product.description}</h2>
//           <div className="flex justify-between mt-6 items-center">
//             <h3 className="font-semibold">{formatToAUD(product.price)}$</h3>
//             <div className="flex gap-3">
//               <Link
//                 className="bg-orange-500 px-2.5 py-1.5 rounded-md text-white font-semibold"
//                 href={``}
//               >
//                 Message
//               </Link>
//               {isOwner ? (
//                 <Link
//                   href={`/home/${id}/edit`}
//                   className="flex items-center justify-center px-2.5 py-1.5 bg-blue-500 rounded-md text-white font-semibold"
//                 >
//                   Edit
//                 </Link>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;



// import CloseButton from "@/components/close-button";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { formatToAUD, getProduct } from "@/lib/utils";
// import Link from "next/link";
// import getSession from "@/lib/session";
// import { UserIcon } from "@heroicons/react/24/solid"; 

// const Modal = async ({ params }: { params: { id: string } }) => {
//   const id = Number(params.id);
//   if (isNaN(id)) return notFound();
  
//   const product = await getProduct(id);
//   if (!product) return notFound();
  
//   const session = await getSession();
//   const isOwner = session.id === product.userId;

//   return (
//     <div className="absolute z-50 w-full h-full flex items-center justify-center left-0 top-0 bg-black bg-opacity-60">
//       <CloseButton />
//       <div className="max-w-[20rem] w-full flex flex-col justify-center items-center bg-neutral-700 rounded-md overflow-hidden">
//         <div className="aspect-square rounded-md flex items-center justify-center text-neutral-200 w-full relative">
//           <Image
//             fill
//             src={product.photo ? `${product.photo}/public` : "/images/default-product.png"} 
//             alt={product.title || "Product Image"}
//             className="h-28 object-cover"
//           />
//         </div>
//         <div className="flex flex-col p-5 gap-5 w-full">
//           <div className="flex gap-2 items-center">
//             {product.user.avatar ? (
//               <Image
//                 src={product.user.avatar}
//                 alt={product.user.username || "User Avatar"}
//                 width={30}
//                 height={30}
//                 className="rounded-full"
//               />
//             ) : (
//               <UserIcon className="h-8 w-8 text-gray-400" />
//             )}
//             <span>{product.user.username}</span>
//           </div>
//           <div className="h-[1px] w-full rounded-md bg-neutral-600" />
//           <h1 className="text-xl font-semibold">{product.title}</h1>
//           <h2 className="text-sm">{product.description}</h2>
//           <div className="flex justify-between mt-6 items-center">
//             <h3 className="font-semibold">{formatToAUD(product.price)}$</h3>
//             <div className="flex gap-3">
//               <Link
//                 className="bg-orange-500 px-2.5 py-1.5 rounded-md text-white font-semibold"
//                 href={``}
//               >
//                 Message
//               </Link>
//               {isOwner && (
//                 <Link
//                   href={`/home/${id}/edit`}
//                   className="flex items-center justify-center px-2.5 py-1.5 bg-blue-500 rounded-md text-white font-semibold"
//                 >
//                   Edit
//                 </Link>
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
import { notFound } from "next/navigation";
import { formatToAUD, getProduct } from "@/lib/utils";
import Link from "next/link";
import getSession from "@/lib/session";
import { UserIcon } from "@heroicons/react/24/solid";

const Modal = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const product = await getProduct(id);
  if (!product) return notFound();

  const session = await getSession();
  const isOwner = session.id === product.userId;

  return (
    <div className="absolute z-50 w-full h-full flex items-center justify-center left-0 top-0 bg-[#333333] bg-opacity-70">
      <CloseButton />
      <div className="max-w-[24rem] w-full flex flex-col justify-center items-center bg-[#FFFBEA] rounded-3xl overflow-hidden shadow-lg">
        <div className="aspect-square rounded-t-3xl flex items-center justify-center text-neutral-800 w-full relative">
          <Image
            fill
            src={product.photo ? `${product.photo}/public` : "/images/default-product.png"}
            alt={product.title || "Product Image"}
            className="h-32 object-cover rounded-t-3xl"
          />
        </div>
        <div className="flex flex-col p-6 gap-4 w-full">
          <div className="flex gap-2 items-center">
            {product.user.avatar ? (
              <Image
                src={product.user.avatar}
                alt={product.user.username || "User Avatar"}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <UserIcon className="h-8 w-8 text-gray-500" />
            )}
            <span className="text-[#FF6B6B] font-semibold">{product.user.username}</span>
          </div>
          <div className="h-[1px] w-full rounded-md bg-[#FF6B6B]" />
          <h1 className="text-2xl font-bold text-[#333333]">{product.title}</h1>
          <h2 className="text-sm text-[#555555]">{product.description}</h2>
          <div className="flex justify-between mt-4 items-center">
            <h3 className="font-semibold text-lg text-[#FF6B6B]">{formatToAUD(product.price)}$</h3>
            <div className="flex gap-3">
              <Link
                className="bg-[#FF6B6B] px-3 py-1.5 rounded-full text-white font-semibold hover:bg-[#4ECDC4] transition-colors"
                href={``}
              >
                Message
              </Link>
              {isOwner && (
                <Link
                  href={`/home/${id}/edit`}
                  className="flex items-center justify-center px-3 py-1.5 bg-[#4ECDC4] rounded-full text-white font-semibold hover:bg-[#FF6B6B] transition-colors"
                >
                  Edit
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
