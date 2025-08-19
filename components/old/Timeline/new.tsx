import React from "react";

export default function New() {
  return (
    <div
      className={`relative min-h-screen overflow-x-hidden bg-black text-[#a3ff12]`}
    >
      {/* Matrix rain background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="matrix-char absolute font-mono text-xs text-[#a3ff12] opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {String.fromCharCode(0x30a0 + Math.random() * 96)}
          </div>
        ))}
      </div>

      {/* Enhanced cyberpunk grid background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(#a3ff12 1px, transparent 1px),
            linear-gradient(90deg, #a3ff12 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Additional cyberpunk elements */}
      <div className="pointer-events-none fixed top-0 left-0 z-30 h-1 w-full animate-pulse bg-gradient-to-r from-transparent via-[#a3ff12] to-transparent opacity-30"></div>
    </div>
  );
}
