"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

gsap.registerPlugin(ScrollTrigger)

const faqData = [
  {
    question: "Who is eligible to participate in the hackathon?",
    answer:
      "All students from colleges and universities are eligible to participate. Both undergraduate and graduate students can join the hackathon.",
  },
  {
    question: "Do all team members need to register and pay individually?",
    answer:
      "Yes, each team member needs to register individually and pay the registration fee separately to secure their spot in the hackathon.",
  },
  {
    question: "Can I participate as an individual or do I need a team?",
    answer: "You can participate both as an individual or as part of a team. Teams can have 2-4 members maximum.",
  },
  {
    question: "Can students from different colleges be in the same team?",
    answer:
      "Students from different colleges and universities can form teams together. Cross-college collaboration is encouraged.",
  },
  {
    question: "Will there be mentors or workshops during the hackathon?",
    answer:
      "Yes, we will have experienced mentors available throughout the event and conduct workshops on various technologies and development practices.",
  },
  {
    question: "What resources will be provided during the hackathon?",
    answer:
      "We provide WiFi, power outlets, meals, snacks, development tools access, API keys, and technical support throughout the event.",
  },
  {
    question: "How can I stay informed about event updates and announcements?",
    answer:
      "Follow our social media channels, join our Discord server, and check your registered email regularly for all updates and announcements.",
  },
]

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      // FAQ items animation
      if (itemsRef.current) {
        const items = itemsRef.current.querySelectorAll("[data-faq-item]")
        gsap.fromTo(
          items,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold text-center font-orbitron mb-16">
          FAQ
        </h2>

        {/* FAQ Accordion */}
        <div ref={itemsRef}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                data-faq-item
                className="border-gray-800 bg-gray-900/30 rounded-lg px-6 hover:bg-gray-900/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-medium py-6 hover:text-[#a3ff12] transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base md:text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
