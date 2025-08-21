"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CollegeMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [smallParticles, setSmallParticles] = useState<
    Array<{ width: number; height: number; left: number; top: number }>
  >([]);
  const [largeParticles, setLargeParticles] = useState<
    Array<{ left: number; top: number }>
  >([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setSmallParticles(
      [...Array(20)].map(() => ({
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
      })),
    );
    setLargeParticles(
      [...Array(8)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      })),
    );
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      mainTimeline
        .fromTo(
          titleRef.current,
          { y: 60, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        )
        .fromTo(
          mapRef.current,
          { rotationY: 5 },
          {
            rotationY: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.6",
        );

      gsap.to(gridRef.current, {
        backgroundPosition: "200px 200px",
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".map-particle", {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(-360, 360)",
        scale: "random(0.8, 1.2)",
        duration: "random(6, 12)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { amount: 5, from: "random" },
      });

      gsap.to(".holographic-glow", {
        opacity: "random(0.3, 0.8)",
        scale: "random(0.95, 1.05)",
        duration: "random(2, 4)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
    }, sectionRef);

    return () => ctx && ctx.revert();
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="bg-background relative min-h-screen overflow-hidden py-16"
    >
      <div ref={gridRef} className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(5,150,105,0.15)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.1)_0%,transparent_50%)]"></div>
        <div
          className="absolute inset-0 animate-spin bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(5,150,105,0.1)_60deg,transparent_120deg,rgba(16,185,129,0.08)_180deg,transparent_240deg)]"
          style={{ animationDuration: "60s" }}
        ></div>
        <div className="from-primary/5 to-secondary/5 absolute inset-0 bg-gradient-to-br via-transparent"></div>
      </div>

      <div ref={particlesRef} className="pointer-events-none absolute inset-0">
        {smallParticles.map((p, i) => (
          <div
            key={i}
            className="map-particle bg-primary shadow-[0_0_8px_theme(colors.primary)] absolute rounded-full"
            style={{
              width: `${p.width}px`,
              height: `${p.height}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
          />
        ))}
        {largeParticles.map((p, i) => (
          <div
            key={`large-${i}`}
            className="map-particle bg-secondary shadow-[0_0_12px_theme(colors.secondary)] absolute h-3 w-3 rounded-full opacity-60"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
          />
        ))}
      </div>

      <div className="holographic-glow bg-primary/10 absolute top-1/3 left-1/5 h-80 w-80 rounded-full blur-3xl"></div>
      <div className="holographic-glow bg-secondary/8 absolute right-1/5 bottom-1/3 h-96 w-96 rounded-full blur-3xl"></div>
      <div className="holographic-glow bg-accent/5 absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h1
            ref={titleRef}
            className="font-orbitron mb-6 text-4xl font-bold md:text-6xl"
          >
            <span className="text-foreground drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Campus{" "}
            </span>
            <span className="text-primary drop-shadow-[0_0_30px_theme(colors.primary)] animate-pulse">
              Location
            </span>
          </h1>
          <p className="text-primary drop-shadow-[0_0_15px_theme(colors.primary)] font-mono text-lg md:text-xl">
            Sahyadri College of Engineering and Management
          </p>
          <div className="bg-primary shadow-[0_0_20px_theme(colors.primary)] mx-auto mt-6 h-1 w-24 rounded-full"></div>
        </div>

        {/* Centered Map */}
        <div className="flex justify-center">
          <div ref={mapRef} className="relative w-full max-w-5xl">
            {/* START: MODIFIED MAP CONTAINER */}
            <div
              className="bg-primary shadow-[0_0_50px_theme(colors.primary/40)] hover:shadow-[0_0_70px_theme(colors.primary/60)] p-[2px] transition-all duration-500"
              style={{
                clipPath:
                  "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
              }}
            >
              <div
                className="bg-card h-[500px] p-1"
                style={{
                  clipPath:
                    "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.493800916483!2d74.92293479999999!3d12.866339399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba358ff28ef6cf3%3A0xe93953598f53c53c!2sSahyadri%20College%20of%20Engineering%20%26%20Management%20(Autonomous)!5e0!3m2!1sen!2sin!4v1635806988908!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="shadow-[0_0_30px_rgba(0,0,0,0.3)]" // Removed rounded corners
                  title="Sahyadri College of Engineering and Management Location"
                />
              </div>
            </div>
            {/* END: MODIFIED MAP CONTAINER */}

            {/* START: MODIFIED CORNER BRACKETS */}
            <div className="border-primary shadow-[0_0_10px_theme(colors.primary)] absolute -top-1 -left-1 h-10 w-10 border-t-2 border-l-2"></div>
            <div className="border-secondary shadow-[0_0_10px_theme(colors.secondary)] absolute -top-1 -right-1 h-10 w-10 border-t-2 border-r-2"></div>
            <div className="border-accent shadow-[0_0_10px_theme(colors.accent)] absolute -bottom-1 -left-1 h-10 w-10 border-b-2 border-l-2"></div>
            <div className="border-primary shadow-[0_0_10px_theme(colors.primary)] absolute -right-1 -bottom-1 h-10 w-10 border-r-2 border-b-2"></div>
            {/* END: MODIFIED CORNER BRACKETS */}
          </div>
        </div>
      </div>
    </section>
  );
}
