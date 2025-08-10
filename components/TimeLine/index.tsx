"use client";

import React, { useState, Suspense, lazy } from "react";
const Timeline = lazy(() => import("./Timeline"));
import { markers } from "./data";
import Image from "next/image";

export default function TimelineSection() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const days = [
    { id: 1, label: "Day 1", image: "/timeline/day1.svg" },
    { id: 2, label: "Day 2", image: "/timeline/day2.svg" },
    { id: 3, label: "Day 3", image: "/timeline/day3.svg" },
  ];

  const handleDayClick = (id: number) => {
    setSelectedDay((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-background text-foreground">
      {/* Intro Section */}
      <section className="flex h-screen flex-col items-center justify-center">
        <h1 className="font-dystopian mb-6 text-6xl font-bold md:text-9xl">
          Timeline
        </h1>
        <div className="flex gap-8">
          {days.map((day) => {
            const isSelected = selectedDay === day.id;
            return (
              <button
                key={day.id}
                onClick={() => handleDayClick(day.id)}
                className="transition-opacity duration-300"
              >
                <Image
                  src={day.image}
                  alt={day.label}
                  className={`md:w-24 w-16 ${!isSelected ? "opacity-50" : "opacity-100"}`}
                  width={400}
                  height={300}
                />
              </button>
            );
          })}
        </div>
      </section>

      {/* Timeline appears here AFTER intro */}
      {selectedDay && (
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              Loading timeline...
            </div>
          }
        >
          <div className="min-h-[900vh]">
            <Timeline
              startHour={8}
              endHour={18}
              markers={markers}
              image={days.find((d) => d.id === selectedDay)?.image ?? ""}
              key={selectedDay}
            />
          </div>
        </Suspense>
      )}
    </div>
  );
}
