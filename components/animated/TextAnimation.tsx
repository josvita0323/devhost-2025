"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface DecryptTextProps {
  text: string;
  className?: string;
  flickerIntervalMs?: number;
  revealDelayMs?: number;
}

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>/?|";

const randChar = () =>
  DEFAULT_CHARSET[Math.floor(Math.random() * DEFAULT_CHARSET.length)];

export default function DecryptText({
  text,
  className = "",
  flickerIntervalMs = 50,
  revealDelayMs = 90,
}: DecryptTextProps) {
  const [displayText, setDisplayText] = useState(text); // ✅ match SSR output
  const [inView, setInView] = useState(false);

  const revealedRef = useRef<boolean[]>(
    Array.from({ length: text.length }, (_, i) => text[i] === " "),
  );
  const flickerRef = useRef<number | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const stoppedRef = useRef(false);

  useEffect(() => {
    if (!inView) return;
    stoppedRef.current = false;

    // Start with flickering random characters (client-side only)
    setDisplayText(
      text
        .split("")
        .map((ch) => (ch === " " ? " " : randChar()))
        .join(""),
    );

    // Flicker loop
    flickerRef.current = window.setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((ch, i) =>
            revealedRef.current[i]
              ? text[i]
              : text[i] === " "
                ? " "
                : randChar(),
          )
          .join(""),
      );
    }, flickerIntervalMs);

    // Reveal characters one by one from end → start
    let i = text.length - 1;

    const revealStep = () => {
      if (stoppedRef.current) return;

      while (i >= 0 && text[i] === " ") {
        revealedRef.current[i] = true;
        i--;
      }
      if (i < 0) {
        if (flickerRef.current) {
          clearInterval(flickerRef.current);
          flickerRef.current = null;
        }
        return;
      }

      revealedRef.current[i] = true;
      setDisplayText((prev) => {
        const arr = prev.split("");
        arr[i] = text[i];
        return arr.join("");
      });

      i--;
      const tid = window.setTimeout(revealStep, revealDelayMs);
      timeoutsRef.current.push(tid);
    };

    const startTid = window.setTimeout(revealStep, revealDelayMs);
    timeoutsRef.current.push(startTid);

    return () => {
      stoppedRef.current = true;
      if (flickerRef.current) clearInterval(flickerRef.current);
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, [inView, text, flickerIntervalMs, revealDelayMs]);

  return (
    <motion.div
      className={`text-2xl md:text-4xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
      viewport={{ once: true }}
      onViewportEnter={() => setInView(true)}
    >
      {displayText}
    </motion.div>
  );
}
