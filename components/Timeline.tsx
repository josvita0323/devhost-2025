"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { markers } from "../assets/data/timeline";

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
    <div className="relative min-h-screen py-24">
      {/* <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-black/95 via-black/80 to-transparent" /> */}
      {/* <div className="absolute top-0 h-48 w-full bg-gradient-to-b from-black/95 via-black/80 to-transparent" /> */}

      {/* Header */}
      <div className="relative py-12 text-center">
        <h1 className="font-orbitron mb-3 text-center text-4xl font-bold sm:text-7xl">
          TIMELINE
        </h1>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Tabs defaultValue="phase-1" className="w-full">
          {/* Tab Navigation */}
          <TabsList className="border-primary mx-auto mb-8 grid w-full max-w-4xl grid-cols-3 rounded-none border bg-black p-1">
            {tabGroups.map((group) => (
              <TabsTrigger
                key={group.id}
                value={group.id}
                className="font-orbitron bg-black border-none"
              >
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Tab Content */}
          {tabGroups.map((group) => (
            <TabsContent key={group.id} value={group.id} className="mt-0">
              <div className="space-y-8">
                {group.days.map((day) => (
                  <div key={day.id} className="relative">
                    {/* Events Grid */}
                    <div className="flex flex-col items-center gap-8">
                      {day.events.map((event) => (
                        <div
                          key={event.id}
                          className="border-primary/50 relative w-full max-w-4xl border bg-black p-4"
                        >
                          {/* Time badge */}
                          <div className="absolute -top-3 left-4">
                            <div className="border-primary border bg-black px-2">
                              <span className="font-orbitron text-xs font-bold text-lime-500">
                                {event.displayTime}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="mt-4 text-gray-200">
                            {/* Title row with meta on right */}
                            <div className="mb-2 flex items-start justify-between gap-3">
                              {/* Icon + Title */}
                              <div className="flex items-start gap-3">
                                <span className="text-primary text-lg">
                                  {event.icon}
                                </span>
                                <h3 className="font-orbitron text-sm leading-tight font-bold">
                                  {event.title}
                                </h3>
                              </div>

                              {/* Meta (speaker + role) */}
                              <div className="text-right text-xs">
                                {event.speaker && (
                                  <div className="font-orbitron flex items-center justify-end gap-2 text-sm">
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

                            {/* Description */}
                            <p className="mb-2 text-xs leading-relaxed">
                              {event.description}
                            </p>
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
