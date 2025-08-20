"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const events = [
  {
    id: 1,
    title: "Loot & Lead",
    tagline: "Battle it out in the ultimate BGMI showdown",
    description:
      "Compete with the best teams in a high stakes BGMI tournament. Strategy, teamwork, and reflexes will decide the champions.",
    date: "6 Nov",
    time: "9:00 AM",
    organizer: "Yishith",
    contact: "later",
    image: "/demo.jpeg",
  },
  {
    id: 2,
    title: "R00TQuest",
    tagline: "Crack the code. Capture the flag.",
    description:
      "Test your cybersecurity skills in a capture-the-flag challenge filled with real-world hacking scenarios.",
    date: "7 Nov",
    time: "10:00 AM",
    organizer: "Koshin",
    contact: "later",
    image: "/demo.jpeg",
  },
  {
    id: 3,
    title: "How I Met My Investor",
    tagline: "Pitch. Persuade. Prevail.",
    description:
      "A tech pitching event where young entrepreneurs showcase innovative ideas to potential investors.",
    date: "7 Nov",
    time: "2:00 PM",
    organizer: "Varsha",
    contact: "later",
    image: "/demo.jpeg",
  },
  {
    id: 4,
    title: "Oh My Grid!",
    tagline: "Untangle the CSS chaos",
    description:
      "Showcase your front-end magic in a CSS battle where design meets speed and creativity.",
    date: "6 Nov",
    time: "11:00 AM",
    organizer: "Manvitha",
    contact: "later",
    image: "/demo.jpeg",
  },
  {
    id: 5,
    title: "O(n)Slought",
    tagline: "Compete. Solve. Dominate.",
    description:
      "Take part in a competitive programming battle designed to push your problem solving limits.",
    date: "7 Nov",
    time: "9:30 AM",
    organizer: "Sthuthi",
    contact: "later",
    image: "/demo.jpeg",
  },
  {
    id: 6,
    title: "Tech-Tac-Toe",
    tagline: "Think fast. Play smarter.",
    description: "Solve, strategize, and strike the winning line",
    date: "8 Nov",
    time: "11:00 PM",
    organizer: "Hitha",
    contact: "later",
    image: "/demo.jpeg",
  },
  {
    id: 7,
    title: "Speed Typing",
    tagline: "Fingers on fire.",
    description:
      "Compete to showcase your typing speed and accuracy in a thrilling typing challenge.",
    date: "All 3 days",
    time: "12:00 PM",
    organizer: "TBA",
    contact: "later",
    image: "/demo.jpeg",
  },
  {
    id: 8,
    title: "Rubiks Cube",
    tagline: "Twist. Turn. Solve.",
    description:
      "Show your cube-solving speed and algorithms in a high-pressure cubing competition.",
    date: "All 3 days",
    time: "2:30 PM",
    organizer: "TBA",
    contact: "later",
    image: "/demo.jpeg",
  },
];

export default function Events() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (cardsRef.current.length > 0) {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      {/* 🔥 Heading Section with added space */}
      <div ref={headingRef} className="text-center mb-16 mt-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold">
          <span className="text-white">DevHost </span>
          <span className="text-[#a3ff12] drop-shadow-[0_0_15px_#a3ff12]">
            Events
          </span>
        </h1>
        <p className="text-[#a3ff12] font-bold mt-4 text-lg sm:text-xl">
          &gt; Build, Compete, and Leave Your Mark
        </p>
        <p className="text-white font-bold mt-6 flex items-center justify-center gap-2">
          <span className="w-3 h-3 bg-[#a3ff12] shadow-[0_0_10px_#a3ff12] rounded-sm"></span>
          <span className="text-xl sm:text-2xl tracking-wider">
            {events.length} EVENTS AVAILABLE
          </span>
        </p>
        <div className="mt-4 w-24 h-1 bg-[#a3ff12] mx-auto shadow-[0_0_10px_#a3ff12]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1440px]">
        {events.map((event, idx) => (
          <div
            key={event.id}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className="relative w-full mx-auto aspect-[7/5] max-w-[700px] lg:max-w-[700px]"
          >
            <Image
              src="/Group2010.svg"
              alt="Card Background"
              fill
              className="absolute inset-0 object-contain pointer-events-none"
              priority
            />

            <div className="absolute inset-0 flex flex-row p-[8%] lg:p-[6%] gap-[11%]">
              <div className="relative w-[54.2%] lg:w-[51%] lg:h-[95%] h-full -ml-5">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover rounded-md border-2 border-[#a3ff12] shadow-[0_0_15px_#a3ff12]"
                  style={{
                    clipPath:
                      "polygon(12% 0, 100% 0, 100% 100%, 0 100%, 0 12%)",
                    objectPosition: "center",
                  }}
                />
              </div>

              <div className="flex-1 flex flex-col justify-between py-7 overflow-hidden">
                <div className="flex-1 overflow-y-auto pr-1">
                  <h2 className="text-[#a3ff12] font-bold text-lg lg:text-2xl mb-6 drop-shadow-[0_0_8px_#a3ff12] leading-tight">
                    {event.title}
                  </h2>
                  <p className="text-white/90 italic mb-2 text-sm lg:text-base leading-tight">
                    {event.tagline}
                  </p>
                  <p className="text-white/70 mb-3 text-xs lg:text-sm leading-relaxed flex-1">
                    {event.description}
                  </p>

                  <div className="text-white/80 text-[10px] lg:text-sm space-y-0.5">
                    <p className="flex flex-wrap">
                      <span className="text-[#a3ff12] font-semibold mr-1">
                        Date:
                      </span>
                      <span>{event.date}</span>
                    </p>
                    <p className="flex flex-wrap">
                      <span className="text-[#a3ff12] font-semibold mr-1">
                        Time:
                      </span>
                      <span>{event.time}</span>
                    </p>
                    <p className="flex flex-wrap">
                      <span className="text-[#a3ff12] font-semibold mr-1">
                        Organizer:
                      </span>
                      <span>{event.organizer}</span>
                    </p>
                    <p className="flex flex-wrap">
                      <span className="text-[#a3ff12] font-semibold mr-1">
                        Contact:
                      </span>
                      <span>{event.contact}</span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-start mt-2">
                  <Link
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-32 h-10 lg:w-60 lg:h-12 cursor-pointer transition-all duration-300 hover:scale-105">
                      <Image
                        src="/Group2012.svg"
                        alt="Register"
                        fill
                        className="object-contain"
                      />
                      <span className="absolute inset-0 flex items-center justify-center font-orbitron text-white text-sm lg:text-lg font-bold">
                        Register
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
