// // import Link from "next/link";
// // import "@/lib/db";

// // export default function Home() {
// //   return (
// //     <div className="flex flex-col items-center justify-between min-h-screen p-8">
// //       <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
// //         <span className="text-9xl">🥯</span>
// //         <h1 className="text-4xl ">Marketplace</h1>
// //         <h2 className="text-2xl">Welcome to Bagel Marketplace!</h2>
// //       </div>
// //       <div className="flex flex-col items-center gap-3 w-full">
// //         <Link
// //           href="/create-account"
// //           className="w-full bg-teal-600 text-white text-lg font-medium py-2.5 rounded-md text-center
// //            hover:bg-pink-600 transition-colors"    >
// //           Create Account
// //         </Link>
// //         <div className="flex gap-3">
// //           <span>Have an account? </span>
// //           <Link href="/login" className="hover:underline">
// //             Sign In
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import Link from "next/link";
// import "@/lib/db";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-between min-h-screen p-8 bg-gray-800 text-white rounded-3xl">
//       <div className="my-auto flex flex-col items-center gap-3">
//         <span className="text-9xl">🥯</span>
//         <h1 className="text-4xl font-extrabold text-teal-300">Marketplace</h1>
//         <h2 className="text-2xl text-gray-400">Welcome to Bagel Marketplace!</h2>
//       </div>
//       <div className="flex flex-col items-center gap-4 w-full">
//         <Link
//           href="/create-account"
//           className="w-full bg-teal-400 text-gray-900 text-lg font-bold py-3 rounded-full text-center hover:bg-pink-400 transition-colors"
//         >
//           Create Account
//         </Link>
//         <div className="flex gap-2 text-gray-300">
//           <span>Have an account?</span>
//           <Link href="/login" className="text-teal-300 hover:underline">
//             Sign In
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


import Link from "next/link";
import "@/lib/db";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 bg-[#FFFBEA] text-[#333333] rounded-3xl">
      <div className="my-auto flex flex-col items-center gap-3">
        <span className="text-9xl">🥯</span>
        <h1 className="text-4xl font-extrabold text-[#FF6B6B]">Marketplace</h1>
        <h2 className="text-2xl text-[#FF6B6B]">Welcome to Bagel Marketplace!</h2>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <Link
          href="/create-account"
          className="w-full bg-[#FF6B6B] text-white text-lg font-bold py-3 rounded-full text-center hover:bg-[#4ECDC4] transition-colors"
        >
          Create Account
        </Link>
        <div className="flex gap-2 text-[#FF6B6B]">
          <span>Have an account?</span>
          <Link href="/login" className="text-[#FF6B6B] hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
