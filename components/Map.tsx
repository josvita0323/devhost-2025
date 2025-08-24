"use client";

import React, { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import { gsap } from "gsap";

const Map = () => {
  const topCut1 = useRef<HTMLDivElement>(null);
  const topCut2 = useRef<HTMLDivElement>(null);
  const bottomCut1 = useRef<HTMLDivElement>(null);
  const bottomCut2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCut = (
      el: HTMLDivElement | null,
      y: number,
      duration: number,
      skew: number,
    ) => {
      if (!el) return;
      gsap.to(el, {
        y: y,
        skewY: skew,
        opacity: 0.15,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    };

    animateCut(topCut1.current, 6, 5, 3);
    animateCut(topCut2.current, -6, 6, -3);
    animateCut(bottomCut1.current, -6, 5, -3);
    animateCut(bottomCut2.current, 6, 6, 3);
  }, []);

  const clipPathStyle = {
    clipPath:
      "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 text-white sm:px-6">
      {/* Main Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 py-12 md:grid-cols-5">
        <div className="space-y-6 text-center md:col-span-2 md:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="font-orbitron text-[#a3ff12] drop-shadow-[0_0_10px_#a3ff12aa]">
              Location
            </span>
          </h2>

          <h3 className="flex items-center justify-center gap-2 text-lg font-semibold text-gray-200 sm:text-xl md:justify-start md:text-2xl">
            <MapPin className="h-6 w-6 animate-bounce text-[#a3ff12] sm:h-7 sm:w-7 md:h-8 md:w-8" />
            Sahyadri College of Engineering And Management
          </h3>

          <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-400 sm:text-base md:mx-0">
            Looking to join the fun? You&apos;ll find us right here, where
            passion fuels lasting memories.
          </p>
        </div>

        <div className="relative w-full md:col-span-3">
          {/* Outer border wrapper */}
          <div
            className="group relative -skew-y-2 transform bg-[#a3ff12] transition-all duration-500 ease-in-out hover:skew-y-0"
            style={{
              clipPath:
                "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
            }}
          >
            {/* Inner content (actual map) */}
            <div
              className="m-[4px] overflow-hidden bg-black shadow-[0_0_40px_#a3ff12aa]"
              style={{
                clipPath:
                  "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.493800916483!2d74.92293479999999!3d12.866339399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba358ff28ef6cf3%3A0xe93953598f53c53c!2sSahyadri%20College%20of%20Engineering%20%26%20Management%20(Autonomous)!5e0!3m2!1sen!2sin!4v1635806988908!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="h-[250px] w-full sm:h-[400px] md:h-[500px]"
              ></iframe>

              {/* Overlay gradient */}
              <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-[#a3ff12]/15 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
