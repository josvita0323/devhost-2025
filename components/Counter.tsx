"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TARGET_DATE = "2025-11-06T00:00:00";
const EVENT_SUBTITLE = "EVENT STARTS IN";
const TIME_LABELS = {
  days: "DAYS",
  hours: "HOURS",
  minutes: "MINUTES",
  seconds: "SECONDS",
};

function getTimeLeft() {
  const now = new Date();
  const target = new Date(TARGET_DATE);
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function CountdownDigit({
  value,
  label,
  delay = 0,
}: {
  value: number;
  label: string;
  delay?: number;
}) {
  const formattedValue = String(value).padStart(2, "0");
  const isSeconds = label === TIME_LABELS.seconds;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center"
    >
      <div className="xs:h-20 xs:w-20 relative flex h-16 w-16 items-center justify-center overflow-hidden sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{
              duration: isSeconds ? 0.15 : 0.3,
              type: "tween",
              ease: isSeconds ? "easeIn" : "easeOut",
            }}
            className="digit-container flex h-full w-full items-center justify-center"
          >
            <div
              className={`font-kleemax xs:text-3xl text-foreground text-center text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl ${
                isSeconds ? "seconds-digit" : ""
              }`}
              style={{ position: "relative" }}
            >
              {formattedValue}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {label && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay }}
          className="font-orbitron text-primary text-center text-xs tracking-widest sm:text-sm md:text-base lg:text-lg"
        >
          {label}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Counter() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const isComplete = Object.values(timeLeft).every((v) => v === 0);

  if (!mounted) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-1 py-6 sm:px-2 sm:py-8 md:px-4 md:py-10 lg:py-12">
        <div className="flex flex-col items-center w-full px-4 mb-4 sm:mb-6">
          <h2 className="font-dystopian mb-4 xs:mb-5 sm:mb-6 px-1 text-center text-base xs:text-lg sm:text-4xl md:text-5xl lg:text-6xl text-primary/70 tracking-widest shadow-primary">
            {EVENT_SUBTITLE}
          </h2>
        </div>
        
        <div className="mx-auto grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[640px] lg:max-w-4xl lg:grid-cols-4">
          <CountdownDigit value={0} label={TIME_LABELS.days} delay={0.3} />
          <CountdownDigit value={0} label={TIME_LABELS.hours} delay={0.5} />
          <CountdownDigit value={0} label={TIME_LABELS.minutes} delay={0.7} />
          <CountdownDigit value={0} label={TIME_LABELS.seconds} delay={0.9} />
        </div>
        
        <div className="mt-6 h-[2px] w-32 bg-primary/50 rounded-sm shadow-primary" />
      </div>
    );
  }

  if (isComplete && mounted) {
    return (
      <div className="bg-background text-primary flex min-h-screen flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="font-kleemax xs:text-3xl max-w-5xl px-4 text-center text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
        >
          The Event Has Started!
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-background relative flex h-[50vh] flex-col items-center justify-center overflow-hidden px-1 py-6 sm:px-2 sm:py-8 md:px-4 md:py-10 lg:py-12">
      <motion.div
        className="mb-4 flex w-full flex-col items-center px-4 sm:mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="font-orbitron text-primary shadow-primary px-1 text-center text-lg tracking-widest lg:text-3xl"
          initial={{ skewY: 2 }}
          whileInView={{ skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {EVENT_SUBTITLE}
        </motion.h2>
      </motion.div>

      <div className="xs:gap-3 xs:max-w-[320px] mx-auto grid max-w-[280px] grid-cols-2 gap-2 px-2 sm:max-w-[400px] sm:gap-4 md:max-w-[640px] md:gap-6 lg:max-w-4xl lg:grid-cols-4 lg:gap-8">
        <CountdownDigit
          value={timeLeft.days}
          label={TIME_LABELS.days}
          delay={0.3}
        />
        <CountdownDigit
          value={timeLeft.hours}
          label={TIME_LABELS.hours}
          delay={0.5}
        />
        <CountdownDigit
          value={timeLeft.minutes}
          label={TIME_LABELS.minutes}
          delay={0.7}
        />
        <CountdownDigit
          value={timeLeft.seconds}
          label={TIME_LABELS.seconds}
          delay={0.9}
        />
      </div>

      <motion.div
        className="bg-primary/50 shadow-primary mt-6 h-[2px] w-32 rounded-sm"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <style jsx global>{`
        .xs\\:h-20 {
          height: 5rem;
        }
        .xs\\:w-20 {
          width: 5rem;
        }
        .xs\\:text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }
        .xs\\:mb-5 {
          margin-bottom: 1.25rem;
        }
        .xs\\:text-lg {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        .xs\\:gap-3 {
          gap: 0.75rem;
        }
        .xs\\:max-w-\\[320px\\] {
          max-width: 320px;
        }
        .xs\\:mt-6 {
          margin-top: 1.5rem;
        }

        .seconds-digit {
          position: relative;
        }

        .digit-container {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
