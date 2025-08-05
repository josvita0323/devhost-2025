import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="mx-auto flex h-screen max-w-7xl items-center justify-center px-4">
      <Image
        src="/logo.svg"
        alt="bg"
        width={400}
        height={300}
        priority
        className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px]"
      />
    </div>
  );
}
