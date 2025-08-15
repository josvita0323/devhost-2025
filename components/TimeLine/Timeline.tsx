"use client";

import React, { useMemo, useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

type Marker = {
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
  startHour: number;
  endHour: number;
  markers: Marker[];
  image: string;
};

export default function Timeline({
  startHour,
  endHour,
  markers,
  image,
}: TimelineSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [activeTime, setActiveTime] = React.useState<string | null>(null);

  const hours = useMemo(() => {
    const length = endHour - startHour + 1;
    return Array.from({ length }, (_, i) => {
      const hour = startHour + i;
      const suffix = hour >= 12 ? "PM" : "AM";
      const label = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      return `${label} ${suffix}`;
    });
  }, [startHour, endHour]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalWidthVW = 100 + (hours.length - 1) * (100 / 3);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${totalWidthVW - 100}vw`],
  );
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const parseTimeToDecimal = (timeStr: string) => {
    const [h, m] = timeStr.split(":").map(Number);
    return h + m / 60;
  };

  const markersGroupedByTime = markers.reduce<Record<string, Marker[]>>(
    (acc, marker) => {
      acc[marker.time] = acc[marker.time] || [];
      acc[marker.time].push(marker);
      return acc;
    },
    {},
  );

  return (
    <div ref={containerRef} className="h-[900vh] overflow-clip">
      <div className="sticky top-0 h-screen">
        {/* Content Section */}
        <div className="pointer-events-none absolute flex h-full w-full justify-center">
          {activeTime && (
            <motion.div
              className="absolute bottom-0 flex h-[60vh] w-screen max-w-5xl flex-col items-center gap-4 pt-4 md:flex-row md:items-start md:justify-around md:pt-12"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {markersGroupedByTime[activeTime]?.map((marker, idx) => (
                <div key={idx} className="w-full max-w-sm p-4 md:p-6">
                  {/* Title */}
                  <h3 className="font-dystopian text-3xl font-bold uppercase md:text-5xl">
                    {marker.title}
                  </h3>

                  {/* Time & Venue */}
                  <div className="text-muted-foreground mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs md:text-sm">
                    <span className="text-primary font-medium">
                      {marker.displayTime}
                    </span>
                    {marker.venue && (
                      <span className="text-secondary">{marker.venue}</span>
                    )}
                  </div>

                  {/* Description */}
                  {marker.description && (
                    <p className="mt-2 text-xs leading-snug md:text-sm">
                      {marker.description}
                    </p>
                  )}

                  {/* Speaker Info */}
                  {marker.speaker && (
                    <div className="border-border mt-2 border-t">
                      <p className="text-primary text-sm font-semibold">
                        {marker.speaker}
                      </p>
                      {marker.role && (
                        <p className="text-secondary text-xs">{marker.role}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </div>
        <Image
          src={image}
          alt="Day"
          className="absolute top-1/8 left-1/2 w-[140px] -translate-x-1/2 -translate-y-1/2 object-contain md:w-[240px]"
          width={400}
          height={300}
        />

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
                width: `calc(${(100 / 3) * (hours.length - 1)}vw)`,
              }}
            />

            {/* Timeline Line Outline*/}
            <div
              className="absolute top-1/3 h-1 origin-left bg-[#1a1a1a]"
              style={{
                transformOrigin: "left",
                left: `calc(50vw)`,
                width: `calc(${(100 / 3) * (hours.length - 1)}vw)`,
              }}
            />

            {/* Time Markers */}
            {hours.map((time, index) => {
              const left = `calc(${100 / 2 + (100 / 3) * index}vw)`;
              // const progressPoint = 0.1 + (0.8 / (hours.length - 1)) * index;
              const progressPoint = index / (hours.length - 1);

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

              return (
                <div
                  key={index}
                  className="absolute top-1/3 flex flex-col items-center"
                  style={{ left }}
                >
                  <motion.div
                    style={{ backgroundColor: color }}
                    className="absolute h-3 w-1 rounded-b-full"
                  />
                  <motion.span
                    style={{ color: textColor }}
                    className="font-amiga absolute top-6 text-xs whitespace-pre sm:text-sm"
                  >
                    {time}
                  </motion.span>
                </div>
              );
            })}

            {/* Event Markers */}
            {Object.entries(markersGroupedByTime).map(
              ([time, groupedMarkers], i) => {
                const timeDecimal = parseTimeToDecimal(time);
                const totalTimeRange = endHour - startHour;
                const offsetFromStart = timeDecimal - startHour;

                const positionVW =
                  50 +
                  (offsetFromStart / totalTimeRange) *
                    ((hours.length - 1) * (100 / 3));
                const left = `calc(${positionVW}vw)`;

                // const progressPoint =
                //   0.1 + (0.8 * offsetFromStart) / totalTimeRange;
                const progressPoint = offsetFromStart / totalTimeRange;

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
                    value >= progressPoint && value <= progressPoint + 0.02;

                  if (inRange) {
                    if (!timeoutRef.current) {
                      setActiveTime(time);
                      timeoutRef.current = setTimeout(() => {
                        timeoutRef.current = null;
                      }, 100);
                    }
                  } else {
                    if (activeTime === time) {
                      setActiveTime(null);
                    }
                  }
                });

                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/3 flex flex-col items-center"
                    style={{ left }}
                  >
                    {/* Stack multiple icons */}
                    <motion.div
                      className="absolute z-20 flex -translate-y-full flex-col items-center pb-6 sm:flex-row"
                      style={{ color: textColor }}
                    >
                      {groupedMarkers.map((marker) => marker.icon)}
                    </motion.div>

                    {/* Pin stem */}
                    <motion.div
                      className="absolute h-3 w-1 -translate-y-full rounded-t-full"
                      style={{ backgroundColor: color }}
                    />
                  </motion.div>
                );
              },
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
