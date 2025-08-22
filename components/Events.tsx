"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

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
    date: "7 Nov",
    time: "9:00 AM onwards",
    organizer: "Yishith",
    contact: "+91 9964057549",
    image: "/demo.jpeg",
  },
  {
    id: 2,
    title: "R00TQuest",
    tagline: "Crack the code. Capture the flag.",
     description:
      "Test your cybersecurity skills in a capture-the-flag challenge filled with real-world hacking scenarios.",
    date: "7 Nov",
    time: "11:00 - 12:30",
    organizer: "Koshin",
    contact: "+91 7899715941",
    image: "/demo.jpeg",
  },
  {
    id: 3,
    title: "How I Met My Investor",
    tagline: "Pitch. Persuade. Prevail.",
    description:
      "A tech pitching event where young entrepreneurs showcase innovative ideas to potential investors.",
    date: "7 Nov",
    time: "11:00 - 12:30",
    organizer: "Varsha",
    contact: "+91 7022709062",
    image: "/demo.jpeg",
  },
  {
    id: 4,
    title: "Oh My Grid!",
    tagline: "Untangle the CSS chaos",
    description:
      "Showcase your front-end magic in a CSS battle where design meets speed and creativity.",
    date: "7 Nov",
    time: "3:00 - 5:00",
    organizer: "Manvitha",
    contact: "+91 9686515869",
    image: "/demo.jpeg",
  },
  {
    id: 5,
    title: "O(n)Slaught",
    tagline: "Compete. Solve. Dominate.",
    description:
      "Take part in a competitive programming battle designed to push your problem solving limits.",
    date: "7 Nov",
    time: "3:00 - 5:00",
    organizer: "Sthuthi",
    contact: "+91 7795009031",
    image: "/demo.jpeg",
  },
  {
    id: 6,
    title: "Tech-Tac-Toe",
    tagline: "Think fast. Play smarter.",
    description: "Solve, strategize, and strike the winning line",
    date: "8 Nov",
    time: "9:00 - 10:30",
    organizer: "Hitha",
    contact: "+91 9740451519",
    image: "/demo.jpeg",
  },
  {
    id: 7,
    title: "Speed Typing",
    tagline: "Fingers on fire.",
    description:
      "Compete to showcase your typing speed and accuracy in a thrilling typing challenge.",
    date: "All 3 days",
    time: "9:00 AM",
    organizer: "TBA",
    contact: "later",
    image: "/demo.jpeg",
  },
  {
    id: 8,
    title: "Rubik's Cube",
    tagline: "Twist. Turn. Solve.",
    description:
      "Show your cube-solving speed and algorithms in a high-pressure cubing competition.",
    date: "All 3 days",
    time: "9:00 AM",
    organizer: "TBA",
    contact: "later",
    image: "/demo.jpeg",
  },
];

export default function Events() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Heading fade in
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

    // Cards flip animation
    cardsRef.current.forEach((card) => {
  if (card) {
    gsap.fromTo(
      card,
      { rotateY: -90, opacity: 0, transformOrigin: "center" },
      {
        rotateY: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 60%", // card is half visible
          end: "bottom top", // until the bottom leaves the viewport
          toggleActions: "play reverse play reverse",
          onEnterBack: () => {
            gsap.to(card, {
              rotateY: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              rotateY: -90,
              opacity: 0,
              duration: 1,
              ease: "power3.in",
            });
          },
        },
      }
    );
  }
});

  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center bg-black p-4 sm:p-6 lg:p-8">
      {/* Heading Section */}
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 mb-16 text-center"
      >
        <motion.h1
          className="font-orbitron text-4xl font-bold sm:text-5xl lg:text-6xl"
          initial={{ skewY: 2 }}
          whileInView={{ skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">DevHost </span>
          <span className="text-[#a3ff12] drop-shadow-[0_0_15px_#a3ff12]">
            Events
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg font-bold text-[#a3ff12] sm:text-xl"
        >
          &gt; Build, Compete, and Leave Your Mark
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-2 font-bold text-white"
        >
          <span className="h-3 w-3 rounded-sm bg-[#a3ff12] shadow-[0_0_10px_#a3ff12]"></span>
          <span className="text-xl tracking-wider sm:text-2xl font-orbitron">
            {events.length} EVENTS AVAILABLE
          </span>
        </motion.p>

        <motion.div
          className="mx-auto mt-4 h-1 w-24 bg-[#a3ff12] shadow-[0_0_10px_#a3ff12]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Cards Section */}
      <div className="grid w-full max-w-[1440px] grid-cols-1 gap-8 lg:grid-cols-2">
        {events.map((event, idx) => {
          const noRegister = [6, 7, 8].includes(event.id);
          return (
            <motion.div
              key={event.id}
              ref={(el) => {
                cardsRef.current[idx] = el ?? null;
              }}
              className="relative mx-auto aspect-[7/5] w-full max-w-[700px] lg:max-w-[700px] event-card"
            >
              <Image
                src="/Group2010.svg"
                alt="Card Background"
                fill
                className="pointer-events-none absolute inset-0 object-contain"
                priority
              />

              <div className="absolute inset-0 flex flex-row gap-4 p-[8%] lg:p-[9%]">
                <div className="relative -ml-5 h-full w-[54.2%] lg:h-[95%] lg:w-[51%]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="rounded-md border-2 border-[#a3ff12] object-cover shadow-[0_0_15px_#a3ff12]"
                    style={{
                      clipPath:
                        "polygon(12% 0, 100% 0, 100% 100%, 0 100%, 0 12%)",
                      objectPosition: "center",
                    }}
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between overflow-hidden py-1 sm:py-7">
                  <div className="flex-1 overflow-y-auto pr-1 text-left">
                    <motion.h2 className="mb-6 text-lg leading-tight font-bold text-[#a3ff12] text-center lg:text-2xl">
                      {event.title}
                    </motion.h2>

                    <motion.p className="mb-2 text-sm leading-tight text-white/90 italic lg:text-base">
                      {event.tagline}
                    </motion.p>

                    <motion.p className="mb-3 flex-1 text-xs leading-relaxed text-white/70 lg:text-sm">
                      {event.description}
                    </motion.p>

                    <div className="space-y-0.5 text-[10px] text-white/80 lg:text-sm">
                      <p>
                        <span className="mr-1 font-semibold text-[#a3ff12]">
                          Date:
                        </span>
                        <span>{event.date}</span>
                      </p>
                      <p>
                        <span className="mr-1 font-semibold text-[#a3ff12]">
                          Time:
                        </span>
                        <span>{event.time}</span>
                      </p>
                      <p>
                        <span className="mr-1 font-semibold text-[#a3ff12]">
                          Organizer:
                        </span>
                        <span>{event.organizer}</span>
                      </p>
                      <p>
                        <span className="mr-1 font-semibold text-[#a3ff12]">
                          Contact:
                        </span>
                        <span>{event.contact}</span>
                      </p>
                    </div>
                  </div>

                  {!noRegister && (
                    <motion.div className="font-orbitron flex gap-4 justify-center">
                      <button
                        className="bg-primary relative flex cursor-pointer items-center gap-4 mt-4 px-5 py-2 text-xs font-bold tracking-widest text-black uppercase transition"
                        style={{
                          clipPath:
                            "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                        }}
                      >
                        Register
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
