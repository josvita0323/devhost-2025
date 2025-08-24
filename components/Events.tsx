"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
  const bgRef = useRef<HTMLDivElement>(null);
  const eventsContentRef = useRef<HTMLDivElement>(null);
  const eventsTitleRef = useRef<HTMLHeadingElement>(null);
  const eventsCaptionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      requestAnimationFrame(() => {
        gsap.set([eventsTitleRef.current, eventsCaptionRef.current, eventsContentRef.current], { opacity: 0, y: 30 });
        gsap.set(bgRef.current, { scaleY: 0, transformOrigin: "top center" });
        gsap.set(cardsRef.current, { y: 30 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        });

        tl.to(eventsContentRef.current, { opacity: 1, duration: 0.8, ease: "power2.out" }, 0)
          .to(eventsTitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.1)
          .to(eventsCaptionRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.2)
          .to(bgRef.current, { scaleY: 1, duration: 1, ease: "power2.out" }, 0.2);

        // Cards animation
        cardsRef.current.forEach((card) => {
          gsap.to(card, {
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none none",
            },
          });
        });
      });

      // Responsive clip-path for background
      const updateClipPath = () => {
        if (!bgRef.current) return;
        const width = window.innerWidth;
        if (width >= 1024) {
          bgRef.current.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 92%, 85% 100%, -5% 100%)";
        } else if (width >= 640) {
          bgRef.current.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 95%, 90% 100%, 0% 100%)";
        } else {
          bgRef.current.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 97%, 95% 100%, 0% 100%)";
        }
      };

      updateClipPath();
      window.addEventListener("resize", updateClipPath);
      return () => window.removeEventListener("resize", updateClipPath);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative flex flex-col items-center bg-black overflow-hidden pt-20 pb-20">
      {/* Green background with responsive cut */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-[#b4ff39] bg-opacity-5"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 92%, 85% 100%, -5% 100%)" }}
      />

      {/* Heading */}
      <div ref={eventsContentRef} className="mb-16 text-center relative z-10 px-4">
        <h1 ref={eventsTitleRef} className="font-orbitron text-4xl font-bold sm:text-5xl lg:text-6xl text-black">
          DevHost Events
        </h1>
        <div ref={eventsCaptionRef} className="mt-4 text-lg sm:text-xl px-4">
          <DecryptText
            text="> Build, Compete, and Leave Your Mark"
            startDelayMs={200}
            trailSize={6}
            flickerIntervalMs={50}
            revealDelayMs={100}
            className="font-orbitron text-black"
          />
        </div>
      </div>

      {/* Event cards */}
      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-2 relative z-10 px-4">
        {events.map((event, idx) => {
          const noRegister = [6, 7, 8].includes(event.id);
          return (
            <div
              key={event.id}
              ref={(el) => { if (el) cardsRef.current[idx] = el; }}
              className="relative mx-auto w-full overflow-hidden"
              style={{
                clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
              }}
            >
              <div
                className="m-[2px] flex flex-col sm:flex-row gap-3 p-4 relative z-10"
                style={{
                  clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
                  backgroundColor: "#101810",
                  border: "2px solid #b4ff39",
                }}
              >
                <div
                  className="relative w-full sm:w-1/2 aspect-[4/5] overflow-hidden"
                  style={{ clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)" }}
                >
                  <Image src={event.image} alt={event.title} width={500} height={500} className="object-cover w-full h-full" />
                </div>

                <div className="flex flex-1 flex-col justify-start pl-0 sm:pl-4 mt-3 sm:mt-0 px-2">
                  <h2 className="mb-2 text-lg font-orbitron font-bold text-[#b4ff39] lg:text-xl">&gt; {event.title}</h2>
                  <p className="mb-1 text-sm italic text-white/90">{event.tagline}</p>
                  <p className="mb-2 text-xs text-white/70 lg:text-sm">{event.description}</p>
                  <div className="space-y-0.5 text-xs text-white/80 lg:text-sm">
                    <p><span className="mr-1 font-semibold text-[#b4ff39]">Date:</span>{event.date}</p>
                    <p><span className="mr-1 font-semibold text-[#b4ff39]">Time:</span>{event.time}</p>
                    <p><span className="mr-1 font-semibold text-[#b4ff39]">Organizer:</span>{event.organizer}</p>
                    <p><span className="mr-1 font-semibold text-[#b4ff39]">Contact:</span>{event.contact}</p>
                  </div>
                  {!noRegister && (
                    <div className="mt-3 flex justify-start">
                      <button
                        className="text-black font-orbitron m-[10px] flex cursor-pointer items-center gap-2 bg-[#b4ff39] px-6 py-2 text-xs font-bold tracking-wider uppercase"
                        style={{
                          clipPath: "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)"
                        }}
                      >
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
