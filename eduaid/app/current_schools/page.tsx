import { Bell, Home, LogOut, PlusSquare, School, Search, Settings, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card"
import { Input } from "../../components/ui/input"

export default function CharityDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-primary">CharityEdu</h1>
        </div>
        <nav className="mt-8">
          <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Home className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <School className="mr-3 h-5 w-5" />
            Schools
          </Link>
          <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Users className="mr-3 h-5 w-5" />
            Students
          </Link>
          <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Schools Dashboard</h2>
            <div className="flex items-center">
              <Button variant="outline" size="icon" className="mr-2">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Search and Add School */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <div className="flex justify-between items-center">
            <div className="relative rounded-md shadow-sm w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input type="text" placeholder="Search schools" className="pl-10" />
            </div>
            <Button>
              <PlusSquare className="mr-2 h-5 w-5" />
              Add School
            </Button>
          </div>
        </div>

        {/* School Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <img src={`/lib/school${(index) % 4 + 1}.jpeg`} alt={`School ${index + 1}`} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold">School {index + 1}</h3>
                  <p className="text-sm text-gray-500">Location: City {index + 1}</p>
                  <p className="text-sm text-gray-500">Students: {100 + index * 50}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button variant="outline" size="sm">Edit</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}