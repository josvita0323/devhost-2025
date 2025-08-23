"use client";

import { useEffect, useState, useRef } from "react";
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
  prevValue,
}: {
  value: number;
  label: string;
  delay?: number;
  prevValue?: number;
}) {
  const formattedValue = String(value).padStart(2, "0");
  const isSeconds = label === TIME_LABELS.seconds;
  const digits = formattedValue.split("");
  
  const hasChanged = prevValue !== undefined && value !== prevValue;
  const unitsDigitIsZero = digits[1] === "0";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center"
    >
      <div className="xs:h-14 xs:w-14 relative flex h-12 w-12 items-center justify-center overflow-hidden sm:h-18 sm:w-18 md:h-22 md:w-22 lg:h-24 lg:w-24">
        <div className="flex items-center justify-center">
          {digits.map((digit, index) => {
            const isUnitsDigit = index === 1;
            const isTensDigit = index === 0;
            
            const shouldAnimate = hasChanged && (
              (isUnitsDigit) || 
              (isTensDigit && unitsDigitIsZero)
            );
            
            return (
            <AnimatePresence mode="wait" key={`${index}-${digit}`}>
              <motion.div
                key={`${value}-${index}-${shouldAnimate ? "anim" : "static"}`}
                initial={shouldAnimate ? { y: -80, opacity: 0 } : { y: 0, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={shouldAnimate ? { y: 80, opacity: 0 } : { y: 0, opacity: 1 }}
                transition={{
                  duration: isSeconds ? 0.15 : 0.3,
                  type: "tween",
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="digit-container flex items-center justify-center"
              >
                <div
                  className={`font-kleemax xs:text-xl text-foreground text-center text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl relative ${
                    isSeconds ? "seconds-digit" : ""
                  }`}
                >
                  {digit}
                </div>
              </motion.div>
            </AnimatePresence>
          )})}
        </div>
      </div>

      {label && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay }}
          className="font-orbitron text-primary text-center text-[10px] tracking-widest sm:text-xs md:text-xs lg:text-sm"
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
  const prevTimeLeft = useRef({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const initialTime = getTimeLeft();
    setTimeLeft(initialTime);
    prevTimeLeft.current = initialTime;
    
    const timer = setInterval(() => {
      prevTimeLeft.current = {...timeLeft};
      setTimeLeft(getTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const isComplete = Object.values(timeLeft).every((v) => v === 0);

  if (!mounted) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-1 py-6 sm:px-2 sm:py-8 md:px-4 md:py-10 lg:py-12">
        <div className="flex flex-col items-center w-full px-4 mb-4 sm:mb-6">
          <h2 className="font-dystopian mb-3 xs:mb-4 sm:mb-5 px-1 text-center text-sm xs:text-base sm:text-3xl md:text-4xl lg:text-5xl text-primary/70 tracking-widest shadow-primary">
            {EVENT_SUBTITLE}
          </h2>
        </div>
        
        <div className="mx-auto grid grid-cols-2 gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-2 max-w-[240px] xs:max-w-[280px] sm:max-w-[340px] md:max-w-[500px] lg:max-w-3xl lg:grid-cols-4">
          <CountdownDigit value={0} prevValue={0} label={TIME_LABELS.days} delay={0.3} />
          <CountdownDigit value={0} prevValue={0} label={TIME_LABELS.hours} delay={0.5} />
          <CountdownDigit value={0} prevValue={0} label={TIME_LABELS.minutes} delay={0.7} />
          <CountdownDigit value={0} prevValue={0} label={TIME_LABELS.seconds} delay={0.9} />
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
          className="font-orbitron text-primary shadow-primary px-1 text-center text-sm tracking-widest lg:text-xl"
          initial={{ skewY: 2 }}
          whileInView={{ skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {EVENT_SUBTITLE}
        </motion.h2>
      </motion.div>

      <div className="xs:gap-1 xs:max-w-[260px] mx-auto grid max-w-[220px] grid-cols-2 gap-1 px-2 sm:max-w-[320px] sm:gap-2 md:max-w-[460px] md:gap-3 lg:max-w-2xl lg:grid-cols-4 lg:gap-4">
        <CountdownDigit
          value={timeLeft.days}
          prevValue={prevTimeLeft.current.days}
          label={TIME_LABELS.days}
          delay={0.3}
        />
        <CountdownDigit
          value={timeLeft.hours}
          prevValue={prevTimeLeft.current.hours}
          label={TIME_LABELS.hours}
          delay={0.5}
        />
        <CountdownDigit
          value={timeLeft.minutes}
          prevValue={prevTimeLeft.current.minutes}
          label={TIME_LABELS.minutes}
          delay={0.7}
        />
        <CountdownDigit
          value={timeLeft.seconds}
          prevValue={prevTimeLeft.current.seconds}
          label={TIME_LABELS.seconds}
          delay={0.9}
        />
      </div>

        <motion.div
          className="bg-primary/50 shadow-primary mt-4 h-[1px] w-24 rounded-sm"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />      <style jsx global>{`
        .xs\\:h-14 {
          height: 3.5rem;
        }
        .xs\\:w-14 {
          width: 3.5rem;
        }
        .xs\\:text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        .xs\\:mb-4 {
          margin-bottom: 1rem;
        }
        .xs\\:text-base {
          font-size: 1rem;
          line-height: 1.5rem;
        }
        .xs\\:gap-1 {
          gap: 0.25rem;
        }
        .xs\\:max-w-\\[260px\\] {
          max-width: 260px;
        }
        .xs\\:mt-4 {
          margin-top: 1rem;
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
