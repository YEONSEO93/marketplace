// import db from "@/lib/db";
// import { formatToTimeAgo } from "@/lib/utils";
// import {
//   ChatBubbleBottomCenterIcon,
//   HandThumbUpIcon,
// } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import { unstable_cache as nextCache } from "next/cache";

// // Function to fetch posts from the database
// const getPosts = async () => {
//   const posts = await db.post.findMany({
//     select: {
//       id: true,
//       title: true, 
//       description: true,
//       views: true,
//       created_at: true,
//       _count: {
//         select: {
//           comments: true,
//           likes: true,
//         },
//       },
//     },
//   });
//   return posts;
// };

// // Caching the posts data
// const getCachedPosts = nextCache(getPosts, ["posts"], { tags: ["posts"] });

// export const metadata = {
//   title: "Local Life",
// };

// // Async function to render the LifePage component
// const LifePage = async () => {
//   const posts = await getCachedPosts();
//   return (
//     <div className="p-5 flex flex-col">
//       <h1 className="text-4xl mb-3">Local Life</h1>
//       {posts.map((post) => (
//         <Link
//           className="pb-5 mb-5 border-b border-neutral-400 text-neutral-400 flex flex-col last:pb-0 last:border-b-0"
//           key={post.id}
//           href={`/posts/${post.id}`}
//         >
//           <h2 className="text-white text-lg font-semibold">{post.title}</h2>
//           <p className="mb-2">{post.description}</p>
//           <div className="flex items-center justify-between text-sm">
//             <div className="flex gap-1 items-center">
//               <span>{formatToTimeAgo(post.created_at.toString())}</span>
//               <span>·</span>
//               <span>Views {post.views}</span>
//             </div>
//             <div className="flex gap-4 items-center *:flex *:gap-1 *:items-center">
//               <span>
//                 <HandThumbUpIcon className="size-4" />
//                 {post._count.likes}
//               </span>
//               <span>
//                 <ChatBubbleBottomCenterIcon className="size-4" />
//                 {post._count.comments}
//               </span>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default LifePage;



import db from "@/lib/db";
import { formatToTimeAgo } from "@/lib/utils";
import {
  ChatBubbleBottomCenterIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { unstable_cache as nextCache } from "next/cache";

const getPosts = async () => {
  const posts = await db.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      views: true,
      created_at: true,
      _count: {
        select: {
          comments: true,
          likes: true,
        },
      },
    },
  });
  return posts;
};

const getCachedPosts = nextCache(getPosts, ["posts"], { tags: ["posts"] });

export const metadata = {
  title: "Local Life",
};

const LifePage = async () => {
  const posts = await getCachedPosts();
  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen flex flex-col items-center">
      <header className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-b-xl shadow-lg">
        <h1 className="text-white text-4xl font-bold text-center tracking-wide">Local Life</h1>
      </header>
      <main className="flex-grow w-full max-w-4xl p-6 grid grid-cols-1 gap-8 mt-10">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg text-indigo-600 font-semibold">{post.title}</h2>
            <p className="text-gray-700 mb-2">{post.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex gap-1 items-center">
                <span>{formatToTimeAgo(post.created_at.toString())}</span>
                <span>·</span>
                <span>Views {post.views}</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="flex gap-1 items-center">
                  <HandThumbUpIcon className="h-4 w-4 text-gray-600" />
                  {post._count.likes}
                </span>
                <span className="flex gap-1 items-center">
                  <ChatBubbleBottomCenterIcon className="h-4 w-4 text-gray-600" />
                  {post._count.comments}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default LifePage;
