

// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="relative flex flex-col justify-between min-h-screen w-full bg-white overflow-hidden">
      
//       {/* Diagonal Header Section */}
//       <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-indigo-500 to-purple-500 transform -skew-y-6 z-0"></div>

//       <div className="relative flex flex-col items-center justify-center flex-grow gap-8 p-6 z-10">
//         <span className="text-9xl text-black transform rotate-12 hover:rotate-0 transition-transform duration-300 ease-out">🥯</span>
//         <h1 className="text-6xl text-black font-extrabold text-center transform -skew-y-6 hover:skew-y-0 transition-transform duration-300 ease-out">
//           Bagel Marketplace
//         </h1>
//         <h2 className="text-2xl text-black text-center max-w-3xl leading-relaxed transform skew-y-6 hover:skew-y-0 transition-transform duration-300 ease-out">
//           Discover great deals on a variety of products from trusted sellers!
//         </h2>
//       </div>
      
//       {/* Floating Shapes */}
//       <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl opacity-50"></div>
//       <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full blur-xl opacity-50"></div>

//       <div className="relative flex flex-col items-center gap-6 pb-12 z-10">
//         <Link
//           href="/create-account"
//           className="py-4 px-12 text-lg rounded-full bg-white text-indigo-600 font-semibold shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
//           style={{
//             boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
//           }}
//         >
//           Get Started
//         </Link>
//         <div className="flex gap-2 text-gray-800">
//           <span>Already have an account?</span>
//           <Link href="/login" className="hover:underline font-semibold text-indigo-600 hover:text-indigo-700">
//             Log In
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen w-full bg-gray-50 overflow-hidden">
      
      {/* Curved Header Section */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-full z-0"></div>

      <div className="relative flex flex-col items-center justify-center flex-grow gap-8 p-6 z-10">
        <span className="text-9xl text-indigo-600 transform scale-125 hover:scale-150 transition-transform duration-300 ease-out">🥯</span>
        <h1 className="text-6xl text-black font-extrabold text-center drop-shadow-md transform hover:scale-105 transition-transform duration-300 ease-out">
          Bagel Marketplace
        </h1>
        <h2 className="text-2xl text-gray-700 text-center max-w-3xl leading-relaxed transform hover:text-indigo-500 transition-colors duration-300 ease-out">
          Discover, buy, and enjoy great deals on a variety of products from trusted sellers!
        </h2>
      </div>
      
      {/* Floating Circles */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-green-400 to-blue-400 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full blur-3xl opacity-50"></div>

      <div className="relative flex flex-col items-center gap-6 pb-12 z-10">
        <Link
          href="/create-account"
          className="py-4 px-12 text-lg rounded-full bg-indigo-600 text-white font-semibold shadow-lg transition-transform transform hover:scale-110 hover:bg-purple-300"
          style={{
            boxShadow: "0 5px 20px rgba(0, 0, 0, 0.4)",
          }}
        >
          Get Started
        </Link>
        <div className="flex gap-2 text-gray-700">
          <span>Already have an account?</span>
          <Link href="/login" className="hover:underline font-semibold text-indigo-600 hover:text-purple-600">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
