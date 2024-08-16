// // app>(tabs)>home>page.tsx
// import ProductList from "@/components/product-list";
// import db from "@/lib/db";
// import { PlusIcon } from "@heroicons/react/24/solid";
// import { Prisma } from "@prisma/client";
// import { unstable_cache as nextCache, revalidatePath } from "next/cache";
// import Link from "next/link";

// const getCachedProducts = nextCache(getInitialProducts, ["home-products"]);

// async function getInitialProducts() {
//   const products = await db.product.findMany({
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
// //export const dynamic = "force-dynamic";
// // export const revalidate = 60;


// export default async function Products() {
//   const initialProducts = await getInitialProducts();
//   const revalidate = async () => {
//     "use server";
//     revalidatePath("/home");
//   };
//   return (
//     <div>
//       <ProductList initialProducts={initialProducts} />
//       <form action={revalidate}>
//         <button>Revalidate</button>
//       </form>
//       <Link
//         href="/products/add"
//         className="bg-teal-600 flex items-center justify-center rounded-full size-16 fixed bottom-24 right-8 text-white transition-colors hover:bg-pink-600"
//       >
//         <PlusIcon className="size-10" />
//       </Link>
//     </div>
//   );
// }








// app/(tabs)/home/page.tsx
import ProductList from "@/components/product-list";
import db from "@/lib/db";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Prisma } from "@prisma/client";

// Function to fetch initial products
async function getInitialProducts() {
  try {
    const products = await db.product.findMany({
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
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Type for initial products
export type InitialProducts = Prisma.PromiseReturnType<
  typeof getInitialProducts
>;

// Metadata for the page
export const metadata = {
  title: "Home",
};

// Main ProductsPage component
const ProductsPage = async () => {
  const initialProducts = await getInitialProducts();

  return (
    <>
      <h1 className="text-[#FF6B6B] text-4xl mb-6">Products</h1>
      <div>
        {initialProducts.length > 0 ? (
          <ProductList initialProducts={initialProducts} />
        ) : (
          <p className="text-[#FF6B6B]">No products available.</p>
        )}
      </div>
      <Link
        href="/home/add"
        className="bg-[#FF6B6B] flex items-center justify-center rounded-full w-16 h-16 fixed bottom-24 left-0 right-0 mx-auto translate-x-36 sm:translate-x-44 text-white transition-colors hover:bg-[#4ECDC4]"
      >
        <PlusIcon className="w-10 h-10" />
      </Link>
    </>
  );
};

export default ProductsPage;
