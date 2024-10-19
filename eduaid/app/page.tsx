import Link from "next/link";
import { Button } from "../components/ui/button"; // Assuming you have a button component

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to EduAid</h1>
        <p className="text-gray-600 mt-4">Empowering schools through charitable aid</p>
      </header>

      <main className="flex flex-col sm:flex-row gap-6">
        <Link href="/current_schools">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto px-8">
            View Current Schools
          </Button>
        </Link>
        <Link href="/charity_schools">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto px-8">
            View Charity Schools
          </Button>
        </Link>
        <Link href="/charity_video_upload">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto px-8">
            Upload Video
          </Button>
        </Link>
      </main>

      <footer className="mt-16 text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} EduAid. All rights reserved.</p>
      </footer>
    </div>
  );
}
