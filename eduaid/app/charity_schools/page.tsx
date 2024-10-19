"use client"; 

import { useState } from 'react'
import { Filter, MapPin } from 'lucide-react'

import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Checkbox } from "../../components/ui/checkbox"

// Dummy data for schools
const schools = [
  { id: 1, name: "Sunrise Elementary", location: "Nairobi, Kenya", image: "/placeholder.svg?height=200&width=300", aid: ["water", "education"] },
  { id: 2, name: "Hope High School", location: "Lagos, Nigeria", image: "/placeholder.svg?height=200&width=300", aid: ["electricity", "health"] },
  { id: 3, name: "Future Primary", location: "Accra, Ghana", image: "/placeholder.svg?height=200&width=300", aid: ["food", "education"] },
  { id: 4, name: "Unity College", location: "Kampala, Uganda", image: "/placeholder.svg?height=200&width=300", aid: ["water", "health", "education"] },
  { id: 5, name: "Harmony School", location: "Addis Ababa, Ethiopia", image: "/placeholder.svg?height=200&width=300", aid: ["electricity", "food"] },
  { id: 6, name: "Progress Academy", location: "Dakar, Senegal", image: "/placeholder.svg?height=200&width=300", aid: ["water", "education", "food"] },
]

const aidTypes = ["water", "electricity", "health", "education", "food"]

export default function CharitySchools() {
  const [selectedAid, setSelectedAid] = useState<string[]>([])

  const filteredSchools = selectedAid.length > 0
    ? schools.filter(school => selectedAid.some(aid => school.aid.includes(aid)))
    : schools

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">EduAid Charity</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 md:mb-0">Recommended Schools for Aid</h2>
            <div className="flex items-center">
              <Filter className="mr-2" />
              <span className="font-medium">Filter by aid type:</span>
            </div>
          </div>
          <div className="mb-8 flex flex-wrap gap-4">
            {aidTypes.map((aid) => (
              <div key={aid} className="flex items-center">
                <Checkbox
                  id={aid}
                  checked={selectedAid.includes(aid)}
                  onCheckedChange={(checked) => {
                    setSelectedAid(prev =>
                      checked
                        ? [...prev, aid]
                        : prev.filter(a => a !== aid)
                    )
                  }}
                />
                <label
                  htmlFor={aid}
                  className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {aid.charAt(0).toUpperCase() + aid.slice(1)}
                </label>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchools.map((school) => (
              <Card key={school.id} className="overflow-hidden">
                <img src={school.image} alt={school.name} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{school.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="mr-1 h-4 w-4" />
                    {school.location}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {school.aid.map((aid) => (
                      <span
                        key={aid}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {aid}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Offer Aid</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}