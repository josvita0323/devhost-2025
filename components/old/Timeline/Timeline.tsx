"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

type Marker = {
  id: string;
  time: string;
  icon: React.ReactNode;
  title: string;
  description?: string;
  speaker?: string;
  role?: string;
  displayTime: string;
  venue: string;
};

type TimelineSectionProps = {
  markers: Marker[];
  id: number;
};

export default function Timeline({ markers, id }: TimelineSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [activeEvent, setActiveEvent] = React.useState<Marker | null>(null);

  // Sort markers by time
  const parseTimeToDecimal = (timeStr: string) => {
    const [h, m] = timeStr.split(":").map(Number);
    return h + m / 60;
  };

  const sortedMarkers = [...markers].sort(
    (a, b) => parseTimeToDecimal(a.time) - parseTimeToDecimal(b.time),
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalWidthVW = 100 + (sortedMarkers.length - 1) * (100 / 3);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${totalWidthVW - 100}vw`],
  );
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="h-[900vh] overflow-clip">
      <div className="sticky top-0 h-screen">
        {/* Content Section */}
        <div className="pointer-events-none absolute flex h-full w-full justify-center">
          {activeEvent && (
            <motion.div
              className="absolute bottom-0 flex h-[60vh] w-screen max-w-5xl justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="w-auto p-6">
                <h3 className="font-orbitron text-4xl font-bold uppercase md:text-6xl">
                  {activeEvent.title}
                </h3>

                <div className="text-muted-foreground mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base">
                  <span className="text-primary font-semibold">
                    {activeEvent.displayTime}
                  </span>
                  {activeEvent.venue && (
                    <span className="text-secondary">{activeEvent.venue}</span>
                  )}
                </div>

                {activeEvent.description && (
                  <p className="mt-4 text-sm leading-relaxed md:text-base">
                    {activeEvent.description}
                  </p>
                )}

                {activeEvent.speaker && (
                  <div className="border-border mt-4 border-t pt-3">
                    <p className="text-primary text-base font-semibold">
                      {activeEvent.speaker}
                    </p>
                    {activeEvent.role && (
                      <p className="text-secondary text-sm">
                        {activeEvent.role}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>

        <label
          className={`font-orbitron absolute top-1/12 w-full text-center text-6xl uppercase`}
        >
          Day <span className="font-amiga text-primary text-5xl">{id}</span>
        </label>

        <motion.div
          style={{
            x,
            width: `${totalWidthVW}vw`,
          }}
          className="flex h-screen items-center justify-start"
        >
          <div className="relative h-full w-full">
            {/* Timeline Line */}
            <motion.div
              className="bg-primary absolute top-1/3 z-10 h-0.5 origin-left sm:h-1"
              style={{
                scaleX,
                transformOrigin: "left",
                left: `calc(50vw)`,
                width: `calc(${(100 / 3) * (sortedMarkers.length - 1)}vw)`,
              }}
            />

            {/* Timeline Line Outline */}
            <div
              className="absolute top-1/3 h-1 origin-left bg-[#1a1a1a]"
              style={{
                transformOrigin: "left",
                left: `calc(50vw)`,
                width: `calc(${(100 / 3) * (sortedMarkers.length - 1)}vw)`,
              }}
            />

            {/* Event Markers (evenly spaced) */}
            {sortedMarkers.map((marker, index) => {
              const positionVW = 50 + index * (100 / 3);
              const left = `calc(${positionVW}vw)`;
              const progressPoint = index / (sortedMarkers.length - 1);

              const color = useTransform(
                scrollYProgress,
                [0, progressPoint - 0.001, progressPoint],
                ["#444", "#444", "#a3ff12"],
              );

              const textColor = useTransform(
                scrollYProgress,
                [0, progressPoint - 0.001, progressPoint],
                ["#666", "#666", "#fff"],
              );

              useMotionValueEvent(scrollYProgress, "change", (value) => {
                const inRange =
                  value >= progressPoint && value <= progressPoint + 0.05;

                if (inRange) {
                  if (!timeoutRef.current) {
                    setActiveEvent(marker); // store this exact marker
                    timeoutRef.current = setTimeout(() => {
                      timeoutRef.current = null;
                    }, 100);
                  }
                } else {
                  if (activeEvent?.id === marker.id) {
                    setActiveEvent(null);
                  }
                }
              });

              return (
                <motion.div
                  key={index}
                  className="absolute top-1/3 flex flex-col items-center"
                  style={{ left }}
                >
                  <motion.div
                    className="absolute z-20 flex -translate-y-full flex-col items-center pb-6 sm:flex-row"
                    style={{ color: textColor }}
                  >
                    {marker.icon}
                  </motion.div>
                  <motion.div
                    className="absolute h-3 w-1 -translate-y-full rounded-t-full"
                    style={{ backgroundColor: color }}
                  />
                  <motion.span
                    style={{ color: textColor }}
                    className="font-delagothic absolute top-6 text-sm whitespace-pre sm:text-base"
                  >
                    {new Date(
                      `1970-01-01T${marker.time}:00`,
                    ).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
