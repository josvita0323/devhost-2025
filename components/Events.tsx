import Image from "next/image";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

export function Events() {
  const content = [
    {
      title: "CTF (Capture The Flag)",
      description: (
        <>
          <p>Put your hacking skills to the test in a thrilling cybersecurity challenge.</p>
          <p>Participants solve puzzles, exploit vulnerabilities, and capture flags to score points.</p>
          <p>This is the ultimate competition for security enthusiasts looking to prove their skills.</p>
        </>
      ),
      content: (
        <div className="h-full w-full flex items-center justify-center bg-black text-white p-4">
          <div className="relative w-full max-w-md aspect-square">
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
          <p>Present your innovative ideas and compete in a high-energy pitching competition.</p>
          <p>Sharpen your public speaking skills and convince judges with your vision.</p>
          <p>A perfect platform for startups, entrepreneurs, and dreamers.</p>
        </>
      ),
      content: (
        <div className="h-full w-full flex items-center justify-center bg-black text-white p-4">
          <div className="relative w-full max-w-md aspect-square">
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
          <p>Join the thrilling BGMI tournament and show off your mobile gaming skills.</p>
          <p>Compete in intense matches and aim for the top spot on the leaderboard.</p>
          <p>Team up or play solo, the battlefield awaits!</p>
        </>
      ),
      content: (
        <div className="h-full w-full flex items-center justify-center bg-black text-white p-4">
          <div className="relative w-full max-w-md aspect-square">
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
          <p>Test your typing speed and accuracy in this fast-paced competition.</p>
          <p>Compete against others to see who can type the fastest and most accurately.</p>
          <p>Improve your skills and claim the title of the fastest typist.</p>
        </>
      ),
      content: (
        <div className="h-full w-full flex items-center justify-center bg-black text-white p-4">
          <div className="relative w-full max-w-md aspect-square">
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
    <div className="w-full bg-black text-cyan-400 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold pb-4 text-center text-white mt-24 mb-12">
       DevHost Events
      </h1>

      <StickyScroll content={content} />
    </div>
  );
}
