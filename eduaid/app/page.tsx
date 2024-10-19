import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col p-8">
      
      {/* Top Logo and Right Sign Up and Login Links */}
      <header className="w-full flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/lib/logo_eduaid.png"  // Replace with your logo image path
              alt="EduAid Logo"
              width={150}  // Adjust size as needed
              height={50}
              priority
            />
          </Link>
        </div>

        {/* Sign Up and Login Links */}
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
          <span>Welcome to</span>
          <Image
            src="/lib/logo_eduaid.png" // Use the same logo here for the image part
            alt="EduAid"
            width={150}  // Adjust size as needed
            height={50}  // Adjust size as needed
            className="ml-2 mb-5" // Add margin to the left and bottom
          />
        </h1>
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
