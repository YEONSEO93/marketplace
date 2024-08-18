// "use client";

// import { InitialProducts } from "@/app/(tabs)/home/page";
// import ListProduct from "./list-product";
// import { useEffect, useRef, useState } from "react";
// import { getMoreProducts } from "@/app/(tabs)/home/actions";

// interface ProductListProps {
//   initialProduct: InitialProducts;
// }

// const ProductList = ({ initialProduct }: ProductListProps) => {
//   const [products, setProducts] = useState(initialProduct);
//   const [isLoading, setLoading] = useState(false);
//   const [page, setPage] = useState(5);
//   const [isLastPage, setLastPage] = useState(false);
//   const trigger = useRef<HTMLSpanElement>(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       async (
//         entries: IntersectionObserverEntry[],
//         observer: IntersectionObserver
//       ) => {
//         const element = entries[0];
//         if (trigger.current && element.isIntersecting) {
//           observer.unobserve(trigger.current);
//           setLoading(true);
//           const newProducts = await getMoreProducts(page + 1);
//           if (newProducts.length === 0) return setLastPage(true);
//           setProducts((prev) => [...prev, ...newProducts]);
//           setPage((prev) => prev + 1);
//           setLoading(false);
//         }
//       },
//       { threshold: 0.01, rootMargin: "0px 0px -100px 0px" }
//     );
//     if (trigger.current) {
//       observer.observe(trigger.current);
//     }
//     return () => {
//       observer.disconnect();
//     };
//   }, [page]);
//   return (
//     <div className="p-5 flex flex-col gap-5 pb-64">
//       {products.map((product) => (
//         <ListProduct key={product.id} {...product} />
//       ))}
//       {}
//     </div>
//   );
// };

// export default ProductList;





"use client";

import { InitialProducts } from "@/app/(tabs)/home/page";
import ListProduct from "./list-product";
import { useEffect, useRef, useState } from "react";
import { getMoreProducts } from "@/app/(tabs)/home/actions";

interface ProductListProps {
  initialProduct: InitialProducts;
}

const ProductList = ({ initialProduct }: ProductListProps) => {
  const [products, setProducts] = useState(initialProduct);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(5);
  const [isLastPage, setLastPage] = useState(false);
  const trigger = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const element = entries[0];
        if (trigger.current && element.isIntersecting) {
          observer.unobserve(trigger.current);
          setLoading(true);
          const newProducts = await getMoreProducts(page + 1);
          if (newProducts.length === 0) return setLastPage(true);
          setProducts((prev) => [...prev, ...newProducts]);
          setPage((prev) => prev + 1);
          setLoading(false);
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -100px 0px" }
    );
    if (trigger.current) {
      observer.observe(trigger.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [page]);

  return (
    <div className="p-6 flex flex-col gap-8 pb-32">
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
      {!isLastPage && (
        <span ref={trigger} className="block h-1 w-full bg-transparent"></span>
      )}
      {isLoading && (
        <div className="flex justify-center">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent border-t-4 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
