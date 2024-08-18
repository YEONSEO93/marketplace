// import React from "react";
// import EditForm from "@/components/edit-form";
// import { getProduct } from "./actions";
// import { notFound } from "next/navigation";
// import getSession from "@/lib/session";
// import { unstable_cache as nextCache } from "next/cache";

// const getCachedProduct = nextCache(getProduct, ["product-detail"], {
//   tags: ["product-detail"],
// });

// const EditProduct = async ({ params }: { params: { id: string } }) => {
//   const id = Number(params.id);
//   if (isNaN(id)) return notFound();
//   const product = await getCachedProduct(id);
//   if (!product) return notFound();
//   const session = await getSession();
//   const isOwner = session.id === product.userId;
//   return (
//     <div>
//       <EditForm id={id} product={product} isOwner={isOwner} />
//     </div>
//   );
// };

// export default EditProduct;



import React from "react";
import EditForm from "@/components/edit-form";
import { getProduct } from "./actions";
import { notFound } from "next/navigation";
import getSession from "@/lib/session";
import { unstable_cache as nextCache } from "next/cache";

const getCachedProduct = nextCache(getProduct, ["product-detail"], {
  tags: ["product-detail"],
});

const EditProduct = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();
  const product = await getCachedProduct(id);
  if (!product) return notFound();
  const session = await getSession();
  const isOwner = session.id === product.userId;
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <header className="w-full bg-white p-6 shadow-md">
        <h1 className="text-indigo-600 text-4xl font-extrabold text-center tracking-tight">
          Edit Product
        </h1>
      </header>

      <main className="flex-grow w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-8">
        <EditForm id={id} product={product} isOwner={isOwner} />
      </main>
    </div>
  );
};

export default EditProduct;
