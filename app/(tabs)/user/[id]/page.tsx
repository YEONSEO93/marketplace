

// import db from "@/lib/db";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { unstable_cache as nextCache } from "next/cache";
// import { formatToTimeAgo } from "@/lib/utils";
// import { UserIcon } from "@heroicons/react/24/solid";

// const getUser = async (userId: number) => {
//   const user = await db.user.findUnique({
//     where: {
//       id: userId,
//     },
//     include: {
//       products: {
//         select: {
//           id: true,
//           title: true,
//           photo: true,
//         },
//         orderBy: {
//           created_at: "desc",
//         },
//       },
//     },
//   });
//   if (user) {
//     return user;
//   }
//   notFound();
// };

// const getCachedUser = (userId: number) => {
//   const cachedOperation = nextCache(getUser, [`user-profile-${userId}`], {
//     tags: [`user-${userId}`, `user-profile-${userId}`],
//   });
//   return cachedOperation(userId);
// };

// async function getBoughtProducts(userId: number) {
//   const chatRooms = await db.chatRoom.findMany({
//     where: {
//       users: {
//         some: {
//           id: userId,
//         },
//       },
//       product: {
//         userId: {
//           not: userId,
//         },
//       },
//     },
//     select: {
//       product: {
//         select: {
//           id: true,
//           title: true,
//           photo: true,
//         },
//       },
//     },
//     orderBy: {
//       created_at: "desc",
//     },
//   });
//   return chatRooms.map((chatRoom) => chatRoom.product);
// }

// const getCachedBoughtProducts = (userId: number) => {
//   const cachedOperation = nextCache(
//     getBoughtProducts,
//     [`bought-products-${userId}`],
//     {
//       tags: [
//         `user-info-${userId}`,
//         `user-profile-${userId}`,
//         `bought-products-${userId}`,
//       ],
//     }
//   );
//   return cachedOperation(userId);
// };

// async function getReviews(userId: number) {
//   const reviews = await db.review.findMany({
//     where: {
//       userId,
//     },
//     select: {
//       id: true,
//       payload: true,
//       created_at: true,
//     },
//     orderBy: {
//       created_at: "desc",
//     },
//   });
//   return reviews;
// }

// const getCachedReviews = (userId: number) => {
//   const cachedOperation = nextCache(getReviews, [`reviews-${userId}`], {
//     tags: [`reviews-${userId}`],
//   });
//   return cachedOperation(userId);
// };

// const Profile = async ({ params }: { params: { id: string } }) => {
//   const id = Number(params.id);
//   if (isNaN(id)) return notFound();
//   const user = await getCachedUser(id);
//   const boughtProducts = await getCachedBoughtProducts(id);
//   const reviews = await getCachedReviews(id);

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col items-center p-6">
//       {/* Profile Header */}
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mb-8">
//         <div className="flex items-center gap-5">
//           {user.avatar ? (
//             <Image
//               src={user.avatar.startsWith("https://") ? user.avatar : `${user.avatar}/avatar`}
//               alt={user.username}
//               width={64}
//               height={64}
//               className="rounded-full border-2 border-indigo-500"
//             />
//           ) : (
//             <UserIcon className="w-16 h-16 text-gray-400" />
//           )}
//           <div>
//             <h1 className="text-2xl font-semibold text-gray-800">{user.username}</h1>
//             <p className="text-gray-500">Member since {formatToTimeAgo(user.created_at.toString())}</p>
//           </div>
//         </div>
//       </div>

//       Products and Reviews Section
//       <div className="w-full max-w-3xl space-y-10">
//         {/* Sold Products */}
//         <div>
//           <h2 className="text-xl font-bold text-gray-700 mb-4">Sold Products</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//             {user.products.map((product) => (
//               <Link
//                 key={product.id}
//                 href={`/home/${product.id}`}
//                 className="group bg-white p-3 rounded-lg shadow hover:shadow-lg transform transition-transform hover:-translate-y-1 hover:scale-105"
//               >
//                 <Image
//                   src={`${product.photo}/avatar`}
//                   alt={product.title}
//                   width={120}
//                   height={120}
//                   className="w-full h-24 object-cover rounded-md"
//                 />
//                 <h3 className="mt-2 text-sm font-medium text-gray-800 group-hover:text-indigo-600">
//                   {product.title.length > 10 ? `${product.title.slice(0, 10)}...` : product.title}
//                 </h3>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Bought Products */}
//         <div>
//           <h2 className="text-xl font-bold text-gray-700 mb-4">Bought Products</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//             {boughtProducts.map((product) => (
//               <Link
//                 key={product.id}
//                 href={`/home/${product.id}`}
//                 className="group bg-white p-3 rounded-lg shadow hover:shadow-lg transform transition-transform hover:-translate-y-1 hover:scale-105"
//               >
//                 <Image
//                   src={`${product.photo}/avatar`}
//                   alt={product.title}
//                   width={120}
//                   height={120}
//                   className="w-full h-24 object-cover rounded-md"
//                 />
//                 <h3 className="mt-2 text-sm font-medium text-gray-800 group-hover:text-indigo-600">
//                   {product.title.length > 10 ? `${product.title.slice(0, 10)}...` : product.title}
//                 </h3>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Reviews */}
//         <div>
//           <h2 className="text-xl font-bold text-gray-700 mb-4">User Reviews</h2>
//           <ul className="space-y-4">
//             {reviews.map((review) => (
//               <li
//                 key={review.id}
//                 className="bg-white p-4 rounded-lg shadow border-l-4 border-indigo-500"
//               >
//                 <p className="text-gray-700">{review.payload}</p>
//                 <span className="text-xs text-gray-500">
//                   {formatToTimeAgo(review.created_at.toString())}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;




import db from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";
import { unstable_cache as nextCache } from "next/cache";
import { formatToTimeAgo } from "@/lib/utils";
import { UserIcon } from "@heroicons/react/24/solid";

const getUser = async (userId: number) => {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (user) {
    return user;
  }
  notFound();
};

const getCachedUser = (userId: number) => {
  const cachedOperation = nextCache(getUser, [`user-profile-${userId}`], {
    tags: [`user-${userId}`, `user-profile-${userId}`],
  });
  return cachedOperation(userId);
};

const Profile = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();
  const user = await getCachedUser(id);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col items-center p-6">
      {/* Profile Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mb-8">
        <div className="flex items-center gap-5">
          {user.avatar ? (
            <Image
              src={user.avatar.startsWith("https://") ? user.avatar : `${user.avatar}/avatar`}
              alt={user.username}
              width={64}
              height={64}
              className="rounded-full border-2 border-indigo-500"
            />
          ) : (
            <UserIcon className="w-16 h-16 text-gray-400" />
          )}
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{user.username}</h1>
            <p className="text-gray-500">Member since {formatToTimeAgo(user.created_at.toString())}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
