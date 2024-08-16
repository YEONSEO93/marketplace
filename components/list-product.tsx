// import { formatToTimeAgo, formatToAUD } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";

// interface ListProductProps {
//   title: string;
//   price: number;
//   created_at: Date;
//   photo: string;
//   id: number;
// }

// export default function ListProduct({
//   title,
//   price,
//   created_at,
//   photo,
//   id,
// }: ListProductProps) {
//   return (
//     <Link href={`/products/${id}`} className="flex gap-5">
//       <div className="relative size-28 rounded-md overflow-hidden">
//         <Image
//           fill
//           src={`${photo}/width=100,height=100`}
//           className="object-cover"
//           alt={title}
//         />
//       </div>
//       <div className="flex flex-col gap-1 *:text-white">
//         <span className="text-lg">{title}</span>
//         <span className="text-sm text-neutral-500">
//           {formatToTimeAgo(created_at.toString())}
//         </span>
//         <span className="text-lg font-semibold">${formatToAUD(price)}</span>
//       </div>
//     </Link>
//   );
// }




// components/list-product.tsx
import { formatToAUD, formatToTimeAgo } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface IListProductProps {
  title: string;
  price: number;
  created_at: Date | string;
  photo: string | null;
  id: number;
}

const ListProduct = ({
  title,
  price,
  created_at,
  photo,
  id,
}: IListProductProps) => {
  const imageUrl = photo ? `${photo}/avatar` : "/images/default-product.png";
  const createdAtDate = new Date(created_at);
  const isValidDate = !isNaN(createdAtDate.getTime());

  return (
    <Link href={`/home/${id}`} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="relative w-24 h-24 rounded-md overflow-hidden">
        <Image
          fill
          src={imageUrl}
          alt={title}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 text-black">
        <span className="text-lg font-semibold">{title}</span>
        <span className="text-lg font-bold">{formatToAUD(price)}원</span>
        <span className="text-sm text-gray-500">
          {isValidDate ? formatToTimeAgo(createdAtDate) : "Invalid date"}
        </span>
      </div>
    </Link>
  );
};

export default ListProduct;
