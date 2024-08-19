
// import ProductList from "@/components/product-list";
// import db from "@/lib/db";
// import { PlusIcon } from "@heroicons/react/24/solid";
// import { Prisma } from "@prisma/client";
// import Link from "next/link";

// async function getInitialProducts() {
//   const products = await db.product.findMany({
//     where: {
//       isSold: false,
//     },
//     select: {
//       title: true,
//       price: true,
//       created_at: true,
//       photo: true,
//       id: true,
//     },
//     orderBy: {
//       created_at: "desc",
//     },
//   });
//   return products;
// }

// export type InitialProducts = Prisma.PromiseReturnType<
//   typeof getInitialProducts
// >;

// export const metadata = {
//   title: "Home",
// };

// const ProductsPage = async () => {
//   const initialProducts = await getInitialProducts();
//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
//       {/* Header Section */}
//       <header className="w-full bg-white p-6 shadow-md">
//         <h1 className="text-indigo-800 text-4xl font-extrabold text-center tracking-tight">
//           Bagel Marketplace
//         </h1>
//       </header>

//       {/* Product List Section */}
//       <main className="flex-grow w-full max-w-3xl p-6 flex flex-col gap-6 mt-8">
//         <ProductList initialProduct={initialProducts} />
//       </main>

//       {/* Add Button */}
//       <Link
//         href="/home/add"
//         className="bg-indigo-600 flex items-center justify-center rounded-full h-16 w-16 fixed bottom-10 right-10 text-white transition-transform transform hover:scale-110 shadow-lg"
//       >
//         <PlusIcon className="h-8 w-8" />
//       </Link>
//     </div>
//   );
// };

// export default ProductsPage;


import ProductList from "@/components/product-list";
import db from "@/lib/db";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Prisma } from "@prisma/client";
import Link from "next/link";

async function getInitialProducts() {
  const products = await db.product.findMany({
    where: {
      isSold: false,
    },
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
  return products;
}

export type InitialProducts = Prisma.PromiseReturnType<
  typeof getInitialProducts
>;

export const metadata = {
  title: "Home",
};

const ProductsPage = async () => {
  const initialProducts = await getInitialProducts();
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full p-6 shadow-sm">
        <h1 className="text-gray-900 text-4xl font-bold text-center">
          Bagel Marketplace
        </h1>
      </header>

      {/* Product List Section */}
      <main className="flex-grow w-full max-w-2xl p-6 ml-32 grid grid-cols-1 gap-6 mt-6">
        <ProductList initialProduct={initialProducts} />
      </main>

      {/* Add Button */}
      <Link
        href="/home/add"
        className="bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center rounded-full h-16 w-16 fixed bottom-8 right-8 text-white transition-transform transform hover:scale-105 shadow-md"
      >
        <PlusIcon className="h-8 w-8" />
      </Link>
    </div>
  );
};

export default ProductsPage;
