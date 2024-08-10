import Link from "next/link";
import "@/lib/db";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥯</span>
        <h1 className="text-4xl ">Marketplace</h1>
        <h2 className="text-2xl">Welcome to Bagel Marketplace!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href="/create-account"
          className="w-full bg-teal-600 text-white text-lg font-medium py-2.5 rounded-md text-center
           hover:bg-pink-600 transition-colors"    >
          Create Account
        </Link>
        <div className="flex gap-3">
          <span>Have an account? </span>
          <Link href="/login" className="hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}