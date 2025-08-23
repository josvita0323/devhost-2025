"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecryptText from "./animated/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const events = [
  { id: 1, title: "Loot & Lead", tagline: "Battle it out in BGMI", description: "Compete with the best teams in a high stakes BGMI tournament.", date: "7 Nov", time: "9:00 AM onwards", organizer: "Yishith", contact: "‪+91 9964057549‬", image: "/demo.jpeg" },
  { id: 2, title: "R00TQuest", tagline: "Crack the code. Capture the flag.", description: "Test your cybersecurity skills in a capture-the-flag challenge.", date: "7 Nov", time: "11:00 - 12:30", organizer: "Koshin", contact: "‪+91 7899715941‬", image: "/demo.jpeg" },
  { id: 3, title: "How I Met My Investor", tagline: "Pitch. Persuade. Prevail.", description: "Pitch your innovative tech ideas to potential investors.", date: "7 Nov", time: "11:00 - 12:30", organizer: "Varsha", contact: "‪+91 7022709062‬", image: "/demo.jpeg" },
  { id: 4, title: "Oh My Grid!", tagline: "Untangle the CSS chaos", description: "Showcase your frontend magic in a CSS battle", date: "7 Nov", time: "3:00 - 5:00", organizer: "Manvitha", contact: "‪+91 9686515869‬", image: "/demo.jpeg" },
  { id: 5, title: "O(n)Slaught", tagline: "Compete. Solve. Dominate.", description: "Take part in a competitive programming battle to showcase your problem solving skills.", date: "7 Nov", time: "3:00 - 5:00", organizer: "Sthuthi", contact: "‪+91 7795009031‬", image: "/demo.jpeg" },
  { id: 6, title: "Tech-Tac-Toe", tagline: "Think fast. Play smarter.", description: "Solve, strategize, and strike the winning line", date: "8 Nov", time: "9:00 - 10:30", organizer: "Hitha", contact: "‪+91 9740451519‬", image: "/demo.jpeg" },
  { id: 7, title: "Speed Typing", tagline: "Fingers on fire.", description: "Compete to showcase your typing speed and accuracy", date: "All 3 days", time: "9:00 AM", organizer: "TBA", contact: "later", image: "/demo.jpeg" },
  { id: 8, title: "Rubik's Cube", tagline: "Twist. Turn. Solve.", description: "Show your cube-solving speed in a high-pressure cubing competition.", date: "All 3 days", time: "9:00 AM", organizer: "TBA", contact: "later", image: "/demo.jpeg" },
];

export default function Events() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Green background animation
      if (bgRef.current) {
        gsap.set(bgRef.current, { scaleY: 0, transformOrigin: "top" });
        gsap.to(bgRef.current, {
          scaleY: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 5,
          },
        });
      }

      // Cards animation
      cardsRef.current.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative flex min-h-screen flex-col items-center bg-black p-4 sm:p-6 lg:p-8 overflow-hidden">
      {/* Animated green background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[#a3ff12] bg-opacity-20"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
        }}
      />

      {/* Heading */}
      <div className="mt-20 mb-16 text-center relative z-10">
        <motion.h1
          className="font-orbitron text-4xl font-bold sm:text-5xl lg:text-6xl text-black drop-shadow-[0_0_15px_#a3ff12]"
          initial={{ skewY: 2 }}
          whileInView={{ skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          DevHost Events
        </motion.h1>

        {/* Replacing static text with DecryptText */}
        <div className="mt-4 text-lg sm:text-xl font-bold">
          <DecryptText
            text="> Build, Compete, and Leave Your Mark"
            startDelayMs={200}
            trailSize={6}
            flickerIntervalMs={50}
            revealDelayMs={100}
            className="text-black drop-shadow-[0_0_15px_#a3ff12]"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-2 relative z-10">
        {events.map((event, idx) => {
          const noRegister = [6, 7, 8].includes(event.id);
          return (
            <div
              key={event.id}
              ref={(el) => { if (el) cardsRef.current[idx] = el; }}
              className="relative mx-auto w-full bg-primary overflow-hidden"
              style={{
                clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
              }}
            >
              {/* Card with green outline */}
              <div
                className="m-[2px] flex flex-col sm:flex-row gap-3 p-4 relative z-10"
                style={{
                  clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                  backgroundColor: "#101810",
                  border: "2px solid #a3ff12",
                }}
              >
                <div className="relative w-full sm:w-1/2 aspect-[4/5]">
                  <Image src={event.image} alt={event.title} width={500} height={500} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-1 flex-col justify-start pl-0 sm:pl-4 mt-3 sm:mt-0">
                  <h2 className="mb-2 text-lg font-bold text-[#a3ff12] lg:text-xl">{event.title}</h2>
                  <p className="mb-1 text-sm italic text-white/90">{event.tagline}</p>
                  <p className="mb-2 text-xs text-white/70 lg:text-sm">{event.description}</p>
                  <div className="space-y-0.5 text-xs text-white/80 lg:text-sm">
                    <p><span className="mr-1 font-semibold text-[#a3ff12]">Date:</span>{event.date}</p>
                    <p><span className="mr-1 font-semibold text-[#a3ff12]">Time:</span>{event.time}</p>
                    <p><span className="mr-1 font-semibold text-[#a3ff12]">Organizer:</span>{event.organizer}</p>
                    <p><span className="mr-1 font-semibold text-[#a3ff12]">Contact:</span>{event.contact}</p>
                  </div>
                  {!noRegister && (
                    <div className="mt-3 flex justify-start">
                      <button className="text-black font-orbitron m-[10px] flex cursor-pointer items-center gap-2 bg-[#a3ff12] px-6 py-2 text-xs font-bold tracking-wider uppercase">
                        Register
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
