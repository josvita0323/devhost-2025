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
      className="relative my-section min-h-screen bg-black text-[var(--neon-green)] overflow-hidden"
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
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--neon-green)_1px,transparent_1px)] [background-size:40px_40px] animate-pulse" />
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[var(--neon-green)] rounded-full animate-pulse opacity-30" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[var(--neon-green)] rounded-full animate-pulse opacity-20" style={{ animationDelay: "1s" }} />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex justify-center pb-10 items-center w-full px-4 py-10"
      >
        <div className="max-w-7xl w-full">
          <div className="relative group">
            {/* Use the AboutCard component as a wrapper */}
            <AboutCard className="w-full h-auto bg-black/70 border-[var(--neon-green-dim)]">
              <div className="pt-6 pb-6 px-4 md:px-10 md:pt-10 md:pb-10">
                {/* Title with laser scan */}
                <div className="relative pb-4 md:pb-8">
                  <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-orbitron text-center text-3xl font-bold text-white uppercase md:text-6xl mb-2"
                  >
                    <br />
                    {devhostData.title}
                  </motion.h1>
                  
                  {/* Laser scan line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full w-[30%] bg-[var(--neon-green)] opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                      style={{
                        animation: 'laser-scan 3s linear infinite',
                        boxShadow: '0 0 8px var(--neon-green)'
                      }}
                    />
                  </div>
                </div>

                <motion.h2
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="font-default text-center text-base tracking-wider text-[var(--neon-green-bright)] mb-6 md:mb-8 md:text-lg"
                >
                  &gt; {devhostData.caption}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="font-default  md:text-lg tracking-wider mb-6 md:mb-8 text-gray-200 leading-relaxed text-center"
                >
                  {devhostData.about}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mt-6 md:mt-8 justify-center"
                >
                  <a href="/brochure/Event Rulebook - Devhost.pdf" download className="w-full md:w-auto">
                    <div className="bg-black/70 border border-[var(--neon-green-glow)] w-full md:w-auto px-4 md:px-8 py-3 md:py-4 group flex items-center justify-center space-x-2 transition-all duration-300 hover:border-[var(--neon-green)] hover:shadow-[0_0_10px_var(--neon-green-bright)] transform hover:scale-105 rounded-md">
                      <Download size={18} className="text-[var(--neon-green)] md:size-5" />
                      <span className="text-[var(--neon-green)] text-xs md:text-base font-mono tracking-wider">
                        Event Rulebook
                      </span>
                    </div>
                  </a>

                  <a href="/brochure/General Brochure Devhost.pdf" download className="w-full md:w-auto">
                     <div className="bg-black/70 border border-[var(--neon-green-glow)] w-full md:w-auto px-4 md:px-8 py-3 md:py-4 group flex items-center justify-center space-x-2 transition-all duration-300 hover:border-[var(--neon-green)] hover:shadow-[0_0_10px_var(--neon-green-bright)] transform hover:scale-105 rounded-md">
                      <Download size={18} className="text-[var(--neon-green)] md:size-5" />
                      <span className="text-[var(--neon-green)] text-xs md:text-base font-mono tracking-wider">
                        DevHost Brochure
                      </span>
                    </div>
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