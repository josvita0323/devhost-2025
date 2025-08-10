import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import AboutDevhost from "@/components/AboutDevhost";
import { Flame, MicVocal } from "lucide-react";
import { Events } from "@/components/Events";
import Image from "next/image";

export default function Home() {
  const markers = [
    {
      time: "09:30",
      icon: <MicVocal className="h-auto sm:w-8" />,
      title: "Masterclass",
      description: "Stuff",
    },
    {
      time: "09:30",
      icon: <Flame className="h-auto sm:w-8" />,
      title: "Masterclass",
      description: "Stuff",
    },
    {
      time: "09:15",
      icon: <Flame className="h-auto sm:w-8" />,
      title: "Masterclass",
      description: "Stuff",
    },
  ];
  return (
    <div>
      <Hero />
      <AboutDevhost />
      <Timeline startHour={8} endHour={18} markers={markers} />
      <Events />
    </div>
  );
}
