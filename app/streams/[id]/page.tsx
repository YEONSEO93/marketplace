

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
            src={`https://${process.env.CLOUDFLARE_DOMAIN}/32989c6bf7360c5134c34b3ee57be831/iframe`}
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
