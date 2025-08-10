"use client";
import React, { Fragment } from "react";
import { Spotlight } from "../components/ui/Spotlight";
import Logo from "./animated/Logo";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <Fragment>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-zinc-950">
        {/* <Spotlight
          className="absolute top-0 left-1/2 -translate-x-1/2"
          fill="white"
        /> */}

        <Logo className="relative z-10 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ ease: "circInOut", duration: 1, delay: 1.4 }}
        >
          <Image
            src={"/bg.svg"}
            priority
            fill
            alt="hi"
            className="z-10 w-full object-cover opacity-50"
          />
        </motion.div>
      </div>
      <div className="relative h-screen bg-gradient-to-b from-zinc-950 via-zinc-950/95 via-70% to-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ ease: "circInOut", duration: 1, delay: 1.4 }}
        >
          <Image
            src="/bg.svg"
            priority
            fill
            alt="Background"
            className="w-full scale-y-[-1] object-cover opacity-50"
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
      </div>
    </Fragment>
  );
}
