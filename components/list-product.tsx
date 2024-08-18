// import { formatToAUD } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";
// import { formatToTimeAgo } from "../lib/utils";

// interface IListProductPromps {
//   title: string;
//   price: number;
//   created_at: Date;
//   photo: string;
//   id: number;
//   key: number;
// }

// const ListProduct = ({
//   title,
//   price,
//   created_at,
//   photo,
//   id,
// }: IListProductPromps) => {
//   return (
//     <Link href={`/home/${id}`} className="">
//       <div className="flex gap-5 items-center">
//         <div className="relative size-28 rounded-md overflow-hidden">
//           <Image
//             fill
//             src={`${photo}/avatar`}
//             alt={title}
//             className="object-cover"
//           />
//         </div>
//         <div className="flex flex-col gap-1 *:text-white">
//           <span className="text-xl">{title}</span>
//           <span className="text-lg font-semibold">${formatToAUD(price)}</span>
//           <span className="text-sm text-neutral-500">
//             {formatToTimeAgo(created_at + "")}
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ListProduct;




import { formatToAUD } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { formatToTimeAgo } from "@/lib/utils";

interface IListProductPromps {
  title: string;
  price: number;
  created_at: Date;
  photo: string;
  id: number;
  key: number;
}

const ListProduct = ({
  title,
  price,
  created_at,
  photo,
  id,
}: IListProductPromps) => {
  return (
    <Link
      href={`/home/${id}`}
      className="flex items-center gap-5 p-5 bg-white shadow-xl rounded-2xl hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 group"
    >
      <div className="relative w-28 h-28 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 shadow-inner">
        <Image
          fill
          src={`${photo}/avatar`}
          alt={title}
          className="object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-1 text-gray-800">
        <span className="text-2xl font-bold text-gray-800 transition-colors group-hover:text-indigo-600">
          {title}
        </span>
        <span className="text-xl font-semibold text-indigo-600">
          {formatToAUD(price)}AUD
        </span>
        <span className="text-sm text-gray-500">
          {formatToTimeAgo(created_at + "")}
        </span>
      </div>
    </Link>
  );
};

export default ListProduct;

