"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { markers } from "../assets/data/timeline";

const CyberpunkTimeline: React.FC = () => {
  const tabGroups = [
    {
      id: "phase-1",
      label: "PHASE 01",
      days: markers.slice(0, Math.ceil(markers.length / 3)),
    },
    {
      id: "phase-2",
      label: "PHASE 02",
      days: markers.slice(
        Math.ceil(markers.length / 3),
        Math.ceil((markers.length * 2) / 3),
      ),
    },
    {
      id: "phase-3",
      label: "PHASE 03",
      days: markers.slice(Math.ceil((markers.length * 2) / 3)),
    },
  ];

  return (
    <div className="relative min-h-screen py-48">
      <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-black/95 via-black/80 to-transparent" />
      <div className="absolute top-0 h-48 w-full bg-gradient-to-b from-black/95 via-black/80 to-transparent" />

      {/* Header */}
      <div className="relative py-12 text-center">
        <h1 className="font-orbitron mb-3 text-center text-4xl font-bold sm:text-7xl">
          TIMELINE
        </h1>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Tabs defaultValue="phase-1" className="w-full">
          {/* Tab Navigation */}
          <TabsList className="border-primary mb-8 grid w-full grid-cols-3 border bg-black p-1">
            {tabGroups.map((group) => (
              <TabsTrigger
                key={group.id}
                value={group.id}
                className="font-orbitron data-[state=active]:text-primary border-none bg-black data-[state=active]:bg-black data-[state=active]:shadow-none"
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
                    {/* Day Header */}
                    <div className="relative mb-12">
                      <div className="flex items-center gap-4">
                        <div className="flex-1"></div>
                        <div className="border-primary relative border bg-black px-4 py-2">
                          <span className="font-orbitron text-lg font-bold tracking-widest">
                            {day.label}
                          </span>
                        </div>
                        <div className="flex-1"></div>
                      </div>
                    </div>

                    {/* Events Grid */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {day.events.map((event) => (
                        <div
                          key={event.id}
                          className="border-primary/50 hover:border-primary relative border bg-black p-4 transition-all duration-300"
                        >
                          {/* <div className="border-primary absolute top-1/2 right-0 h-1 w-8 translate-x-full border-b" /> */}

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
                            <div className="mb-3 flex items-start gap-3">
                              <span className="text-primary text-lg">
                                {event.icon}
                              </span>
                              <h3 className="font-orbitron text-sm leading-tight font-bold">
                                {event.title}
                              </h3>
                            </div>

                            <p className="mb-3 text-xs leading-relaxed">
                              {event.description}
                            </p>

                            {/* Meta */}
                            <div className="space-y-1 text-xs">
                              {event.speaker && (
                                <div className="flex items-center gap-2">
                                  <span className="text-primary">&gt;</span>
                                  <span className="text-primary font-medium">
                                    {event.speaker}
                                  </span>
                                </div>
                              )}
                              {event.role && (
                                <div className="text-primary/70 pl-4">
                                  {event.role}
                                </div>
                              )}
                            </div>
                          </div>

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
