import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-6">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-4 text-center">
        Welcome to Hedrick Hall 421's Remote Server!
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-lg text-center">
        This dashboard was set up on a Raspberry Pi Zero 2 W by Jack Shi and runs on Next.js.
        Navigate to the stats page to effortlessly monitor our system's performance and specifications.
	Authorized users can view the control panel and operate electronics inside our dorm.
      </p>
      <Link href="/stats">
        <span className="inline-block bg-blue-600 text-white text-lg font-semibold rounded-lg px-4 py-2 shadow hover:bg-blue-500 transition duration-300 ease-in-out">
          View Stats
        </span>
      </Link>
      {/* New button to go to the Control Panel */}
      <Link href="/servo">
        <span className="inline-block bg-green-600 text-white text-lg font-semibold rounded-lg px-4 py-2 shadow hover:bg-green-500 transition duration-300 ease-in-out mt-4">
          Control Panel
        </span>
      </Link>
    </main>
  );
}
