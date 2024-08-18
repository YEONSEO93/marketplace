// import db from "@/lib/db";
// import getSession from "@/lib/session";
// import { UserIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// async function getStream(id: number) {
//   const stream = await db.liveStream.findUnique({
//     where: {
//       id,
//     },
//     select: {
//       title: true,
//       stream_key: true,
//       stream_id: true,
//       userId: true,
//       user: {
//         select: {
//           avatar: true,
//           username: true,
//         },
//       },
//     },
//   });
//   return stream;
// }

// export default async function StreamDetail({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const id = Number(params.id);
//   if (isNaN(id)) {
//     return notFound();
//   }
//   const stream = await getStream(id);
//   if (!stream) {
//     return notFound();
//   }
//   const session = await getSession();
//   return (
//     <div className="p-10">
//       <div className="relative aspect-video">
//         <iframe
//           src={`https://${process.env.CLOUDFLARE_DOMAIN}/209bbb15af56d6f3b083b9256c112114/iframe`}
//           allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
//           className="w-full h-full rounded-md"
//         ></iframe>
//       </div>
//       <div className="p-5 flex items-center gap-3 border-b border-neutral-700">
//         <div className="size-10 overflow-hidden rounded-full">
//           {stream.user.avatar !== null ? (
//             <Image
//               src={stream.user.avatar}
//               width={40}
//               height={40}
//               alt={stream.user.username}
//             />
//           ) : (
//             <UserIcon />
//           )}
//         </div>
//         <div>
//           <h3>{stream.user.username}</h3>
//         </div>
//       </div>
//       <div className="p-5">
//         <h1 className="text-2xl font-semibold">{stream.title}</h1>
//       </div>
//       {stream.userId === session.id! ? (
//         <div className="bg-yellow-200 text-black p-5 rounded-md">
//           <div className="flex gap-2">
//             <span className="font-semibold">Stream URL:</span>
//             <span>rtmps://live.cloudflare.com:443/live/</span>
//           </div>
//           <div className="flex  flex-wrap">
//             <span className="font-semibold">Secret Key:</span>
//             <span>{stream.stream_key}</span>
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// }




import db from "@/lib/db";
import getSession from "@/lib/session";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getStream(id: number) {
  const stream = await db.liveStream.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
      stream_key: true,
      stream_id: true,
      userId: true,
      user: {
        select: {
          avatar: true,
          username: true,
        },
      },
    },
  });
  return stream;
}

export default async function StreamDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const stream = await getStream(id);
  if (!stream) {
    return notFound();
  }
  const session = await getSession();
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-10">
      {/* Video Section */}
      <div className="w-full max-w-4xl mb-8">
        <div className="relative aspect-video shadow-lg rounded-lg overflow-hidden">
          <iframe
            src={`https://${process.env.CLOUDFLARE_DOMAIN}/209bbb15af56d6f3b083b9256c112114/iframe`}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Stream Info Section */}
      <div className="w-full max-w-4xl p-5 bg-white shadow-md rounded-lg mb-8">
        <div className="flex items-center gap-4 border-b border-gray-300 pb-4 mb-4">
          <div className="w-12 h-12 overflow-hidden rounded-full bg-gray-200">
            {stream.user.avatar ? (
              <Image
                src={stream.user.avatar}
                width={48}
                height={48}
                alt={stream.user.username}
              />
            ) : (
              <UserIcon className="w-full h-full text-gray-400" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {stream.user.username}
            </h3>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-indigo-600">
            {stream.title}
          </h1>
        </div>
      </div>

      {/* Stream Key Section (Only for Stream Owner) */}
      {stream.userId === session.id! ? (
        <div className="w-full max-w-4xl p-6 bg-yellow-100 text-black rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-gray-800">Stream URL:</span>
              <span className="text-sm text-gray-700">
                rtmps://live.cloudflare.com:443/live/
              </span>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center flex-wrap">
              <span className="font-semibold text-gray-800">Secret Key:</span>
              <span className="text-sm text-gray-700 break-all">
                {stream.stream_key}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
