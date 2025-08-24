"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { markers } from "../assets/data/timeline";
import DecryptText from "./animated/TextAnimation";

const CyberpunkTimeline: React.FC = () => {
  const tabGroups = [
    {
      id: "phase-1",
      label: "Nov 6",
      days: markers.slice(0, Math.ceil(markers.length / 3)),
    },
    {
      id: "phase-2",
      label: "Nov 7",
      days: markers.slice(
        Math.ceil(markers.length / 3),
        Math.ceil((markers.length * 2) / 3),
      ),
    },
    {
      id: "phase-3",
      label: "Nov 8",
      days: markers.slice(Math.ceil((markers.length * 2) / 3)),
    },
  ];

  return (
    <div className="relative min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="relative py-12 text-center">
        <h1 className="font-orbitron mb-6 text-center text-4xl font-bold sm:text-7xl">
          TIMELINE
        </h1>
        {/* <h2 className="">
          &gt; Journey of Events
        </h2> */}
        <DecryptText
          text="> Journey of Events"
          startDelayMs={200}
          trailSize={6}
          flickerIntervalMs={50}
          revealDelayMs={100}
          className="font-orbitron text-primary h-8 text-base tracking-wider md:text-xl"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Tabs defaultValue="phase-1" className="w-full">
          {/* Tab Navigation */}
          <TabsList className="border-primary mx-auto mb-8 grid w-full max-w-4xl grid-cols-3 rounded-none border bg-black p-1">
            {tabGroups.map((group) => (
              <TabsTrigger
                key={group.id}
                value={group.id}
                className="font-orbitron border-none bg-black"
              >
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Tab Content */}
          {tabGroups.map((group) => (
            <TabsContent key={group.id} value={group.id} className="mt-0">
              <div className="mx-auto max-w-4xl space-y-8">
                {group.days.map((day) => (
                  <div key={day.id} className="relative flex">
                    {/* Timeline vertical line */}
                    <div className="bg-primary/50 absolute top-0 left-8 h-full w-[2px]" />

                    {/* Events Grid */}
                    <div className="flex w-full flex-col items-center gap-8">
                      {day.events.map((event) => (
                        <div
                          key={event.id}
                          className="border-primary/50 relative w-full max-w-4xl border bg-black p-4 pl-4"
                        >
                          {/* Time badge */}
                          <div className="absolute -top-3 left-12">
                            <div className="border-primary border bg-black px-2">
                              <span className="font-orbitron text-primary text-xs font-bold">
                                {event.displayTime}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="mt-4 text-gray-200">
                            {/* Title row with meta on right */}
                            <div className="flex flex-col items-start justify-between sm:flex-row">
                              {/* Icon + Title */}
                              <div className="space-y-2">
                                <div className="flex items-baseline gap-3">
                                  <span className="text-primary text-lg">
                                    {event.icon}
                                  </span>
                                  <h3 className="font-orbitron leading-tight font-bold whitespace-pre">
                                    {event.title}
                                  </h3>
                                </div>

                                {/* Description */}
                                <p className="mb-2 text-xs leading-relaxed whitespace-pre">
                                  {event.description}
                                </p>
                              </div>

                              {/* Meta (speaker + role) */}
                              <div className="flex w-full flex-col items-end pb-6 text-right text-xs sm:pb-0">
                                {event.speaker && (
                                  <div className="font-orbitron flex items-center justify-end gap-2 text-xs sm:text-sm">
                                    <span className="text-primary">&gt;</span>
                                    <span className="text-primary font-medium">
                                      {event.speaker}
                                    </span>
                                  </div>
                                )}
                                {event.role && (
                                  <div className="text-primary/70">
                                    {event.role}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Venue */}
                          <div className="absolute right-0 bottom-0">
                            <div className="border-primary/50 border bg-black px-2 py-1">
                              <span className="flex items-center gap-2 text-xs text-zinc-400">
                                <span>@</span>
                                <span>{event.venue}</span>
                              </span>
                            </div>
                          </div>

                          {/* Corner accents */}
                          <div className="absolute top-0 right-0 h-6 w-6">
                            <div className="border-primary/70 absolute top-1 right-1 h-3 w-3 border-t border-r"></div>
                          </div>
                          <div className="absolute bottom-0 left-0 h-6 w-6">
                            <div className="border-primary/70 absolute bottom-1 left-1 h-3 w-3 border-b border-l"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default CyberpunkTimeline;
