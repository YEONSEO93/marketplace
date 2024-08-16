// // "use client";

// // import { InitialProducts } from "@/app/(tabs)/home/page";
// // import ListProduct from "./list-product";
// // import { useEffect, useRef, useState } from "react";
// // import { getMoreProducts } from "@/app/(tabs)/home/actions";

// // interface ProductListProps {
// //   initialProducts: InitialProducts;
// // }

// // export default function ProductList({ initialProducts }: ProductListProps) {
// //   const [products, setProducts] = useState(initialProducts || []); // Safeguard against null or undefined initialProducts
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [page, setPage] = useState(0);
// //   const [isLastPage, setIsLastPage] = useState(false);
// //   const trigger = useRef<HTMLSpanElement>(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       async (
// //         entries: IntersectionObserverEntry[],
// //         observer: IntersectionObserver
// //       ) => {
// //         const element = entries[0];
// //         if (element.isIntersecting && trigger.current) {
// //           observer.unobserve(trigger.current);
// //           setIsLoading(true);
// //           const newProducts = await getMoreProducts(page + 1);
// //           if (newProducts.length !== 0) {
// //             setProducts((prev) => [...prev, ...newProducts]);
// //             setPage((prev) => prev + 1);
// //           } else {
// //             setIsLastPage(true);
// //           }
// //           setIsLoading(false);
// //         }
// //       },
// //       {
// //         threshold: 1.0,
// //       }
// //     );
// //     if (trigger.current) {
// //       observer.observe(trigger.current);
// //     }
// //     return () => {
// //       observer.disconnect();
// //     };
// //   }, [page]);

// //   return (
// //     <div className="p-5 flex flex-col gap-5">
// //       {products.length > 0 ? (
// //         products.map((product) => (
// //           <ListProduct key={product.id} {...product} />
// //         ))
// //       ) : (
// //         <p>No products found.</p> // Provide a message or fallback if no products are found
// //       )}
// //       {!isLastPage && (
// //         <span
// //           ref={trigger}
// //           className="text-sm font-semibold bg-teal-600 w-fit mx-auto px-3 py-2 rounded-md hover:opacity-90 active:scale-95"
// //         >
// //           {isLoading ? "Loading..." : "Load more"}
// //         </span>
// //       )}
// //     </div>
// //   );
// // }



// import { formatToAUD } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";
// import { formatToTimeAgo } from "../lib/utils";

// interface IListProductProps {
//   title: string;
//   price: number;
//   created_at: Date;
//   photo: string | null;
//   id: number;
// }

// const ListProduct = ({
//   title,
//   price,
//   created_at,
//   photo,
//   id,
// }: IListProductProps) => {
//   const imageUrl = photo ? `${photo}/avatar` : "/images/default-product.png";

//   return (
//     <Link href={`/home/${id}`} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
//       <div className="relative w-24 h-24 rounded-md overflow-hidden">
//         <Image
//           fill
//           src={imageUrl}
//           alt={title}
//           className="object-cover"
//         />
//       </div>
//       <div className="flex flex-col gap-2 text-black">
//         <span className="text-lg font-semibold">{title}</span>
//         <span className="text-lg font-bold">{formatToAUD(price)}원</span>
//         <span className="text-sm text-gray-500">
//           {formatToTimeAgo(created_at.toString())}
//         </span>
//       </div>
//     </Link>
//   );
// };

// export default ListProduct;



// components/product-list.tsx

"use client"; // Add this line at the top

import ListProduct from "./list-product";
import { formatToAUD, formatToTimeAgo } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { getMoreProducts } from "@/app/(tabs)/home/actions";
import { Product } from '@/lib/types';

interface ProductListProps {
  initialProducts: Product[];
}

const ProductList = ({ initialProducts }: ProductListProps) => {
  const [products, setProducts] = useState(initialProducts || []);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const trigger = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        const element = entries[0];
        if (element.isIntersecting && trigger.current) {
          observer.unobserve(trigger.current);
          setIsLoading(true);
          const newProducts = await getMoreProducts(page + 1);
          if (newProducts.length !== 0) {
            setProducts((prev) => [...prev, ...newProducts]);
            setPage((prev) => prev + 1);
          } else {
            setIsLastPage(true);
          }
          setIsLoading(false);
        }
      },
      {
        threshold: 1.0,
      }
    );
    if (trigger.current) {
      observer.observe(trigger.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [page]);

  return (
    <div className="p-5 flex flex-col gap-5">
      {products.length > 0 ? (
        products.map((product) => (
          <ListProduct key={product.id} {...product} />
        ))
      ) : (
        <p>No products found.</p>
      )}
      {!isLastPage && (
        <span
          ref={trigger}
          className="text-sm font-semibold bg-teal-600 w-fit mx-auto px-3 py-2 rounded-md hover:opacity-90 active:scale-95"
        >
          {isLoading ? "Loading..." : "Load more"}
        </span>
      )}
    </div>
  );
};

export default ProductList;


