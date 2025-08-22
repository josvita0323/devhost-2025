import React from "react";
import { Download } from "lucide-react";
import { HoverBorderGradient } from "@/components/old/hover-border-gradient";
import { motion } from "framer-motion";
import AboutCard from "./ui/aboutcard";

export default function AboutDevhost() {
  interface DevhostData {
    title: string;
    caption: string;
    about: string;
    logoSrc: string;
  }

  const devhostData: DevhostData = {
    title: "About Devhost",
    caption: "Expertise Redefined, Experience Reimagined.",
    about:
      "Devhost, the flagship event is a remarkable tech convergence by Sahyadri Open Source Community (SOSC), is set to be an exhilarating experience with an exciting mix of technical and non-technical events. It seeks to equip participants with knowledge and skills, while encouraging curiosity and fostering innovation. With a variety of tech and non-tech battles and events featuring dev talks and workshops led by industry experts, it creates opportunities for both personal development and self-exploration. Join the 22-hour live hack event to bring your ideas to fruition, with challenges designed for every level of experience.",
    logoSrc: "temp.jpg",
  };

  return (
    <section
      className="my-section relative min-h-screen overflow-hidden bg-black text-[var(--neon-green)] pt-12"
      style={
        {
          "--neon-green": "#a3ff12",
          "--neon-green-glow": "rgba(163, 255, 18, 0.3)",
          "--neon-green-dim": "rgba(163, 255, 18, 0.1)",
          "--neon-green-bright": "rgba(163, 255, 18, 0.8)",
        } as React.CSSProperties
      }
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--neon-green)_1px,transparent_1px)] [background-size:40px_40px] opacity-50" />

      <div className="absolute top-0 h-48 w-full bg-gradient-to-b from-black/95 via-black/80 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex w-full items-center justify-center px-4 py-10 pb-10"
      >
        <div className="w-full max-w-7xl">
          <div className="group relative">
            {/* Use the AboutCard component as a wrapper */}
            <AboutCard className="h-auto w-full border-[var(--neon-green-dim)]">
              <div className="px-4 pt-6 pb-6 md:px-10 md:pt-10 md:pb-10">
                {/* Title with laser scan */}
                <div className="relative pb-4 md:pb-8">
                  <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-orbitron mb-2 text-center text-3xl font-bold text-white uppercase md:text-6xl"
                  >
                    <br />
                    {devhostData.title}
                  </motion.h1>

                  {/* Laser scan line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full w-[30%] bg-[var(--neon-green)] opacity-0 transition-opacity duration-300 group-hover:opacity-50"
                      style={{
                        animation: "laser-scan 3s linear infinite",
                        boxShadow: "0 0 8px var(--neon-green)",
                      }}
                    />
                  </div>
                </div>

                <motion.h2
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="font-default mb-6 text-center text-base tracking-wider text-[var(--neon-green-bright)] md:mb-8 md:text-lg"
                >
                  &gt; {devhostData.caption}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="font-default mb-6 text-justify leading-relaxed tracking-wider text-gray-200 md:mb-8 md:text-lg"
                >
                  {devhostData.about}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                  viewport={{ once: true }}
                  className="mt-6 flex w-full justify-center gap-3"
                >
                  <a href="/brochure/Event Rulebook - Devhost.pdf" download>
                    <button
                      className="bg-primary relative flex cursor-pointer items-center gap-2 px-5 py-2 text-xs font-bold tracking-widest text-black uppercase transition"
                      style={{
                        clipPath:
                          "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                      }}
                    >
                      <Download size={18} className="md:size-5" />
                      <span className="font-mono text-xs tracking-wider">
                        Event Rulebook
                      </span>
                    </button>
                  </a>

                  <a href="/brochure/General Brochure Devhost.pdf" download>
                    <button
                      className="bg-primary relative flex cursor-pointer items-center gap-2 px-5 py-2 text-xs font-bold tracking-widest text-black uppercase transition"
                      style={{
                        clipPath:
                          "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                      }}
                    >
                      <Download size={18} className="md:size-5" />
                      <span className="font-mono text-xs tracking-wider">
                        DevHost Brochure
                      </span>
                    </button>
                  </a>
                </motion.div>
              </div>
            </AboutCard>
          </div>
        </div>
      </motion.div>

      {/* Animation style */}
      <style jsx>{`
        @keyframes laser-scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
      `}</style>
    </section>
  );
}
