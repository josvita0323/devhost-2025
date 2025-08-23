"use client"

import { useEffect, useRef } from "react"
import { Download } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutDevhost() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const captionRef = useRef<HTMLHeadingElement>(null)
  const aboutRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  interface DevhostData {
    title: string
    caption: string
    about: string
    logoSrc: string
  }

  const devhostData: DevhostData = {
    title: "About Devhost",
    caption: "Expertise Redefined, Experience Reimagined.",
    about:
      "Devhost, the flagship event is a remarkable tech convergence by Sahyadri Open Source Community (SOSC), is set to be an exhilarating experience with an exciting mix of technical and non-technical events. It seeks to equip participants with knowledge and skills, while encouraging curiosity and fostering innovation. With a variety of tech and non-tech battles and events featuring dev talks and workshops led by industry experts, it creates opportunities for both personal development and self-exploration. Join the 36-hour live hack event to bring your ideas to fruition, with challenges designed for every level of experience.",
    logoSrc: "temp.jpg",
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, captionRef.current, aboutRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30,
      })

      gsap.set(contentRef.current, {
        opacity: 0,
      })

      gsap.set(backgroundRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      })

      // Start content animation immediately and complete it at 40% of the timeline
      tl.to(contentRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }, 0)
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      }, 0.1)
      .to(captionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      }, 0.2)
      .to(aboutRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      }, 0.3)
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "back.out(1.2)",
      }, 0.4)
      // Background animation starts later and takes longer to complete
      .to(backgroundRef.current, {
        scaleY: 1,
        duration: 0.6,
        ease: "power2.out",
      }, 0.2) // Start background at 20% of timeline, complete at 80%
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-[#b4ff39] bg-opacity-5"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)",
        }}
      />

      <div className="absolute top-6 left-6 text-black font-mono text-sm font-bold opacity-80">// DEVHOST</div>
      <div className="absolute top-6 right-6 text-black font-mono text-sm font-bold opacity-80">2025</div>
      <div className="absolute bottom-6 right-6 text-black font-mono text-xs font-bold opacity-60 -rotate-90 origin-bottom-right">
        ADAPTIVE MOBILE
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 z-10">
        <div ref={contentRef} className="relative p-8 md:p-16 min-h-[600px] flex flex-col justify-center">
          <div className="text-center mb-12">
            <h1
              ref={titleRef}
              className="text-4xl md:text-7xl text-black font-bold uppercase font-orbitron tracking-wider mb-8"
            >
              {devhostData.title}
            </h1>

            <h2 ref={captionRef} className="text-xl md:text-3xl text-black/80 font-mono tracking-wider">
              &gt; {devhostData.caption}
            </h2>
          </div>

          <p
            ref={aboutRef}
            className="text-black/90 leading-relaxed text-justify mb-12 md:text-lg max-w-5xl mx-auto font-medium"
          >
            {devhostData.about}
          </p>

          <div ref={buttonsRef} className="flex justify-center gap-6 flex-wrap">
            <a href="/brochure/Event Rulebook - Devhost.pdf" download>
              <button
                className="flex items-center gap-3 px-8 py-4 bg-black text-[#a3ff12] font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gray-900 hover:scale-105 hover:shadow-xl border-2 border-black"
                style={{
                  clipPath:
                    "polygon(15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%, 0% 15px)",
                }}
              >
                <Download size={20} />
                <span className="font-default text-sm">Event Rulebook</span>
              </button>
            </a>

            <a href="/brochure/General Brochure Devhost.pdf" download>
              <button
                className="flex items-center gap-3 px-8 py-4 bg-black text-[#a3ff12] font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gray-900 hover:scale-105 hover:shadow-xl border-2 border-black"
                style={{
                  clipPath:
                    "polygon(15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%, 0% 15px)",
                }}
              >
                <Download size={20} />
                <span className="font-default text-sm">DevHost Brochure</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}