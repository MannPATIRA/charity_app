import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col p-8">
      
      {/* Top Right Sign Up and Login Links */}
      <header className="w-full flex justify-end p-4">
        <nav className="flex gap-6 text-gray-600 text-lg font-medium">
          <Link href="/charity_login" className="hover:text-gray-900 transition-colors">
            Login
          </Link>
          <Link href="/charity_signup" className="hover:text-gray-900 transition-colors">
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to EduAid</h1>
        <p className="text-gray-600 mb-12">Empowering schools through charitable aid</p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="/current_schools">
            <button className="w-full sm:w-auto px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg transition-colors">
              View Current Schools
            </button>
          </Link>
          <Link href="/charity_schools">
            <button className="w-full sm:w-auto px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg transition-colors">
              View Charity Schools
            </button>
          </Link>
          <Link href="/charity_video_upload">
            <button className="w-full sm:w-auto px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg transition-colors">
              Upload Video
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} EduAid. All rights reserved.</p>
      </footer>
    </div>
  );
}
