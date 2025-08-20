"use client"

import { useEffect, useRef, useMemo } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CollegeMap() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  // ✅ Generate particle data once to avoid hydration mismatch
  const smallParticles = useMemo(
    () =>
      [...Array(20)].map(() => ({
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
      })),
    []
  )

  const largeParticles = useMemo(
    () =>
      [...Array(8)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      })),
    []
  )

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
          { y: 60, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
        )
        .fromTo(
          mapRef.current,
          { scale: 0.9, opacity: 0, rotationY: 5 },
          { scale: 1, opacity: 1, rotationY: 0, duration: 1.2, ease: "power2.out" },
          "-=0.6"
        )

      gsap.to(gridRef.current, {
        backgroundPosition: "200px 200px",
        duration: 30,
        ease: "none",
        repeat: -1,
      })

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
      })

      gsap.to(".holographic-glow", {
        opacity: "random(0.3, 0.8)",
        scale: "random(0.95, 1.05)",
        duration: "random(2, 4)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-background py-16 overflow-hidden">
      <div ref={gridRef} className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(5,150,105,0.15)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.1)_0%,transparent_50%)]"></div>
        <div
          className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(5,150,105,0.1)_60deg,transparent_120deg,rgba(16,185,129,0.08)_180deg,transparent_240deg)] animate-spin"
          style={{ animationDuration: "60s" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      </div>

      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {smallParticles.map((p, i) => (
          <div
            key={i}
            className="map-particle absolute rounded-full bg-primary shadow-[0_0_8px_theme(colors.primary)]"
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
            className="map-particle absolute w-3 h-3 rounded-full bg-secondary shadow-[0_0_12px_theme(colors.secondary)] opacity-60"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
          />
        ))}
      </div>

      <div className="holographic-glow absolute top-1/3 left-1/5 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="holographic-glow absolute bottom-1/3 right-1/5 w-96 h-96 bg-secondary/8 rounded-full blur-3xl"></div>
      <div className="holographic-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-12">
          <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="text-foreground drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Campus </span>
            <span className="text-primary drop-shadow-[0_0_30px_theme(colors.primary)] animate-pulse">Location</span>
          </h1>
          <p className="text-primary text-lg md:text-xl font-mono drop-shadow-[0_0_15px_theme(colors.primary)]">
            &gt; Sahyadri College of Engineering and Management
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 shadow-[0_0_20px_theme(colors.primary)] animate-pulse rounded-full"></div>
        </div>

        {/* Centered Map */}
        <div className="flex justify-center">
          <div ref={mapRef} className="relative w-full max-w-5xl">
            <div className="relative bg-card border-2 border-primary overflow-hidden shadow-[0_0_50px_theme(colors.primary/40)] hover:shadow-[0_0_70px_theme(colors.primary/60)] transition-all duration-500 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl"></div>
              <div className="relative p-6 h-[500px] rounded-3xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.493800916483!2d74.92293479999999!3d12.866339399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba358ff28ef6cf3%3A0xe93953598f53c53c!2sSahyadri%20College%20of%20Engineering%20%26%20Management%20(Autonomous)!5e0!3m2!1sen!2sin!4v1635806988908!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)]"
                  title="Sahyadri College of Engineering and Management Location"
                />
              </div>
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-lg shadow-[0_0_10px_theme(colors.primary)]"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-secondary rounded-tr-lg shadow-[0_0_10px_theme(colors.secondary)]"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent rounded-bl-lg shadow-[0_0_10px_theme(colors.accent)]"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-lg shadow-[0_0_10px_theme(colors.primary)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
