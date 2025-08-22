"use client";

import React from "react";
import { MapPin } from "lucide-react";

const Map = () => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* neon grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3ff12_1px,transparent_1px),linear-gradient(to_bottom,#a3ff12_1px,transparent_1px)] bg-[size:90px_90px] opacity-10 pointer-events-none" />

      {/* cuts - top */}
      <div className="absolute -top-20 left-0 w-full h-40 sm:h-48 bg-gradient-to-b from-black via-[#a3ff12]/10 to-transparent skew-y-3" />
      <div className="absolute -top-10 right-0 w-full h-20 sm:h-24 bg-[#a3ff12]/10 -skew-y-3" />

      {/* cuts - bottom */}
      <div className="absolute -bottom-20 left-0 w-full h-40 sm:h-48 bg-gradient-to-t from-black via-[#a3ff12]/10 to-transparent -skew-y-3" />
      <div className="absolute -bottom-10 right-0 w-full h-20 sm:h-24 bg-[#a3ff12]/10 skew-y-3" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 items-center py-12">
    
        <div className="space-y-6 md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-[#a3ff12] drop-shadow-[0_0_10px_#a3ff12aa]">
              Location
            </span>
          </h2>

          <h3 className="flex items-center justify-center md:justify-start gap-2 text-lg sm:text-xl md:text-2xl font-semibold text-gray-200">
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#a3ff12] animate-bounce" />
            Sahyadri College of Engineering And Management
          </h3>

          <p className="text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Looking to join the fun? You&apos;ll find us right here, where
            passion fuels lasting memories.
          </p>
        </div>

       
        <div className="relative md:col-span-3 w-full">
          <div className="bg-black rounded-xl sm:rounded-2xl border border-[#a3ff12]/40 shadow-[0_0_30px_#a3ff12aa] overflow-hidden transform -skew-y-2 hover:skew-y-0 transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.493800916483!2d74.92293479999999!3d12.866339399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba358ff28ef6cf3%3A0xe93953598f53c53c!2sSahyadri%20College%20of%20Engineering%20%26%20Management%20(Autonomous)!5e0!3m2!1sen!2sin!4v1635806988908!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl sm:rounded-2xl h-[250px] sm:h-[400px] md:h-[500px]"
            ></iframe>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#a3ff12]/15 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
