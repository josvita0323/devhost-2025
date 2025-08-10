import Image from "next/image";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

export function Events() {
  const content = [
    {
      title: "CTF (Capture The Flag)",
      description: (
        <>
          <span>
            Put your hacking skills to the test in a thrilling cybersecurity challenge.
          </span>
          <span>
            Participants solve puzzles, exploit vulnerabilities, and capture flags to score points.
          </span>
          <span>
            This is the ultimate competition for security enthusiasts looking to prove their skills.
          </span>
        </>
      ),
      imageSrc: "./logo.svg",
      imageAlt: "CTF Event",
    },
    {
      title: "PitchX",
      description: (
        <>
          <span>
            Present your innovative ideas and compete in a high-energy pitching competition.
          </span>
          <span>
            Sharpen your public speaking skills and convince judges with your vision.
          </span>
          <span>
            A perfect platform for startups, entrepreneurs, and dreamers.
          </span>
        </>
      ),
      imageSrc: "./sosc_logo.svg",
      imageAlt: "PitchX Event",
    },
    {
      title: "BGMI (Battlegrounds Mobile India)",
      description: (
        <>
          <span>
            Join the thrilling BGMI tournament and show off your mobile gaming skills.
          </span>
          <span>
            Compete in intense matches and aim for the top spot on the leaderboard.
          </span>
          <span>Team up or play solo, the battlefield awaits!</span>
        </>
      ),
      imageSrc: "./logo.svg",
      imageAlt: "BGMI Event",
    },
    {
      title: "Speed Typing",
      description: (
        <>
          <span>
            Test your typing speed and accuracy in this fast-paced competition.
          </span>
          <span>
            Compete against others to see who can type the fastest and most accurately.
          </span>
          <span>
            Improve your skills and claim the title of the fastest typist.
          </span>
        </>
      ),
      imageSrc: "./sosc_logo.svg",
      imageAlt: "Speed Typing Event",
    },
  ];

  const view = content.map((event) => ({
    ...event,
    description: (
      <>
        {React.Children.map(event.description.props.children, (child, i) => (
          <span key={i} className="inline">
            {child}
          </span>
        ))}
      </>
    ),
    content: (
      <div className="flex min-h-[80vh] w-full items-center justify-center bg-black p-2 text-white">
        <div className="relative aspect-square w-full max-w-xs sm:max-w-md">
          <Image
            src={event.imageSrc}
            alt={event.imageAlt}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    ),
  }));

  return (
    <div className="w-full bg-black text-cyan-400 px-4 sm:px-6 md:px-10">
      <h1 className="mt-24 mb-12 pb-4 text-center text-3xl text-white md:text-5xl max-w-4xl mx-auto leading-tight font-dystopian">
        DevHost Events
      </h1>

      <div className="max-w-7xl mx-auto">
        <StickyScroll content={view} />
      </div>
    </div>
  );
} 