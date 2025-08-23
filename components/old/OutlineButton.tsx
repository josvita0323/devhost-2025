import React from "react";

export default function OutlineButton() {
  return (
    <div
      className="group bg-primary relative transition-all duration-300 ease-in-out"
      style={{
        clipPath:
          "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
      }}
    >
      <button
        className="text-primary font-orbitron m-[1px] flex cursor-pointer items-center gap-2 bg-black px-6 py-2 text-xs font-bold tracking-wider uppercase"
        style={{
          clipPath:
            "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
        }}
      >
        Know More
      </button>
    </div>
  );
}
