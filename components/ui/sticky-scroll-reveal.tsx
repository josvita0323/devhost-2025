"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type StickyScrollProps = {
  content: {
    title: React.ReactNode;
    description: React.ReactNode;
    content: React.ReactNode;
  }[];
};

export function StickyScroll({ content }: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollPosition = window.innerHeight / 2 - top;
      const sectionHeight = height / content.length;

      let index = Math.floor(scrollPosition / sectionHeight);
      index = Math.max(0, Math.min(index, content.length - 1));
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content.length]);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col md:flex-row scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="sticky top-20 h-[80vh] flex flex-col justify-center p-8 max-w-xl">
        <h2 className="text-3xl font-bold">{content[activeIndex].title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {content[activeIndex].description}
        </p>
      </div>

      <div className="ml-auto w-full max-w-xl">
        {content.map((item, i) => (
          <div
            key={i}
            className={cn(
              "min-h-[70vh] flex items-center justify-center my-20 transition-all duration-700 ease-in-out",
              i === activeIndex
                ? "opacity-100 pointer-events-auto translate-y-0"
                : "opacity-30 pointer-events-none -translate-y-10"
            )}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
