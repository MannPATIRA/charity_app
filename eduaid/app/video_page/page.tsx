"use client";

import { useState } from 'react'
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { ScrollArea } from "../../components/ui/scroll-area"
import { Send } from "lucide-react"

export default function CharitySchoolSelector() {
  const [messages, setMessages] = useState([
    { text: "Hi, do you have any questions?", sender: "bot" },
    { text: "How can I best support them?", sender: "user" },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [replyIndex, setReplyIndex] = useState(0)

  const replies = [
    "Hello there, how can I assist you today?",
    "It seems like the water in the village is murky and filled with debris, making it unsafe for the community to drink or use for daily needs.",
    "Many students in the village are malnourished, which is affecting their ability to concentrate in school and leading to long-term health problems."
]
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: "user" }])
      setInputMessage("")

      // Send the next predefined reply
      setTimeout(() => {
        if (replyIndex < replies.length) {
          setMessages(prev => [...prev, { text: replies[replyIndex], sender: "bot" }])
          setReplyIndex(prevIndex => prevIndex + 1)
        }
      }, 3000)
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left side - Video and School Selection */}
      <div className="w-1/2 p-4 space-y-4">
        <Card>
          <CardContent className="p-0">
            <div className="aspect-video bg-gray-800 flex items-center justify-center text-white text-2xl font-bold">
              VIDEO
            </div>
          </CardContent>
        </Card>
        <h2 className="text-xl font-bold">Name of College</h2>
        <div className="flex space-x-2">
          <Button variant="outline">Water</Button>
          <Button variant="outline">Light</Button>
        </div>
        <Button className="w-full">SELECT</Button>
      </div>

      {/* Right side - Chat Interface */}
      <div className="w-1/2 p-4 flex flex-col">
        <Card className="flex-grow flex flex-col">
          <CardContent className="flex-grow p-4">
            <ScrollArea className="h-full">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.sender === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardContent className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                type="text"
                placeholder="Start Typing Here"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
