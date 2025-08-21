"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { markers } from "../assets/data/timeline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CyberpunkTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="relative min-h-screen py-48">
      {/* Header */}
      <h1 className="font-orbitron mb-3 text-center text-4xl font-bold sm:text-7xl">
        TIMELINE
      </h1>

      <div className="timeline-container relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Timeline line */}
        <div className="timeline-line bg-primary absolute left-4 h-full w-0.5 origin-top -translate-x-0.5 transform sm:left-1/2 sm:-translate-x-0.5"></div>

        {markers.map((day) => (
          <div key={day.id} className="mb-16">
            {/* Day marker */}
            <div className="relative mb-10 text-center">
              <div className="border-border bg-background inline-block border px-6 py-2 shadow-lg">
                <span className="font-orbitron text-3xl font-bold tracking-widest">
                  {day.label}
                </span>
              </div>
            </div>

            {/* Day events */}
            {day.events.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative mb-12 flex flex-col sm:flex-row ${
                    isLeft
                      ? "sm:justify-end sm:pr-8"
                      : "sm:justify-start sm:pl-8"
                  }`}
                >
                  {/* Timeline node */}
                  <div className="border-primary bg-background absolute top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 sm:left-1/2">
                    <div className="bg-primary absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 transform rounded-full"></div>
                  </div>

                  {/* Content card */}
                  <div className="w-full pl-4 sm:w-5/12 sm:pl-0">
                    <div className="border-border bg-background/80 relative border p-4 shadow-lg backdrop-blur-sm sm:p-6">
                      {/* Time badge */}
                      <div
                        className={`absolute top-0 right-0 sm:transform sm:${
                          isLeft
                            ? "translate-x-2 -translate-y-2"
                            : "-translate-x-2 -translate-y-2"
                        } border-border border bg-black px-3 py-1`}
                      >
                        <span className="font-orbitron text-muted-foreground text-xs">
                          {item.displayTime}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-primary">{item.icon}</span>
                          <h3 className="font-orbitron text-primary text-lg font-bold tracking-wide">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>

                        {item.speaker && (
                          <p className="font-orbitron text-primary text-sm">
                            {item.speaker}
                          </p>
                        )}
                        {item.role && (
                          <p className="text-muted-foreground/70 text-xs">
                            {item.role}
                          </p>
                        )}
                        {item.venue && (
                          <p className="text-muted-foreground/70 font-mono text-xs">
                            VENUE: {item.venue}
                          </p>
                        )}
                      </div>

                      {/* Accent neon corner */}
                      <div className="bg-primary clip-path-neon absolute right-0 bottom-0 h-8 w-12"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* End marker */}
        <div className="relative text-center">
          <div className="border-border bg-background inline-block border px-4 py-2">
            <span className="font-orbitron text-lg font-bold">END OF LOG</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-black/95 via-black/80 to-transparent" />
      <div className="absolute top-0 h-48 w-full bg-gradient-to-b from-black/95 via-black/80 to-transparent" />
    </div>
  );
};

export default CyberpunkTimeline;
