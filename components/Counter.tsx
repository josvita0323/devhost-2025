"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TARGET_DATE = "2025-08-21T19:20:00";
const EVENT_SUBTITLE = "EVENT STARTS IN";
const TIME_LABELS = { days: "DAYS", hours: "HOURS", minutes: "MINUTES", seconds: "SECONDS" };

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

function CountdownDigit({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) {
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
      <div className="relative flex items-center justify-center h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ 
              duration: isSeconds ? 0.15 : 0.3, 
              type: "tween",
              ease: isSeconds ? "easeIn" : "easeOut"
            }}
            className="flex items-center justify-center w-full h-full digit-container"
          >
            <div 
              className={`font-kleemax text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground ${
                isSeconds ? "seconds-digit" : ""
              }`}
              style={{ position: 'relative' }}
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
          className="font-dystopian mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-center text-primary tracking-widest"
        >
          {label}
        </motion.div>
      )}
    </motion.div>
  );
}


export default function Counter() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isComplete = Object.values(timeLeft).every((v) => v === 0);

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="font-kleemax font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center px-4 max-w-5xl"
        >
          The Event Has Started!
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-1 py-6 sm:px-2 sm:py-8 md:px-4 md:py-10 lg:py-12">
      <motion.div
        className="flex flex-col items-center w-full px-4 mb-4 sm:mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="font-dystopian mb-4 xs:mb-5 sm:mb-6 px-1 text-center text-base xs:text-lg sm:text-4xl md:text-5xl lg:text-6xl text-primary/70 tracking-widest shadow-primary"
          initial={{ skewY: 2 }}
          whileInView={{ skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {EVENT_SUBTITLE}
        </motion.h2>
      </motion.div>

      <div className="mx-auto grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[640px] lg:max-w-4xl lg:grid-cols-4">
        <CountdownDigit value={timeLeft.days} label={TIME_LABELS.days} delay={0.3} />
        <CountdownDigit value={timeLeft.hours} label={TIME_LABELS.hours} delay={0.5} />
        <CountdownDigit value={timeLeft.minutes} label={TIME_LABELS.minutes} delay={0.7} />
        <CountdownDigit value={timeLeft.seconds} label={TIME_LABELS.seconds} delay={0.9} />
      </div>

      <motion.div
        className="mt-6 h-[2px] w-32 bg-primary/50 rounded-sm shadow-primary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <style jsx global>{`
        .xs\\:h-20 { height: 5rem; }
        .xs\\:w-20 { width: 5rem; }
        .xs\\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .xs\\:mb-5 { margin-bottom: 1.25rem; }
        .xs\\:text-lg { font-size: 1.25rem; line-height: 1.75rem; }
        .xs\\:gap-3 { gap: 0.75rem; }
        .xs\\:max-w-\\[320px\\] { max-width: 320px; }
        .xs\\:mt-6 { margin-top: 1.5rem; }
        
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
