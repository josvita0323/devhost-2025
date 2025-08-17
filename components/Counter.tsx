"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const COUNTDOWN_FROM = "11/9/2025 8:00:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Counter = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    margin: "-50px",
    amount: 0.2,
  });

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),
    });
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden py-10">
      {/* Background particles that animate on visit */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="bg-primary/20 absolute top-10 left-10 h-2 w-2 rounded-full animate-pulse" />
        <div className="bg-primary/30 absolute top-20 right-20 h-3 w-3 rounded-full animate-pulse [animation-delay:0.5s]" />
        <div className="bg-primary/25 absolute bottom-20 left-20 h-2 w-2 rounded-full animate-pulse [animation-delay:1s]" />
        <div className="bg-primary/20 absolute bottom-10 right-10 h-3 w-3 rounded-full animate-pulse [animation-delay:1.5s]" />
        <div className="bg-primary/35 absolute top-1/2 left-1/4 h-1 w-1 rounded-full animate-pulse [animation-delay:2s]" />
        <div className="bg-primary/25 absolute top-1/3 right-1/3 h-2 w-2 rounded-full animate-pulse [animation-delay:2.5s]" />
      </motion.div>
      
      <motion.div
        className="relative mx-auto max-w-4xl px-12"
        initial={{ opacity: 0, scale: 0.3, y: 150, rotateX: -30 }}
        animate={
          isInView ? { opacity: 1, scale: 1, y: 0, rotateX: 0 } : { opacity: 0, scale: 0.3, y: 150, rotateX: -30 }
        }
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 25,
          duration: 1.2, 
          ease: "easeOut" 
        }}
      >
        <motion.div
          className="group relative"
          initial={{ opacity: 0, rotateX: -45, scale: 0.7, y: 100 }}
          animate={
            isInView ? { opacity: 1, rotateX: 0, scale: 1, y: 0 } : { opacity: 0, rotateX: -45, scale: 0.7, y: 100 }
          }
          transition={{ 
            type: "spring",
            stiffness: 600,
            damping: 20,
            duration: 1.4, 
            delay: 0.3, 
            ease: "easeOut" 
          }}
        >
          <div className="from-primary/50 via-primary/20 absolute top-0 left-0 h-48 w-48 rounded-tl-3xl bg-gradient-to-br to-transparent blur-sm" />
          <div className="from-primary/50 via-primary/20 absolute top-0 right-0 h-48 w-48 rounded-tr-3xl bg-gradient-to-bl to-transparent blur-sm" />
          <div className="from-primary/50 via-primary/20 absolute bottom-0 left-0 h-48 w-48 rounded-bl-3xl bg-gradient-to-tr to-transparent blur-sm" />
          <div className="from-primary/50 via-primary/20 absolute right-0 bottom-0 h-48 w-48 rounded-br-3xl bg-gradient-to-tl to-transparent blur-sm" />

          <div className="from-primary/10 to-primary/10 absolute inset-0 rounded-3xl bg-gradient-to-r via-transparent blur-xl" />
          <div className="from-primary/10 to-primary/10 absolute inset-0 rounded-3xl bg-gradient-to-b via-transparent blur-xl" />

          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-black/90 via-black/95 to-black/90 p-8 shadow-2xl backdrop-blur-md md:p-12">
            <div className="bg-primary/15 absolute top-1/4 left-1/4 h-32 w-32 animate-pulse rounded-full blur-3xl" />
            <div className="bg-primary/10 absolute right-1/4 bottom-1/4 h-40 w-40 animate-pulse rounded-full blur-3xl [animation-delay:1s]" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -120, scale: 0.5 }}
                animate={
                  isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -120, scale: 0.5 }
                }
                transition={{ 
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                  duration: 1.2, 
                  delay: 0.6, 
                  ease: "easeOut" 
                }}
                className="mb-16 text-center"
              >
                <h2 className="font-dystopian mb-2 text-2xl font-bold text-white uppercase md:text-4xl">
                  Event Starts In
                </h2>
                <motion.div
                  className="bg-primary mx-auto h-1 w-16 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 800,
                    damping: 30,
                    duration: 1, 
                    delay: 1.0, 
                    ease: "easeOut" 
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 150, scale: 0.8 }}
                animate={
                  isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 150, scale: 0.8 }
                }
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  duration: 1.5, 
                  delay: 0.8, 
                  ease: "easeOut" 
                }}
                className="grid grid-cols-4 gap-6"
                whileHover={{ scale: 1.02 }}
              >
                <CountdownItem
                  num={remaining.days}
                  text="days"
                  delay={0.8}
                  isInView={isInView}
                  bounce={true}
                />
                <CountdownItem
                  num={remaining.hours}
                  text="hours"
                  delay={1.0}
                  isInView={isInView}
                  bounce={true}
                />
                <CountdownItem
                  num={remaining.minutes}
                  text="minutes"
                  delay={1.2}
                  isInView={isInView}
                  bounce={true}
                />
                <CountdownItem
                  num={remaining.seconds}
                  text="seconds"
                  delay={1.4}
                  isInView={isInView}
                  bounce={true}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, scaleX: 1 }
                    : { opacity: 0, scaleX: 0 }
                }
                transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
                className="via-primary mx-auto mt-16 h-px w-full max-w-md bg-gradient-to-r from-transparent to-transparent"
              />
              
              {/* Welcome pulse effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: [0, 0.8, 0], scale: [0, 2, 4] } : { opacity: 0, scale: 0 }}
                transition={{ duration: 3, delay: 2, ease: "easeOut" }}
                className="bg-primary/20 pointer-events-none absolute inset-0 rounded-full blur-3xl"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const CountdownItem = ({
  num,
  text,
  delay,
  isInView,
  bounce = false,
}: {
  num: number;
  text: string;
  delay: number;
  isInView: boolean;
  bounce?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120, scale: 0.5, rotate: -15, rotateY: -45 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1.08, rotate: 0, rotateY: 0 }
          : { opacity: 0, y: 120, scale: 0.5, rotate: -15, rotateY: -45 }
      }
      transition={{
        type: "spring",
        stiffness: 900,
        damping: 18,
        mass: 0.7,
        delay,
      }}
      className="group relative"
    >
      <div className="from-primary/50 via-primary/20 to-primary/50 absolute inset-[-3px] animate-spin rounded-2xl bg-gradient-to-r p-[2px] opacity-0 transition-opacity duration-300 [animation-duration:8s] group-hover:opacity-100">
        <div className="h-full w-full rounded-2xl bg-black/80" />
      </div>

      <div className="from-primary/30 to-primary/30 absolute inset-[2px] animate-pulse rounded-2xl bg-gradient-to-r via-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />

      <div className="hover:border-primary/50 group-hover:shadow-primary/20 relative z-10 rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 p-5 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl md:p-8 overflow-hidden aspect-square flex flex-col justify-center">
        <div className="from-primary/10 absolute inset-0 rounded-2xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="border-primary/0 group-hover:border-primary/30 absolute inset-0 rounded-2xl border-2 transition-all duration-500 group-hover:animate-pulse" />

        <div className="relative z-10 text-center">
          <div className="relative flex h-16 items-center justify-center overflow-hidden md:h-20">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={num}
                initial={{
                  y: "100%",
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  y: "0%",
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  y: "-100%",
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  duration: 0.6,
                }}
                className="font-dystopian text-primary absolute inset-0 flex items-center justify-center text-xl font-bold drop-shadow-lg md:text-2xl lg:text-3xl"
              >
                {num.toString().padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className="font-amiga mt-1 block text-xs font-medium tracking-widest text-white/80 uppercase md:text-sm"
          >
            {text}
          </motion.span>
        </div>

        <div className="border-primary/50 group-hover:border-primary absolute top-2 left-2 h-4 w-4 border-t-2 border-l-2 transition-all duration-300 group-hover:top-1 group-hover:left-1 group-hover:h-6 group-hover:w-6" />
        <div className="border-primary/50 group-hover:border-primary absolute top-2 right-2 h-4 w-4 border-t-2 border-r-2 transition-all duration-300 group-hover:top-1 group-hover:right-1 group-hover:h-6 group-hover:w-6" />
        <div className="border-primary/50 group-hover:border-primary absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 transition-all duration-300 group-hover:bottom-1 group-hover:left-1 group-hover:h-6 group-hover:w-6" />
        <div className="border-primary/50 group-hover:border-primary absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 transition-all duration-300 group-hover:right-1 group-hover:bottom-1 group-hover:h-6 group-hover:w-6" />

        <div className="bg-primary absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="bg-primary absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 animate-pulse rounded-full opacity-0 transition-opacity duration-300 [animation-delay:150ms] group-hover:opacity-100" />
        <div className="bg-primary absolute top-1/2 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full opacity-0 transition-opacity duration-300 [animation-delay:300ms] group-hover:opacity-100" />
        <div className="bg-primary absolute top-1/2 right-0 h-2 w-2 translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full opacity-0 transition-opacity duration-300 [animation-delay:500ms] group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};

export default Counter;
