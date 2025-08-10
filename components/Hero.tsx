import React from "react";
import { Spotlight } from "../components/ui/Spotlight";
import Logo from "./animated/Logo";

export default function Hero() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black/[0.96]">
      <Spotlight
        className="absolute top-0 left-1/2 -translate-x-1/2"
        fill="white"
      />

      <Logo className="relative z-10 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px]" />
    </div>
  );
}
