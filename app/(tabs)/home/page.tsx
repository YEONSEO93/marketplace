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
//     <div className="bg-gray-50 min-h-screen flex flex-col">
//       <h1 className="text-gray-900 text-4xl font-bold text-center py-8">Products</h1>
//       <div className="flex-grow">
//         <ProductList initialProduct={initialProducts} />
//       </div>
//       <Link
//         href="/home/add"
//         className="bg-indigo-600 flex items-center justify-center rounded-full h-16 w-16 fixed bottom-12 right-12 text-white transition-transform transform hover:scale-110 shadow-lg"
//       >
//         <PlusIcon className="h-8 w-8" />
//       </Link>
//     </div>
//   );
// };

// export default ProductsPage;



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
//     <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen flex flex-col items-center">
//       {/* Header Section */}
//       <header className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-b-xl shadow-lg">
//         <h1 className="text-white text-4xl font-bold text-center tracking-wide">Our Products</h1>
//       </header>

//       {/* Product List Section */}
//       <main className="flex-grow w-full max-w-5xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//         <ProductList initialProduct={initialProducts} />
//       </main>

//       {/* Add Button */}
//       <Link
//         href="/home/add"
//         className="bg-purple-500 flex items-center justify-center rounded-full h-16 w-16 fixed bottom-12 right-12 text-white transition-transform transform hover:scale-110 shadow-xl"
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
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="w-full bg-white p-6 shadow-md">
        <h1 className="text-indigo-600 text-4xl font-extrabold text-center tracking-tight">
          Our Products
        </h1>
      </header>

      {/* Product List Section */}
      <main className="flex-grow w-full max-w-6xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center pl-24">
        <ProductList initialProduct={initialProducts} />
      </main>

      {/* Add Button */}
      <Link
        href="/home/add"
        className="bg-indigo-600 flex items-center justify-center rounded-full h-16 w-16 fixed bottom-10 right-10 text-white transition-transform transform hover:scale-110 shadow-lg"
      >
        <PlusIcon className="h-8 w-8" />
      </Link>
    </div>
  );
};

export default ProductsPage;
