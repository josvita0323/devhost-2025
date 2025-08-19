"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Clock, User, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface Event {
  id: number
  title: string
  category: string
  description: string
  date: string
  time: string
  organizer: string
  contact: string
  image: string
}

interface EventCardProps {
  event: Event
  index: number
}

function EventCard({ event, index }: EventCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      tl.fromTo(
        cardRef.current,
        {
          y: 20,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          delay: index * 0.1,
        },
      )

      const handleMouseEnter = () => {
        gsap.to(cardRef.current, {
          scale: 1.02,
          y: -2,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const cardElement = cardRef.current
      if (cardElement) {
        cardElement.addEventListener("mouseenter", handleMouseEnter)
        cardElement.addEventListener("mouseleave", handleMouseLeave)

        return () => {
          cardElement.removeEventListener("mouseenter", handleMouseEnter)
          cardElement.removeEventListener("mouseleave", handleMouseLeave)
        }
      }
    }, cardRef)

    return () => ctx.revert()
  }, [index])

  const handleRegister = () => {
    window.open("https://google.com", "_blank")
  }

  return (
    <div ref={cardRef} className="relative group w-full max-w-3xl">
      <div
        className="relative bg-[#1a1a1a] border-2 border-[#a3ff12] overflow-hidden"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px))",
          width: "100%",
          height: "400px",
        }}
      >
        <div className="absolute top-0 left-0 w-24 h-2 bg-[#a3ff12]"></div>
        <div className="absolute top-0 left-0 w-2 h-24 bg-[#a3ff12]"></div>
        <div className="absolute top-0 right-16 w-16 h-2 bg-[#a3ff12]"></div>
        <div className="absolute top-16 right-0 w-2 h-16 bg-[#a3ff12]"></div>
        <div className="absolute bottom-0 right-0 w-24 h-2 bg-[#a3ff12]"></div>
        <div className="absolute bottom-0 right-0 w-2 h-24 bg-[#a3ff12]"></div>

        <div className="flex h-full p-6">
          <div className="relative overflow-hidden flex items-center justify-center" style={{ width: "340px" }}>
            <div
              className="relative bg-gray-900 overflow-hidden"
              style={{
                width: "320px",
                height: "320px",
              }}
            >
              <Image
                src={event.image || "/placeholder.svg?height=1200&width=1200&query=cyberpunk gaming tournament"}
                alt={event.title}
                width={1200}
                height={1200}
                className="w-full h-full object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
              <div className="absolute top-3 right-3 bg-[#a3ff12]/20 border border-[#a3ff12] px-2 py-1 text-[#a3ff12] text-xs font-mono">
                {event.date}
              </div>
              <div className="absolute top-3 left-3 text-[#a3ff12] font-bold text-lg">
                #{event.id.toString().padStart(2, "0")}
              </div>
            </div>
          </div>

          <div className="flex-1 pl-6 flex flex-col justify-between">
            {/* Header */}
            <div className="space-y-3 flex-shrink-0">
              <h3 className="text-white text-lg font-orbitron leading-tight text-left">{event.title}</h3>
              <Badge
                variant="outline"
                className="bg-[#a3ff12]/20 border-[#a3ff12] text-[#a3ff12] hover:bg-[#a3ff12]/30 text-xs px-3 py-1 w-fit rounded-full"
              >
                {event.category}
              </Badge>
            </div>

            <div className="flex-1 my-4 overflow-hidden">
              <div
                className="h-full overflow-y-auto pr-2 space-y-3"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#a3ff12 transparent",
                }}
                onWheel={(e) => {
                  e.currentTarget.scrollTop += e.deltaY * 0.5
                }}
              >
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3 text-justify hyphens-auto tracking-tight break-words">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-3 h-3 text-[#a3ff12] flex-shrink-0" />
                    <span className="text-xs">
                      <span className="text-[#a3ff12] font-semibold">Time:</span> {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <User className="w-3 h-3 text-[#a3ff12] flex-shrink-0" />
                    <span className="text-xs">
                      <span className="text-[#a3ff12] font-semibold">Organizer:</span> {event.organizer}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-3 h-3 text-[#a3ff12] flex-shrink-0" />
                    <span className="text-xs">
                      <span className="text-[#a3ff12] font-semibold">Contact:</span> {event.contact}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 pt-2">
              <button
                onClick={handleRegister}
                className="relative w-full h-8 group overflow-hidden font-delagothic"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  backgroundColor: "#a3ff12",
                }}
              >
                <div className="absolute inset-0 bg-[#8fd610] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <span className="relative z-10 text-black font-bold text-xs tracking-wide flex items-center justify-center h-full">
                  REGISTER
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const events = [
  {
    id: 1,
    title: "R00TQuest",
    category: "Cybersecurity Challenge",
    description:
      "A thrilling Capture the Flag competition testing participants on cybersecurity, problem-solving, and hacking skills.",
    date: "6 Nov",
    time: "10:00 AM",
    organizer: "Koshin",
    contact: "98765 43210",
    image: "/ctf-event.png",
  },
  {
    id: 2,
    title: "How I Met My Investor",
    category: "Startup Pitch",
    description:
      "Showcase your startup idea to investors in this pitch event. Convince, impress, and secure the spotlight.",
    date: "6 Nov",
    time: "02:00 PM",
    organizer: "Varsha",
    contact: "8765432109",
    image: "/tech-pitch.png",
  },
  {
    id: 3,
    title: "Oh My Grid!",
    category: "Frontend Design",
    description:
      "A design challenge where creativity meets CSS grid mastery. Style your way to victory with clean layouts.",
    date: "7 Nov",
    time: "11:00 AM",
    organizer: "Manvitha",
    contact: "7654321098",
    image: "/css-grid.png",
  },
  {
    id: 4,
    title: "O(n)Slought",
    category: "Competitive Programming",
    description:
      "Tackle algorithmic puzzles and coding challenges in this ultimate competitive programming contest.",
    date: "6 Nov",
    time: "03:00 PM",
    organizer: "Sthuthi Poojary",
    contact: "6543210987",
    image: "/competitive-programming.png",
  },
  {
    id: 5,
    title: "Tech-Tac-Toe",
    category: "Logic & Fun",
    description:
      "A technical twist on tic-tac-toe where coding knowledge meets classic strategy gameplay.",
    date: "8 Nov",
    time: "01:00 PM",
    organizer: "Hitha",
    contact: "5432109876",
    image: "/tech-tac-toe.png",
  },
  {
    id: 6,
    title: "Loot & Lead",
    category: "Battle Royale",
    description:
      "Dominate the battlegrounds in this intense BGMI tournament. Strategic gameplay meets fast-paced action.",
    date: "7 Nov",
    time: "06:00 PM",
    organizer: "Yishith",
    contact: "4321098765",
    image: "/bgmi-tournament.png",
  },
  {
    id: 7,
    title: "Speed Typing",
    category: "Typing Challenge",
    description:
      "Test your speed and accuracy in this high-pressure typing competition. The fastest fingers win.",
    date: "All 3 days",
    time: "11:30 AM",
    organizer: "TBA",
    contact: "3210987654",
    image: "/speed-typing.png",
  },
  {
    id: 8,
    title: "Rubik's Cube",
    category: "Puzzle Solving",
    description:
      "A test of speed and logic — solve the Rubik's cube in record time to claim the top spot.",
    date: "All 3 days",
    time: "12:00 PM",
    organizer: "TBA",
    contact: "2109876543",
    image: "/rubiks-cube.png",
  },
]

export default function Events() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      mainTimeline
        .fromTo(
          titleRef.current,
          {
            y: 30,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
          },
        )
        .fromTo(
          subtitleRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .fromTo(
          counterRef.current,
          {
            y: 15,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )

      gsap.fromTo(
        cardsRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(163,255,18,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.15)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#a3ff12]/5 via-transparent to-[#a3ff12]/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-24">
          <div className="relative inline-block">
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-orbitron mb-8 perspective-1000 relative z-10">
              <span className="text-white">DEVHOST </span>
              <span className="text-[#a3ff12] drop-shadow-[0_0_20px_rgba(163,255,18,0.5)]">EVENTS</span>
            </h1>
          </div>

          <p ref={subtitleRef} className="text-[#a3ff12] text-xl md:text-2xl mb-12 font-default mt-8">
            &gt; Build, Compete, and Leave Your Mark
          </p>

          <div ref={counterRef} className="flex items-center justify-center gap-4 mb-20 font-default">
            <div className="w-3 h-3 bg-[#a3ff12] shadow-[0_0_10px_rgba(163,255,18,0.8)] animate-pulse"></div>
            <span className="text-white font-bold text-xl tracking-wider">9 EVENTS AVAILABLE</span>
          </div>

          <div className="w-32 h-1 bg-[#a3ff12] mx-auto shadow-[0_0_10px_rgba(163,255,18,0.6)]"></div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 font-default lg:grid-cols-2 gap-12 justify-items-center">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a3ff12]/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a3ff12]/5 blur-3xl"></div>
    </section>
 )
}
