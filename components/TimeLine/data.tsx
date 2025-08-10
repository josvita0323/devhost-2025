import { Flame, MicVocal } from "lucide-react";

export const markers = [
  {
    time: "09:30",
    displayTime: "9:30 AM - 10:15 AM",
    icon: <MicVocal className="h-auto sm:w-8" />,
    title: "Masterclass",
    description:
      "Deep dive into advanced React performance optimization techniques.",
    speaker: "Jane Doe",
    role: "Senior Frontend Engineer, TechCorp",
    venue: "Hall A",
  },
  {
    time: "09:30",
    displayTime: "10:15 AM - 11:00 AM",
    icon: <Flame className="h-auto sm:w-8" />,
    title: "Talk",
    description:
      "The future of AI in creative industries and how it's reshaping design.",
    speaker: "Rahul Mehta",
    role: "AI Researcher, OpenAI Labs",
    venue: "Main Auditorium",
  },
  {
    time: "11:30",
    displayTime: "11:00 AM - 11:30 AM",
    icon: <MicVocal className="h-auto sm:w-8" />,
    title: "Event",
    description: "Team networking session to connect developers and designers.",
    venue: "Networking Lounge",
  },
  {
    time: "11:30",
    displayTime: "11:30 AM - 12:45 PM",
    icon: <Flame className="h-auto sm:w-8" />,
    title: "Hackathon",
    description:
      "24-hour coding challenge to build solutions for climate change.",
    speaker: "Hackathon Team",
    role: "Event Organizers",
    venue: "Lab 3",
  },
  {
    time: "12:45",
    displayTime: "12:45 PM - 2:00 PM",
    icon: <MicVocal className="h-auto sm:w-8" />,
    title: "Talk",
    description:
      "Design systems and scalable UI architecture for enterprise apps.",
    speaker: "Aisha Khan",
    role: "Lead Product Designer, UIWorks",
    venue: "Hall B",
  },
  {
    time: "14:00",
    displayTime: "2:00 PM - 3:30 PM",
    icon: <Flame className="h-auto sm:w-8" />,
    title: "Masterclass",
    description: "Full-stack development with Next.js and edge functions.",
    speaker: "Michael Tan",
    role: "Full-Stack Engineer, DevSphere",
    venue: "Workshop Room 2",
  },
  {
    time: "15:30",
    displayTime: "3:30 PM - 4:45 PM",
    icon: <MicVocal className="h-auto sm:w-8" />,
    title: "Event",
    description: "Product showcase of innovative student projects.",
    venue: "Exhibition Hall",
  },
  {
    time: "16:45",
    displayTime: "4:45 PM - 6:00 PM",
    icon: <Flame className="h-auto sm:w-8" />,
    title: "Hackathon",
    description: "Final presentations and judging session.",
    venue: "Main Auditorium",
  },
];
