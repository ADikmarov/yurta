'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Video, Users, Mic, Globe, Heart } from "lucide-react"

const features = [
  { icon: <MessageCircle className="h-6 w-6" />, title: "Messaging", description: "Connect with friends through instant messaging" },
  { icon: <Video className="h-6 w-6" />, title: "Video Conferencing", description: "Practice speaking with video calls" },
  { icon: <Users className="h-6 w-6" />, title: "Community", description: "Join groups and make new friends" },
  { icon: <Mic className="h-6 w-6" />, title: "Speech Analysis", description: "Improve your pronunciation with AI-powered feedback" },
  { icon: <Globe className="h-6 w-6" />, title: "Global Reach", description: "Connect with people from around the world" },
  { icon: <Heart className="h-6 w-6" />, title: "Safe Space", description: "Practice without fear in a supportive environment" },
]

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only">Yurta</span>
          <img src="/placeholder.svg?height=32&width=32" width="32" height="32" alt="Yurta logo" />
          <span className="ml-2 text-2xl font-bold text-primary">Yurta</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-heading">
                Welcome to Yurta
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Connect, practice languages, and make friends from around the world. Your safe space for personal growth and meaningful conversations.
              </p>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading text-center mb-8">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center p-6 text-center space-y-4">
                    <div className="p-2 bg-primary/10 rounded-full">{feature.icon}</div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading">
                Join Yurta Today
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Start your journey to better language skills and global friendships. Download the app now and become part of our growing community.
              </p>
              <Button size="lg">Download App</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Yurta. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}