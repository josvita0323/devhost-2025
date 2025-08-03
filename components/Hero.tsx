import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="max-w-7xl px-4 mx-auto h-screen flex items-center  justify-center">
      <Image
        src="/logo.svg"
        alt="bg"
        width={400}
        height={300}
        priority
        className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px]"
      />
    </div>
  );
}
