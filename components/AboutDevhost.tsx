"use client";

import React, { useEffect, useRef } from "react";
import { Download } from "lucide-react";
import { HoverBorderGradient } from "@/components/old/hover-border-gradient";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FloatingLeavesBackground } from "@/components/ui/FloatingLeavesBackground";

gsap.registerPlugin(ScrollTrigger);

export default function AboutDevhost() {
  const titleRef = useRef(null);
  const captionRef = useRef(null);
  const aboutRef = useRef(null);
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  const devhostData = {
    title: "About Devhost",
    caption: "Expertise Redefined, Experience Reimagined.",
    about:
      "Devhost, the flagship event is a remarkable tech convergence by Sahyadri Open Source Community (SOSC), is set to be an exhilarating experience with an exciting mix of technical and non-technical events. It seeks to equip participants with knowledge and skills, while encouraging curiosity and fostering innovation...",
    logoSrc: "/logo.svg",
  };

  useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  tl.from(titleRef.current, { y: 40, opacity: 0, duration: 0.6 })
    .from(captionRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
    .from(aboutRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
    .from(logoRef.current, {
      opacity: 0,
      scale: 0.4,
      rotate: -120,
      x: -300,
      y: -100,
      duration: 1.4,
      ease: "power3.out",
      onComplete: () => {
        // Floating (bobbing)
        gsap.to(logoRef.current, {
          y: "-=10",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

        // Glow Pulse
        gsap.to(logoRef.current, {
          boxShadow: "0 0 20px #00ff37ff",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Slow subtle rotation
        gsap.to(logoRef.current, {
          rotation: 2,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      },
    });
}, []);


  return (
    <div
      ref={containerRef}
      className="relative flex justify-center pb-20 px-4 md:px-8 items-center w-full bg-[#0c0c0c] text-white overflow-hidden"
    >
      {/* Floating Leaves Background Component */}
      <FloatingLeavesBackground />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1
            ref={titleRef}
            className="select-none text-3xl md:text-5xl font-bold pb-4"
          >
            {devhostData.title}
          </h1>
          <h2
            ref={captionRef}
            className="text-primary text-base md:text-lg font-semibold mb-4 tracking-widest uppercase"
          >
            {devhostData.caption}
          </h2>
          <p
            ref={aboutRef}
            className="text-sm md:text-lg tracking-wider text-gray-300 leading-relaxed"
          >
            {devhostData.about}
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8">
            <a href="/brochure/Event Rulebook - Devhost.pdf" download>
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-background px-6 py-3 group flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <Download size={20} className="text-neon-green" />
                <span className="text-neon-green text-sm md:text-base">
                  Event Rulebook
                </span>
              </HoverBorderGradient>
            </a>

            <a href="/brochure/General Brochure Devhost.pdf" download>
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-background px-6 py-3 group flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <Download size={20} className="text-neon-green" />
                <span className="text-neon-green text-sm md:text-base">
                  DevHost Brochure
                </span>
              </HoverBorderGradient>
            </a>
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex justify-center md:justify-end">
          <Image
            ref={logoRef}
            src={devhostData.logoSrc}
            alt="Devhost Logo"
            width={280}
            height={280}
            className="rounded-xl shadow-lg max-w-[300px] md:max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
