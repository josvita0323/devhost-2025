"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FloatingLeavesBackground = () => {
  useEffect(() => {
    const leaves = gsap.utils.toArray<HTMLElement>(".floating-leaf");

    leaves.forEach((leaf) => {
      gsap.set(leaf, {
        filter: `blur(0px) drop-shadow(0 0 10px rgba(0,255,0,0.5))`,
        mixBlendMode: "screen",
      });

      gsap.to(leaf, {
        scrollTrigger: {
          trigger: leaf,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        x: () => gsap.utils.random(-200, 200),
        y: () => gsap.utils.random(-600, 600),
        rotate: () => gsap.utils.random(-90, 90),
        autoAlpha: () => gsap.utils.random(0.3, 0.7),
        duration: gsap.utils.random(6, 10),
        ease: "none",
      });
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {[...Array(25)].map((_, index) => {
        const leafIndex = (index % 4) + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;

        return (
          <Image
            key={index}
            src={`/leaves/leaf${leafIndex}.png`}
            width={40}
            height={40}
            alt={`Leaf ${leafIndex}`}
            className="floating-leaf absolute"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              opacity: 0,
              zIndex: -1,
              filter: "blur(2px) drop-shadow(0 0 10px rgba(0,255,0,0.5))",
              mixBlendMode: "screen",
            }}
          />
        );
      })}
    </div>
  );
};
