"use client";

import { useState } from 'react'
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Star } from "lucide-react"

const RatingStars = ({ name, rating, setRating }) => {
  return (
    <div className="flex items-center space-x-1">
      <span className="w-16">{name}</span>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 cursor-pointer ${
            star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
          onClick={() => setRating(star)}
          onMouseEnter={() => setRating(star)}
          onMouseLeave={() => setRating(rating)}
        />
      ))}
    </div>
  )
}

export default function CharityVideoUpload() {
  const [videoFile, setVideoFile] = useState(null)
  const [waterRating, setWaterRating] = useState(0)
  const [energyRating, setEnergyRating] = useState(0)
  const [lightRating, setLightRating] = useState(0)

  const handleVideoUpload = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file)
    } else {
      alert('Please upload a valid video file')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="space-y-4">
            <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg overflow-hidden">
              {videoFile ? (
                <video src={URL.createObjectURL(videoFile)} controls className="w-full h-full object-cover" />
              ) : (
                <div className="text-center">
                  <p>VIDEO</p>
                  <p className="text-sm">No video uploaded</p>
                </div>
              )}
            </div>
            <div>
              <Input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="collegeName">Name of College</Label>
              <Input id="collegeName" placeholder="Enter college name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" type="tel" placeholder="Enter phone number" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <RatingStars name="Water" rating={waterRating} setRating={setWaterRating} />
              <RatingStars name="Energy" rating={energyRating} setRating={setEnergyRating} />
              <RatingStars name="Light" rating={lightRating} setRating={setLightRating} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter additional notes" className="h-32" />
            </div>
            <Button className="w-full">Submit</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}