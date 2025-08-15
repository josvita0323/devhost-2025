"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const events = [
  {
    id: 1,
    name: "BGMI - Loot & Lead",
    tagline: "Battle Royale Supremacy",
    description:
      "Dominate the battlegrounds in this intense BGMI tournament. Strategic gameplay meets fast-paced action in the ultimate survival challenge.",
    image: "/sosc_logo.svg",
    date: "6th Nov",
    time: "10:30am - 1:30pm",
    organizer: "someone",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "How I Met My Investor",
    tagline: "Pitch Perfect Moments",
    description:
      "Bring your ideas to life and compete for roles in the future of technology and entrepreneurship. Connect with investors and showcase innovation.",
    image: "/sosc_logo.svg",
    date: "7th Nov",
    time: "2:00pm - 5:00pm",
    organizer: "someone else",
    phone: "8904315769",
  },
  {
    id: 3,
    name: "O(n)slaught",
    tagline: "Code Your Way to Victory",
    description:
      "Competitive coding at its finest. Solve complex algorithms and data structures challenges in this high-intensity programming competition.",
    image: "/sosc_logo.svg",
    date: "7th Nov",
    time: "9:00am - 12:00pm",
    organizer: "someone special",
    phone: "9123456789",
  },
  {
    id: 4,
    name: "Oh My Grid!",
    tagline: "CSS Mastery Challenge",
    description:
      "Showcase your CSS skills in this creative web design competition. Build stunning layouts and responsive designs using modern CSS techniques.",
    image: "/sosc_logo.svg",
    date: "6th Nov",
    time: "1:00pm - 4:00pm",
    organizer: "someone imp",
    phone: "8765432109",
  },
  {
    id: 5,
    name: "CTF - Capture The Flag",
    tagline: "Cybersecurity Warfare",
    description:
      "Test your hacking skills and cybersecurity knowledge. Solve challenges, find vulnerabilities, and capture flags in this digital battleground.",
    image: "/sosc_logo.svg",
    date: "7th Nov",
    time: "10:00am - 4:00pm",
    organizer: "someone famous",
    phone: "5432109876",
  },
  {
    id: 6,
    name: "Tech Tac Toe",
    tagline: "Strategic Fun Unleashed",
    description:
      "A fun twist on the classic game with technology challenges. Test your strategic thinking and tech knowledge in this engaging competition.",
    image: "/sosc_logo.svg",
    date: "8th Nov",
    time: "3:30pm - 6:30pm",
    organizer: "not me",
    phone: "7654321098",
  },
]

export default function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const eventsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      })

      headerTl
        .from(".cyber-title", {
          opacity: 0,
          scale: 0.5,
          rotationX: 90,
          transformOrigin: "center center",
          duration: 1.2,
          ease: "back.out(1.7)",
        })
        .from(
          ".cyber-subtitle",
          {
            opacity: 0,
            y: 50,
            rotationY: 45,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".header-accent",
          {
            scaleX: 0,
            rotation: 180,
            duration: 1.2,
            ease: "elastic.out(1, 0.3)",
          },
          "-=0.4",
        )

      gsap.set(".event-item", {
        opacity: 0,
        x: -200,
        rotationY: -45,
        scale: 0.8,
      })

      events.forEach((_, index) => {
        const isEven = index % 2 === 0

        ScrollTrigger.create({
          trigger: `.event-item-${index}`,
          start: "top 85%",
          end: "bottom 15%",
          onEnter: () => {
            gsap.to(`.event-item-${index}`, {
              opacity: 1,
              x: 0,
              rotationY: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              delay: index * 0.1,
            })

            gsap.from(`.event-item-${index} .event-image`, {
              opacity: 0,
              scale: 0.9,
              duration: 1,
              ease: "power2.out",
              delay: 0.3,
            })

            gsap.from(`.event-item-${index} .event-title`, {
              opacity: 0,
              y: 30,
              skewX: isEven ? 15 : -15,
              duration: 0.8,
              ease: "power2.out",
              delay: 0.5,
            })

            gsap.from(`.event-item-${index} .event-description`, {
              opacity: 0,
              x: isEven ? 50 : -50,
              duration: 1,
              ease: "power2.out",
              delay: 0.7,
            })

            gsap.from(`.event-item-${index} .event-details`, {
              opacity: 0,
              y: 20,
              scale: 0.9,
              duration: 0.8,
              ease: "power2.out",
              delay: 0.9,
            })
          },
          onLeave: () => {
            gsap.to(`.event-item-${index}`, {
              opacity: 0.3,
              scale: 0.95,
              duration: 0.5,
            })
          },
          onEnterBack: () => {
            gsap.to(`.event-item-${index}`, {
              opacity: 1,
              scale: 1,
              duration: 0.5,
            })
          },
        })

        gsap.to(`.timeline-dot-${index}`, {
          y: -20,
          duration: 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.2,
        })
      })

      ScrollTrigger.create({
        trigger: ".stats-section",
        start: "top 80%",
        onEnter: () => {
          gsap.from(".stat-item", {
            opacity: 0,
            y: 50,
            rotationX: 90,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
          })

          gsap.from(".stat-number", {
            textContent: 0,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            stagger: 0.3,
          })
        },
      })

      gsap.to(".scan-line", {
        y: "100vh",
        duration: 3,
        ease: "none",
        repeat: -1,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black relative overflow-hidden"
      role="main"
      aria-label="Cyberpunk Events Section"
      style={
        {
          "--neon-green": "#a3ff12",
          "--neon-green-glow": "rgba(163, 255, 18, 0.3)",
          "--neon-green-dim": "rgba(163, 255, 18, 0.1)",
          "--neon-green-bright": "rgba(163, 255, 18, 0.8)",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,255,18,0.03),transparent_70%)]" />
        <div className="scan-line absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#a3ff12] to-transparent opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#a3ff12] rounded-full animate-pulse opacity-30" />
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#a3ff12] rounded-full animate-pulse opacity-20"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-3/4 w-1 h-1 bg-[#a3ff12] rounded-full animate-pulse opacity-25"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div ref={headerRef} className="relative pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center relative">
            <div className="cyber-title relative inline-block">
              <h1 className="mt-24 mb-12 pb-4 text-center text-3xl text-white md:text-5xl max-w-4xl mx-auto leading-tight font-dystopian">
                 DevHost Events
              </h1>
            </div>

            <div className="cyber-subtitle mt-6">
              <p className="text-[#a3ff12]/80 text-lg md:text-xl font-mono opacity-80">
                &gt; Build, Compete, and Leave Your Mark
              </p>
              <div className="flex justify-center items-center mt-3 space-x-2" aria-hidden="true">
                <div className="w-2 h-2 bg-[#a3ff12] rounded-full animate-ping" />
                <span className="text-white text-sm font-mono">6 EVENTS AVAILABLE</span>
                <div className="w-2 h-2 bg-[#a3ff12] rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>

            <div
              className="header-accent mt-8 mx-auto w-64 h-0.5 bg-gradient-to-r from-transparent via-[#a3ff12] to-transparent relative"
              aria-hidden="true"
            >
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#a3ff12] rounded-full animate-pulse opacity-20" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div ref={eventsRef} className="relative">
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#a3ff12] via-[#a3ff12]/50 to-transparent shadow-[0_0_10px_rgba(163,255,18,0.3)]"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {events.map((event, index) => (
              <article
                key={event.id}
                className={`event-item event-item-${index} relative flex items-start space-x-8 group`}
              >
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`timeline-dot-${index} w-4 h-4 bg-[#a3ff12] rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(163,255,18,0.5)]`}
                  />
                  <div className="absolute inset-0 bg-[#a3ff12] rounded-full animate-ping opacity-20" />
                </div>

                <div className="flex-1 bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-sm border border-gray-800 hover:border-[#a3ff12]/50 hover:shadow-[0_0_30px_rgba(163,255,18,0.1)] transition-all duration-500 p-6 relative overflow-hidden rounded-lg">
                 
                  {/* Event header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                      <span className="text-[#a3ff12] font-mono text-lg font-bold bg-[#a3ff12]/10 px-2 py-1 rounded border border-[#a3ff12]/30">
                        #{event.id.toString().padStart(2, "0")}
                      </span>
                      <h3 className="event-title text-xl md:text-2xl font-bold text-white group-hover:text-[#a3ff12] transition-colors duration-300">
                        {event.name}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-3">
                      <time
                        className="text-[#a3ff12] font-mono text-sm bg-[#a3ff12]/10 px-3 py-1 rounded border border-[#a3ff12]/30"
                        dateTime={event.date}
                      >
                        {event.date}
                      </time>
                    </div>
                  </div>

                  {/*  details  */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="event-image aspect-square relative overflow-hidden border border-gray-700 group-hover:border-[#a3ff12]/30 transition-colors duration-300 rounded-lg shadow-lg">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={`${event.name} event preview`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/*  info */}
                    <div className="md:col-span-2 space-y-4">
                      <div className="event-tagline">
                        <span className="text-[#a3ff12] font-mono text-sm tracking-wider bg-[#a3ff12]/5 px-2 py-1 rounded border border-[#a3ff12]/20">
                          {event.tagline}
                        </span>
                      </div>

                      <p className="event-description text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {event.description}
                      </p>

                      <div className="event-details space-y-3">
                        <div className="flex items-center text-sm">
                          <span className="text-[#a3ff12] mr-3 w-6 h-6 flex items-center justify-center border border-[#a3ff12] rounded text-xs font-mono bg-[#a3ff12]/10">
                            T
                          </span>
                          <div>
                            <div className="text-xs text-gray-500 font-mono">DATE & TIME</div>
                            <div className="text-white font-medium">
                              {event.date} | {event.time}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center text-sm">
                          <span className="text-[#a3ff12] mr-3 w-6 h-6 flex items-center justify-center border border-[#a3ff12] rounded text-xs font-mono bg-[#a3ff12]/10">
                            O
                          </span>
                          <div>
                            <div className="text-xs text-gray-500 font-mono">ORGANIZER</div>
                            <div className="text-white font-medium">{event.organizer}</div>
                          </div>
                        </div>

                        <div className="flex items-center text-sm">
                          <span className="text-[#a3ff12] mr-3 w-6 h-6 flex items-center justify-center border border-[#a3ff12] rounded text-xs font-mono bg-[#a3ff12]/10">
                            C
                          </span>
                          <div>
                            <div className="text-xs text-gray-500 font-mono">CONTACT</div>
                            <div className="text-white font-mono font-medium">{event.phone}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 border border-[#a3ff12]/0 group-hover:border-[#a3ff12]/20 transition-colors duration-300 pointer-events-none rounded-lg"
                    aria-hidden="true"
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#a3ff12] to-transparent" />
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#a3ff12] to-transparent" />
                    
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#a3ff12]" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#a3ff12]" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#a3ff12]" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#a3ff12]" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="stats-section mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="stat-item text-center p-6 border border-gray-800 bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-sm hover:border-[#a3ff12]/30 transition-colors duration-300 rounded-lg">
            <div className="stat-number text-3xl font-bold text-[#a3ff12] font-mono">6</div>
            <div className="text-gray-400 text-sm font-mono mt-1">TOTAL EVENTS</div>
          </div>
          <div className="stat-item text-center p-6 border border-gray-800 bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-sm hover:border-[#a3ff12]/30 transition-colors duration-300 rounded-lg">
            <div className="stat-number text-3xl font-bold text-[#a3ff12] font-mono">1200</div>
            <div className="text-gray-400 text-sm font-mono mt-1">PARTICIPANTS</div>
          </div>
          <div className="stat-item text-center p-6 border border-gray-800 bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-sm hover:border-[#a3ff12]/30 transition-colors duration-300 col-span-2 md:col-span-1">
            <div className="stat-number text-3xl font-bold text-[#a3ff12] font-mono">15</div>
            <div className="text-gray-400 text-sm font-mono mt-1"> COLLEGES </div>
          </div>
        </div>
      </div>
    </section>
  )
}
