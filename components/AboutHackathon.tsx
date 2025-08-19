"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HoverBorderGradient } from "@/components/old/hover-border-gradient"

gsap.registerPlugin(ScrollTrigger)



export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const hacRef = useRef<HTMLDivElement>(null)
  const athonRef = useRef<HTMLDivElement>(null)
  const kRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const image1Ref = useRef<HTMLImageElement>(null)
  const image2Ref = useRef<HTMLImageElement>(null)
  const image3Ref = useRef<HTMLImageElement>(null)
  const image4Ref = useRef<HTMLImageElement>(null)
  const image5Ref = useRef<HTMLImageElement>(null)
  const image6Ref = useRef<HTMLImageElement>(null)
  const image7Ref = useRef<HTMLImageElement>(null)
  const image8Ref = useRef<HTMLImageElement>(null)
  const image9Ref = useRef<HTMLImageElement>(null)
  const image10Ref = useRef<HTMLImageElement>(null)
  const image11Ref = useRef<HTMLImageElement>(null)
  const image12Ref = useRef<HTMLImageElement>(null)
  const image13Ref = useRef<HTMLImageElement>(null)
  const image14Ref = useRef<HTMLImageElement>(null)
  const image15Ref = useRef<HTMLImageElement>(null)
  const image16Ref = useRef<HTMLImageElement>(null)
  const image17Ref = useRef<HTMLImageElement>(null)
  const image18Ref = useRef<HTMLImageElement>(null)
  const brownCircleRef = useRef<HTMLDivElement>(null)
  const leftBracketRef = useRef<HTMLDivElement>(null)
  const rightBracketRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const ctx = gsap.context(() => {
      gsap.set(imageRef.current, {
        scale: 4,
        opacity: 1,
        zIndex: 30,
      })

      gsap.set(
        [
          hacRef.current,
          athonRef.current,
          kRef.current,
          brownCircleRef.current,
          leftBracketRef.current,
          rightBracketRef.current,
        ],
        {
          opacity: 0,
        },
      )

      gsap.set(contentRef.current, {
        opacity: 0,
        y: 50,
      })

      gsap.set(hacRef.current, {
        x: -300,
        opacity: 0,
      })

      gsap.set(athonRef.current, {
        x: 300,
        opacity: 0,
      })

      gsap.set(kRef.current, {
        y: 50,
        opacity: 0,
      })

      gsap.set(leftBracketRef.current, {
        x: -50,
        opacity: 0,
      })

      gsap.set(rightBracketRef.current, {
        x: 50,
        opacity: 0,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "180% bottom",
          scrub: 1,
          pin: true,
        },
      })

      tl.set(image1Ref.current, { opacity: 0 })
        .set(image2Ref.current, { opacity: 1 })
        .set(image2Ref.current, { opacity: 0 }, "+=0.1")
        .set(image3Ref.current, { opacity: 1 })
        .set(image3Ref.current, { opacity: 0 }, "+=0.1")
        .set(image4Ref.current, { opacity: 1 })
        .set(image4Ref.current, { opacity: 0 }, "+=0.1")
        .set(image5Ref.current, { opacity: 1 })
        .set(image5Ref.current, { opacity: 0 }, "+=0.1")
        .set(image6Ref.current, { opacity: 1 })
        .set(image6Ref.current, { opacity: 0 }, "+=0.1")
        .set(image7Ref.current, { opacity: 1 })
        .set(image7Ref.current, { opacity: 0 }, "+=0.1")
        .set(image8Ref.current, { opacity: 1 })
        .set(image8Ref.current, { opacity: 0 }, "+=0.1")
        .set(image9Ref.current, { opacity: 1 })
        .set(image9Ref.current, { opacity: 0 }, "+=0.1")
        .set(image10Ref.current, { opacity: 1 })
        .set(image10Ref.current, { opacity: 0 }, "+=0.1")
        .set(image11Ref.current, { opacity: 1 })
        .set(image11Ref.current, { opacity: 0 }, "+=0.1")
        .set(image12Ref.current, { opacity: 1 })
        .set(image12Ref.current, { opacity: 0 }, "+=0.1")
        .set(image13Ref.current, { opacity: 1 })
        .set(image13Ref.current, { opacity: 0 }, "+=0.1")
        .set(image14Ref.current, { opacity: 1 })
        .set(image14Ref.current, { opacity: 0 }, "+=0.1")
        .set(image15Ref.current, { opacity: 1 })
        .set(image15Ref.current, { opacity: 0 }, "+=0.1")
        .set(image16Ref.current, { opacity: 1 })
        .set(image16Ref.current, { opacity: 0 }, "+=0.1")
        .set(image17Ref.current, { opacity: 1 })
        .set(image17Ref.current, { opacity: 0 }, "+=0.1")
        .set(image18Ref.current, { opacity: 1 })
        .set(image18Ref.current, { opacity: 0 }, "+=0.1")
        .set(image1Ref.current, { opacity: 1 })

      tl.to(
        imageRef.current,
        {
          scale: 0.4,
          duration: 2,
          ease: "power2.out",
        },
        0,
      )
        .to(
          imageRef.current,
          {
            scale: 0.01,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=0.5",
        )

        .to(
          hacRef.current,
          {
            x: -5,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=2",
        )

        .to(
          athonRef.current,
          {
            x: 5,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1.7",
        )

        .to(
          leftBracketRef.current,
          {
            x: -2,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1.7",
        )

        .to(
          rightBracketRef.current,
          {
            x: 2,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1.7",
        )

        .to(
          kRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "-=1",
        )

        .to(
          brownCircleRef.current,
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=1.5",
        )
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            onComplete: () => setShowContent(true),
          },
          "-=1",
        )
    }, containerRef)

    return () => ctx.revert()
  }, [isClient])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="min-h-[180vh] bg-black text-white overflow-hidden">
      <div className="h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-end justify-center font-orbitron">
            <div
              ref={hacRef}
              className="text-[12vw] md:text-[8vw] font-black tracking-tight leading-none select-none text-white opacity-0"
            >
              DEV
            </div>

            <div className="relative flex items-end justify-center">
              <div ref={imageRef} className="w-[120px] h-[80px]  opacity-1">
                <img
                  key="image-1"
                  ref={image1Ref}
                  src="/images/IMG_1.jpg"
                  alt="Innovation workspace 1"
                  className="absolute inset-0 w-full h-full object-cover rounded"
                />
                <img
                  key="image-2"
                  ref={image2Ref}
                  src="/images/IMG_3.webp"
                  alt="Innovation workspace 2"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-3"
                  ref={image3Ref}
                  src="/images/IMG_4.webp"
                  alt="Modern office workspace"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-4"
                  ref={image4Ref}
                  src="/images/IMG_5.webp"
                  alt="Creative studio space"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-5"
                  ref={image5Ref}
                  src="/images/IMG_6.webp"
                  alt="Tech startup office"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-6"
                  ref={image6Ref}
                  src="/images/IMG_2.webp"
                  alt="Cozy library corner"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-7"
                  ref={image7Ref}
                  src="/images/IMG_7.webp"
                  alt="Collaborative workspace 7"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-8"
                  ref={image8Ref}
                  src="/images/IMG_8.webp"
                  alt="Innovation lab 8"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-9"
                  ref={image9Ref}
                  src="/images/IMG_9.webp"
                  alt="Developer workspace 9"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-10"
                  ref={image10Ref}
                  src="/images/IMG_10.webp"
                  alt="Creative studio 10"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-11"
                  ref={image11Ref}
                  src="/images/IMG_11.webp"
                  alt="Tech hub 11"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-12"
                  ref={image12Ref}
                  src="/images/IMG_12.webp"
                  alt="Coding environment 12"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-13"
                  ref={image13Ref}
                  src="/images/IMG_13.webp"
                  alt="Hackathon space 13"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-14"
                  ref={image14Ref}
                  src="/images/IMG_14.webp"
                  alt="Innovation center 14"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-15"
                  ref={image15Ref}
                  src="/images/IMG_15.webp"
                  alt="Development workspace 15"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-16"
                  ref={image16Ref}
                  src="/images/IMG_16.webp"
                  alt="Creative lab 16"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-17"
                  ref={image17Ref}
                  src="/images/IMG_17.webp"
                  alt="Tech workspace 17"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-18"
                  ref={image18Ref}
                  src="/images/IMG_18.webp"
                  alt="Final workspace 18"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
              </div>
              <div
                ref={kRef}
                className="text-[12vw] md:text-[8vw] font-black tracking-tight leading-none select-none text-[#a3ff12] opacity-0 absolute"
              >
                H
              </div>
            </div>

            <div
              ref={athonRef}
              className="text-[12vw] md:text-[8vw] font-black tracking-tight leading-none select-none text-white opacity-0"
            >
              ACK
            </div>
          </div>
        </div>

        <div ref={contentRef} className="absolute bottom-20 flex flex-col items-center space-y-6 opacity-0">
          <div className="text-center max-w-2xl px-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-mono">
              Join us for an intense 20-hour hackathon where innovation meets execution. Build, code, and create the
              future in one epic weekend of non-stop development.
            </p>
          </div>

          <HoverBorderGradient
            containerClassName="rounded-full"
            className="bg-black/70 border border-[var(--neon-green-dim)] shadow-[0_0_10px_var(--neon-green-glow)] hover:shadow-[0_0_20px_var(--neon-green)] w-full md:w-auto px-6 md:px-8 py-3 md:py-4 group flex items-center justify-center space-x-2 transition-all duration-300"
          >
            <span className="text-[var(--neon-green)] text-sm md:text-base font-mono tracking-wider">
              Know More About DevHack
            </span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  )
}
