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
                    <div className="border-primary before:border-primary/30 relative border-2 bg-black/90 p-4 backdrop-blur-sm before:absolute before:inset-0 before:border-2 before:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-1 after:bg-gradient-to-b after:to-transparent after:content-[''] sm:p-6">
                      {/* Time badge */}
                      <div
                        className={`absolute top-0 right-0 sm:transform sm:${
                          isLeft
                            ? "translate-x-2 -translate-y-2"
                            : "-translate-x-2 -translate-y-2"
                        } border-primary before:from-primary/20 before:to-primary/40 border-2 bg-black px-3 py-1 before:absolute before:-inset-0.5 before:-z-10`}
                      >
                        <span className="font-orbitron text-primary relative z-10 text-xs">
                          {item.displayTime}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-primary drop-shadow-[0_0_10px_currentColor]">
                            {item.icon}
                          </span>
                          <h3 className="font-orbitron text-primary text-lg font-bold tracking-wide drop-shadow-[0_0_8px_currentColor]">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-sm leading-relaxed text-gray-300">
                          {item.description}
                        </p>

                        {item.speaker && (
                          <p className="font-orbitron text-primary text-sm">
                            {item.speaker}
                          </p>
                        )}
                        {item.role && (
                          <p className="text-xs text-gray-400">{item.role}</p>
                        )}
                        {item.venue && (
                          <p className="before:text-primary font-mono text-xs text-gray-400 before:content-['>>_']">
                            VENUE: {item.venue}
                          </p>
                        )}
                      </div>

                      {/* Cyberpunk corner accents */}
                      <div className="border-primary from-primary/20 absolute right-0 bottom-0 h-8 w-12 border-t-2 border-l-2 bg-gradient-to-tl to-transparent"></div>
                      <div className="border-primary/50 absolute top-0 left-0 h-4 w-4 border-r-2 border-b-2"></div>

                      {/* Scanning line effect */}
                      <div className="via-primary absolute top-0 left-0 h-0.5 w-full animate-pulse bg-gradient-to-r from-transparent to-transparent opacity-60"></div>
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
