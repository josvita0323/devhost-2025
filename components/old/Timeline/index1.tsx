"use client";

import React, { useState, Suspense, lazy } from "react";
const Timeline = lazy(() => import("./Timeline"));
import { markers } from "../../TimeLine/data";

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
        <h1 className="font-orbitron mb-6 text-6xl font-bold uppercase md:text-9xl">
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
                <label
                  className={`font-orbitron text-3xl uppercase ${!isSelected ? "opacity-50" : "opacity-100"}`}
                >
                  Day{" "}
                  <span className="font-amiga text-primary text-2xl">
                    {day.id}
                  </span>
                </label>
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
              markers={markers}
              id={days.find((d) => d.id === selectedDay)?.id ?? 0}
              key={selectedDay}
            />
          </div>
        </Suspense>
      )}
    </div>
  );
}
