"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const TARGET_DATE = "2025-08-20T02:00:00";

const NEON_GREEN = "#B5FF2B";
const NEON_GREEN_SHADOW = "rgba(181, 255, 43, 0.5)";

function getTimeLeft() {
  if (typeof window === "undefined") {
    const serverNow = new Date();
    const target = new Date(TARGET_DATE);
    const diff = target.getTime() - serverNow.getTime();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return { days, hours: 0, minutes: 0, seconds: 0 };
  }

  const now = new Date();
  const target = new Date(TARGET_DATE);
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function CountdownHexagon({
  value,
  label,
  delay = 0,
}: {
  value: number;
  label: string;
  delay?: number;
}) {
  const hexPath =
    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center"
    >
      <div className="relative h-[120px] w-[120px] sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-56 lg:w-56 xl:h-64 xl:w-64">
        <div
          className="absolute inset-0 m-auto h-[105%] w-[105%] bg-gradient-to-b from-[#B5FF2Bcc] to-[#B5FF2B33]"
          style={{
            clipPath: hexPath,
            padding: "3px",
          }}
        >
          <div
            className="h-full w-full bg-black"
            style={{ clipPath: hexPath }}
          ></div>
        </div>

        <div
          className="absolute inset-0 m-auto h-[102%] w-[102%] bg-zinc-950"
          style={{
            clipPath: hexPath,
          }}
        ></div>

        <motion.div
          className="absolute inset-0 h-full w-full"
          style={{
            clipPath: hexPath,
            boxShadow: `0 0 15px ${NEON_GREEN_SHADOW}, 0 0 30px ${NEON_GREEN_SHADOW}`,
          }}
          animate={{
            boxShadow: [
              `0 0 10px ${NEON_GREEN}66, 0 0 20px ${NEON_GREEN}4d, 0 0 30px ${NEON_GREEN}33`,
              `0 0 20px ${NEON_GREEN}cc, 0 0 40px ${NEON_GREEN}99, 0 0 60px ${NEON_GREEN}66`,
              `0 0 10px ${NEON_GREEN}66, 0 0 20px ${NEON_GREEN}4d, 0 0 30px ${NEON_GREEN}33`,
            ],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute inset-0 m-auto h-[98%] w-[98%]"
          style={{
            clipPath: hexPath,
            border: `2px solid ${NEON_GREEN}`,
          }}
          animate={{
            borderColor: [
              `${NEON_GREEN}cc`,
              `${NEON_GREEN}cc`,
              `${NEON_GREEN}33`,
              `${NEON_GREEN}e5`,
              `${NEON_GREEN}80`,
              `${NEON_GREEN}cc`,
            ],
            boxShadow: [
              `0 0 15px ${NEON_GREEN}80`,
              `0 0 15px ${NEON_GREEN}80`,
              `0 0 20px ${NEON_GREEN}e5`,
              `0 0 20px ${NEON_GREEN}4d`,
              `0 0 15px ${NEON_GREEN}b3`,
              `0 0 15px ${NEON_GREEN}80`,
            ],
          }}
          transition={{
            duration: 12,
            times: [0, 0.9, 0.92, 0.94, 0.96, 1],
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute inset-0 m-auto h-[99%] w-[99%] opacity-40"
          style={{
            clipPath: hexPath,
            border: `1px dashed ${NEON_GREEN}`,
          }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute inset-0 h-full w-full opacity-70"
          style={{
            clipPath: hexPath,
            border: `2px solid ${NEON_GREEN}`,
          }}
          animate={{
            borderColor: [`${NEON_GREEN}b3`, NEON_GREEN, `${NEON_GREEN}b3`],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute inset-0 m-auto h-[92%] w-[92%] opacity-80"
          style={{
            clipPath: hexPath,
            border: `1px solid ${NEON_GREEN}`,
          }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <div
          className="absolute inset-0 m-auto h-[89%] w-[89%] opacity-30"
          style={{
            clipPath: hexPath,
            border: `1px dotted ${NEON_GREEN}`,
          }}
        />

        <div
          className="absolute inset-0 m-auto h-[86%] w-[86%] opacity-60"
          style={{
            clipPath: hexPath,
            border: `1px solid ${NEON_GREEN}`,
          }}
        />

        <motion.div
          className="absolute inset-0 m-auto h-[82%] w-[82%]"
          style={{
            clipPath: hexPath,
            border: `3px solid ${NEON_GREEN}`,
            boxShadow: `0 0 15px ${NEON_GREEN}e5, inset 0 0 8px ${NEON_GREEN}b3`,
          }}
          animate={{
            borderColor: [`${NEON_GREEN}b3`, NEON_GREEN, `${NEON_GREEN}b3`],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div
            className="absolute inset-0 -z-10 bg-[#0a0e11]"
            style={{
              clipPath: hexPath,
            }}
          />

          <motion.div
            className="absolute inset-0 h-[20%] bg-gradient-to-b from-transparent via-[#B5FF2B33] to-transparent"
            style={{
              clipPath: hexPath,
            }}
            animate={{ y: [-200, 200] }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={value}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`${orbitron.className} absolute inset-0 flex items-center justify-center text-2xl font-bold -tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl`}
            >
              {String(value).padStart(2, "0")}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {label && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className={`${orbitron.className} mt-1 text-[10px] font-bold tracking-widest sm:mt-2 sm:text-xs md:mt-3 md:text-sm lg:mt-4 lg:text-base`}
          style={{ color: NEON_GREEN }}
        >
          <motion.span
            animate={{
              textShadow: [
                `0 0 8px ${NEON_GREEN}b3`,
                `0 0 15px ${NEON_GREEN}e5, 0 0 20px ${NEON_GREEN}99`,
                `0 0 8px ${NEON_GREEN}b3`,
              ],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {label}
          </motion.span>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Counter() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-1 py-6 sm:px-2 sm:py-8 md:px-4 md:py-10 lg:py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`${orbitron.className} mb-4 px-1 text-center text-3xl font-bold tracking-wider sm:mb-6 sm:px-2 sm:text-4xl md:mb-8 md:text-5xl lg:mb-12 lg:text-6xl`}
        style={{ color: NEON_GREEN }}
      >
        <motion.span
          animate={{
            textShadow: [
              `0 0 10px ${NEON_GREEN}80`,
              `0 0 20px ${NEON_GREEN}e5, 0 0 30px ${NEON_GREEN}99`,
              `0 0 10px ${NEON_GREEN}80`,
            ],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          EVENT STARTS IN
        </motion.span>
      </motion.h2>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-2 sm:gap-6 md:gap-8 lg:grid-cols-4 lg:gap-10">
        <CountdownHexagon value={timeLeft.days} label="DAYS" delay={0.3} />
        {isClient && (
          <>
            <CountdownHexagon
              value={timeLeft.hours}
              label="HOURS"
              delay={0.5}
            />
            <CountdownHexagon
              value={timeLeft.minutes}
              label="MINUTES"
              delay={0.7}
            />
            <CountdownHexagon
              value={timeLeft.seconds}
              label="SECONDS"
              delay={0.9}
            />
          </>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-8 h-[1px] w-32 bg-gradient-to-r from-transparent via-[#B5FF2B] to-transparent opacity-70 sm:mt-12 sm:w-40 md:mt-16"
      />
    </div>
  );
}
