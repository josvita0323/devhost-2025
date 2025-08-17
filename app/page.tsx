// "use client";
// import Hero from "@/components/Hero";
// import Timeline from "@/components/Timeline";
// import AboutDevhost from "@/components/AboutDevhost";
// import { Flame, MicVocal } from "lucide-react";
// import AboutHackathon from "@/components/AboutHackathon";

// export default function Home() {
//   const markers = [
//     {
//       time: "09:30",
//       icon: <MicVocal className="h-auto sm:w-8" />,
//       title: "Masterclass",
//       description: "Stuff",
//     },
//     {
//       time: "09:30",
//       icon: <Flame className="h-auto sm:w-8" />,
//       title: "Masterclass",
//       description: "Stuff",
//     },
//     {
//       time: "09:15",
//       icon: <Flame className="h-auto sm:w-8" />,
//       title: "Masterclass",
//       description: "Stuff",
//     },
//   ];
//   return (
//     <div>
//       <Hero />
//       <Timeline startHour={8} endHour={18} markers={markers} />
//       <div className="h-screen">Hello</div>
//       <AboutDevhost/>
//       <AboutHackathon/>
//       <div className="h-screen">Hello</div>
//     </div>
//   );
// }

"use client";
import Hero from "@/components/Hero";
import AboutDevhost from "@/components/AboutDevhost";
import Counter from "@/components/Counter";
import TimelineSection from "@/components/TimeLine";
import Events from "@/components/Events";
{/*import { CommonEvents } from "@/components/CommonEvents";*/}

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />
      <Counter />
      <AboutDevhost />
      <TimelineSection />
      <Events /> 
    {/*  <CommonEvents /> */}
    </div>
  );
}
