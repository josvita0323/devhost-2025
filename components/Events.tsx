import Image from "next/image";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

export function Events() {
  const content = [
    {
      title: "CTF (Capture The Flag)",
      description: (
        <>
          <span>
            Put your hacking skills to the test in a thrilling cybersecurity
            challenge.
          </span>
          <span>
            Participants solve puzzles, exploit vulnerabilities, and capture
            flags to score points.
          </span>
          <span>
            This is the ultimate competition for security enthusiasts looking to
            prove their skills.
          </span>
        </>
      ),
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black p-4 text-white">
          <div className="relative aspect-square w-full max-w-md">
            <Image
              src="./logo.svg"
              alt="CTF Event"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      ),
    },
    {
      title: "PitchX",
      description: (
        <>
          <span>
            Present your innovative ideas and compete in a high-energy pitching
            competition.
          </span>
          <span>
            Sharpen your public speaking skills and convince judges with your
            vision.
          </span>
          <span>
            A perfect platform for startups, entrepreneurs, and dreamers.
          </span>
        </>
      ),
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black p-4 text-white">
          <div className="relative aspect-square w-full max-w-md">
            <Image
              src="./sosc_logo.svg"
              alt="PitchX Event"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      ),
    },
    {
      title: "BGMI (Battlegrounds Mobile India)",
      description: (
        <>
          <span>
            Join the thrilling BGMI tournament and show off your mobile gaming
            skills.
          </span>
          <span>
            Compete in intense matches and aim for the top spot on the
            leaderboard.
          </span>
          <span>Team up or play solo, the battlefield awaits!</span>
        </>
      ),
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black p-4 text-white">
          <div className="relative aspect-square w-full max-w-md">
            <Image
              src="./logo.svg"
              alt="BGMI Event"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      ),
    },
    {
      title: "Speed Typing",
      description: (
        <>
          <span>
            Test your typing speed and accuracy in this fast-paced competition.
          </span>
          <span>
            Compete against others to see who can type the fastest and most
            accurately.
          </span>
          <span>
            Improve your skills and claim the title of the fastest typist.
          </span>
        </>
      ),
      content: (
        <div className="flex h-full w-full items-center justify-center bg-black p-4 text-white">
          <div className="relative aspect-square w-full max-w-md">
            <Image
              src="./sosc_logo.svg"
              alt="Speed Typing Event"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-cyan-400">
      <h1 className="mt-24 mb-12 pb-4 text-center text-3xl font-bold text-white md:text-5xl">
        DevHost Events
      </h1>

      <StickyScroll content={content} />
    </div>
  );
}
