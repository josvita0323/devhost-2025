"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [isClient, setIsClient] = useState(false)

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
  const brownCircleRef = useRef<HTMLDivElement>(null)
  const leftBracketRef = useRef<HTMLDivElement>(null)
  const rightBracketRef = useRef<HTMLDivElement>(null)

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
        .set(image2Ref.current, { opacity: 0 }, "+=0.2")
        .set(image3Ref.current, { opacity: 1 })
        .set(image3Ref.current, { opacity: 0 }, "+=0.2")
        .set(image4Ref.current, { opacity: 1 })
        .set(image4Ref.current, { opacity: 0 }, "+=0.2")
        .set(image5Ref.current, { opacity: 1 })
        .set(image5Ref.current, { opacity: 0 }, "+=0.2")
        .set(image6Ref.current, { opacity: 1 })
        .set(image6Ref.current, { opacity: 0 }, "+=0.2")
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
          <div className="flex items-end justify-center">
            <div
              ref={hacRef}
              className="text-[12vw] md:text-[8vw] font-black tracking-tight leading-none select-none text-white opacity-0"
            >
              HAC
            </div>

            <div
              ref={leftBracketRef}
              className="text-[12vw] md:text-[8vw] font-black tracking-tight leading-none select-none text-white opacity-0"
            >
              (
            </div>

            <div className="relative flex items-end justify-center">
              <div ref={imageRef} className="w-24 h-16 opacity-1">
                <img
                  key="image-1"
                  ref={image1Ref}
                  src="/images/interior-1.png"
                  alt="Innovation workspace 1"
                  className="absolute inset-0 w-full h-full object-cover rounded"
                />
                <img
                  key="image-2"
                  ref={image2Ref}
                  src="/images/interior-2.png"
                  alt="Innovation workspace 2"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-3"
                  ref={image3Ref}
                  src="/images/interior-3.png"
                  alt="Modern office workspace"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-4"
                  ref={image4Ref}
                  src="/images/interior-4.png"
                  alt="Creative studio space"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-5"
                  ref={image5Ref}
                  src="/images/interior-5.png"
                  alt="Tech startup office"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
                <img
                  key="image-6"
                  ref={image6Ref}
                  src="/images/interior-6.png"
                  alt="Cozy library corner"
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0"
                />
              </div>
              <div
                ref={kRef}
                className="text-[12vw] md:text-[8vw] font-black tracking-tight leading-none select-none text-[#a3ff12] opacity-0 absolute"
              >
                K
              </div>
            </div>

            <div
              ref={rightBracketRef}
              className="text-[12vw] md:text-[8vw] font-black tracking-tight leading-none select-none text-white opacity-0"
            >
              )
            </div>

            <div
              ref={athonRef}
              className="text-[12vw] md:text-[8vw] font-black tracking-tight leading-none select-none text-white opacity-0"
            >
              ATHON
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
