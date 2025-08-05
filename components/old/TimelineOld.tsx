"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function Timeline() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Segment />
      <Segment swap />
      <Segment />
      <Segment swap />
      <Segment />
      <Segment swap />
      <Segment />
      <Segment swap />
      <Segment />
    </div>
  );
}

function Segment({ swap }: { swap?: boolean }) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      className="h-[50vh] flex relative w-full justify-center"
      ref={containerRef}
    >
      <svg
        height="50vh"
        className={`w-auto absolute ${swap ? "scale-x-[-1]" : ""}`}
        viewBox="0 0 15 70"
        style={{ overflow: "visible" }}
      >
        {/* <path
          d="M7.5 0 L7.5 5 L13 10 L13 25 L7.5 30 L7.5 70"
          stroke="#09090b"
          strokeWidth={1}
        /> */}
        <motion.path
          d="M7.5 0 L7.5 5 L13 8 L13 22 L7.5 25 L7.5 70"
          className={"stroke-lime-400"}
          strokeWidth={0.5}
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
