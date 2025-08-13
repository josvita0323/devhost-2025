import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import AboutDevhost from "@/components/AboutDevhost";
import { Flame, MicVocal } from "lucide-react";
import Counter from "@/components/Counter";

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
      <Counter />
      <Timeline startHour={8} endHour={18} markers={markers} />
      <div className="h-screen">Hello</div>
      <AboutDevhost/>
      <div className="h-screen">Hello</div>
    </div>
  );
}
