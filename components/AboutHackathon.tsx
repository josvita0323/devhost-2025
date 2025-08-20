"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HoverBorderGradient } from "@/components/old/hover-border-gradient";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const hacRef = useRef<HTMLDivElement>(null);
  const athonRef = useRef<HTMLDivElement>(null);
  const kRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const brownCircleRef = useRef<HTMLDivElement>(null);
  const leftBracketRef = useRef<HTMLDivElement>(null);
  const rightBracketRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      // Base setup
      gsap.set(imageRef.current, { scale: 4, opacity: 1, zIndex: 30 });
      gsap.set(
        [
          hacRef.current,
          athonRef.current,
          kRef.current,
          brownCircleRef.current,
          leftBracketRef.current,
          rightBracketRef.current,
        ],
        { opacity: 0 },
      );
      gsap.set(contentRef.current, { opacity: 0, y: 50 });
      gsap.set(hacRef.current, { x: -300 });
      gsap.set(athonRef.current, { x: 300 });
      gsap.set(kRef.current, { y: 50 });
      gsap.set(leftBracketRef.current, { x: -50 });
      gsap.set(rightBracketRef.current, { x: 50 });

      // Grab all images inside the container
      const images = gsap.utils.toArray<HTMLImageElement>(".hackathon-image");

      // Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "200% bottom",
          scrub: 1,
          pin: true,
        },
      });

      // Animate images sequentially
      images.forEach((img, i) => {
        tl.set(img, { opacity: 1 });
        if (i !== images.length - 1) {
          tl.set(img, { opacity: 0 }, "+=0.1"); // hide after delay except last
        }
      });

      // Scale and transition animations
      tl.to(
        imageRef.current,
        { scale: 0.4, duration: 2, ease: "power2.out" },
        0,
      )
        .to(
          imageRef.current,
          { scale: 0.01, opacity: 0, duration: 1.5, ease: "power2.out" },
          "-=0.5",
        )
        .to(
          hacRef.current,
          { x: -5, opacity: 1, duration: 1.5, ease: "power2.out" },
          "-=2",
        )
        .to(
          athonRef.current,
          { x: 5, opacity: 1, duration: 1.5, ease: "power2.out" },
          "-=1.7",
        )
        .to(
          leftBracketRef.current,
          { x: -2, opacity: 1, duration: 1.5, ease: "power2.out" },
          "-=1.7",
        )
        .to(
          rightBracketRef.current,
          { x: 2, opacity: 1, duration: 1.5, ease: "power2.out" },
          "-=1.7",
        )
        .to(
          kRef.current,
          { y: 0, opacity: 1, duration: 2, ease: "power2.out" },
          "-=1",
        )
        .to(
          brownCircleRef.current,
          { opacity: 1, duration: 1, ease: "power2.out" },
          "-=1.5",
        )
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            onComplete: () => setShowContent(true),
          },
          "-=1",
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  // List of images (easier maintenance)
  const images = [
    { src: "/images/IMG_1.jpg", alt: "Innovation workspace 1" },
    { src: "/images/IMG_3.webp", alt: "Innovation workspace 2" },
    { src: "/images/IMG_4.webp", alt: "Modern office workspace" },
    { src: "/images/IMG_5.webp", alt: "Creative studio space" },
    { src: "/images/IMG_6.webp", alt: "Tech startup office" },
    { src: "/images/IMG_2.webp", alt: "Cozy library corner" },
    { src: "/images/IMG_7.webp", alt: "Collaborative workspace 7" },
    { src: "/images/IMG_8.webp", alt: "Innovation lab 8" },
    { src: "/images/IMG_9.webp", alt: "Developer workspace 9" },
    { src: "/images/IMG_10.webp", alt: "Creative studio 10" },
    { src: "/images/IMG_11.webp", alt: "Tech hub 11" },
    { src: "/images/IMG_12.webp", alt: "Coding environment 12" },
    { src: "/images/IMG_13.webp", alt: "Hackathon space 13" },
    { src: "/images/IMG_14.webp", alt: "Innovation center 14" },
    { src: "/images/IMG_15.webp", alt: "Development workspace 15" },
    { src: "/images/IMG_16.webp", alt: "Creative lab 16" },
    { src: "/images/IMG_17.webp", alt: "Tech workspace 17" },
    { src: "/images/IMG_18.webp", alt: "Final workspace 18" },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-[180vh] overflow-hidden bg-black text-white"
    >
      <div className="relative flex h-screen flex-col items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-orbitron flex items-end justify-center">
            <div
              ref={hacRef}
              className="text-[12vw] leading-none font-black tracking-tight text-white opacity-0 select-none md:text-[8vw]"
            >
              DEV
            </div>

            <div className="relative flex items-end justify-center">
              {/* Image Slideshow */}
              <div
                ref={imageRef}
                className="relative h-[80px] w-[120px] opacity-1"
              >
                {images.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="hackathon-image absolute inset-0 object-cover opacity-0"
                  />
                ))}
              </div>

              <div
                ref={kRef}
                className="absolute text-[12vw] leading-none font-black tracking-tight text-[#a3ff12] opacity-0 select-none md:text-[8vw]"
              >
                H
              </div>
            </div>

            <div
              ref={athonRef}
              className="text-[12vw] leading-none font-black tracking-tight text-white opacity-0 select-none md:text-[8vw]"
            >
              ACK
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="absolute bottom-20 flex flex-col items-center space-y-6 opacity-0"
        >
          <div className="max-w-2xl px-6 text-center">
            <p className="font-mono text-lg leading-relaxed text-gray-300 md:text-xl">
              Join us for an intense 20-hour hackathon where innovation meets
              execution. Build, code, and create the future in one epic weekend
              of non-stop development.
            </p>
          </div>

          <HoverBorderGradient
            containerClassName="rounded-full"
            className="group flex w-full items-center justify-center space-x-2 border border-[var(--neon-green-dim)] bg-black/70 px-6 py-3 shadow-[0_0_10px_var(--neon-green-glow)] transition-all duration-300 hover:shadow-[0_0_20px_var(--neon-green)] md:w-auto md:px-8 md:py-4"
          >
            <span className="font-mono text-sm tracking-wider text-[var(--neon-green)] md:text-base">
              Know More About DevHack
            </span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}
