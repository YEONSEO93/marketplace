import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="my-auto *:font-medium flex flex-col items-center gap-2">
        <span className="text-9xl">🥯</span>
        <h1 className="text-4xl">Bagel Marketplace</h1>
        <h2 className="text-2xl">Welcome to Bagel Marketplace!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full p-6">
        <Link href="/create-account" className="primary-btn py-2.5 text-lg">
          Get Started
        </Link>
        <div className="flex gap-1">
          <span>Already have an account?</span>
          <Link href="/login" className="hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
