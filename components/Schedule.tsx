import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BrainCircuit,
  Bug,

  Gamepad2,
  Goal,
  Laptop2,
  Leaf,
  MicVocal,
  Monitor,
  PartyPopper,

  SquareCode,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const scheduleData = [
  {
    day: "7th Nov",
    events: [
      {
        icon: <Leaf />,
        title: "Inauguration",
        time: "10:00 am - 10:45 am",
        location: "",
        description: "",
        speaker: "",
        designation: "",
        type: "",
      },
      {
        icon: <MicVocal />,
        title: "Building a Thriving Career in a VUCA World",
        time: "11:00 am - 11:45 am",
        description: "How to navigate and grow in a volatile, uncertain, complex, and ambiguous world.",
        speaker: "Bheema Prakash Adkasthala",
        location:"Ground Floor Seminar Hall",
        designation: "Head of Service Delivery, Ericsson India",
        type: "Talk",
      },
      {
        icon: <MicVocal />,
        title: "Will the real AI job please stand up?",
        time: "12:00 pm - 12:45 pm",
        description: "Exploring the evolving landscape of AI jobs and future opportunities.",
        speaker: "Srikanth Shenoy",
        location:"Ground Floor Seminar Hall",
        designation: "Co-Founder, Coachbuddy.AI",
        type: "Talk",
      },
      {
        icon: <Wrench />,
        title: "Fundamentals of Image Processing and Computer Vision",
        time: "11:30 am - 1:00 pm",
        description: "Introduction to key techniques in image processing and computer vision.",
        speaker: "Pranav Durai",
        location:"First Floor Seminar Hall",
        designation: "Research Scholar, Stanford School of Medicine",
        type: "Workshop",
      },
      {
        icon: <Gamepad2 />,
        title: "Valorant Tournament",
        time: "11:00 am - 3:00 pm",
        location: "IS Lab",
        description: "",
        speaker: "",
        designation: "",
        type: "Competition",
      },
      {
        icon: <MicVocal />,
        title: "The Future of Computation",
        time: "2:00 pm - 2:30 pm",
        description: "How RISC-V is shaping the future of computational systems and innovation.",
        speaker: "Suhas Kudlur Viswanath",
        location:"Ground Floor Seminar Hall",
        designation: "Hardware Engineer, Arithmetic Labs",
        type: "Talk",
      },
      {
        icon: <MicVocal />,
        title: "Data Science: The Magic Behind the Metrics",
        time: "03:00 pm - 03:45 pm",
        location: "Ground Floor Seminar Hall",
        description: "",
        speaker: "Ester Raina Monterio",
        designation: "Data Scientist, Codecraft",
        type: "Talk",
      },
      {
        icon: <Wrench />,
        title: "MasterClass: Ethical Hacking 101: Unleash Your Inner Hacker",
        time: "2:00 pm - 4:00 pm",
        description: "A hands-on session on ethical hacking and cybersecurity fundamentals.",
        speaker: "Samrath Sudesh Acharya",
        location:"First Floor Seminar Hall",
        designation: "Cyber Security Analyst, KPMG India",
        type: "Workshop",
      },
    ],
  },
  {
    day: "8th Nov",
    events: [
      {
        icon: <SquareCode />,
        title: "CodeForge - Competitive Programming",
        time: "09:00 am - 10:45 am",
        location: "3rd Floor AI-ML Lab",
        description: "",
        speaker: "",
        designation: "",
        type: "Competition",
      },
      {
        icon: <Monitor />,
        title: "CSS Action - Web Design Challenge",
        time: "09:00 am - 10:30 am",
        location: "3rd Floor CS Lab",
        description: "",
        speaker: "",
        designation: "",
        type: "Competition",
      },
      {
        icon: <Goal />,
        title: "Bit Breaker - Capture the Flag",
        time: "10:30 am - 12:00 pm",
        location: "3rd Floor AI-ML Lab",
        description: "",
        speaker: "",
        designation: "",
        type: "Competition",
      },
      // {
      //   icon: <Monitor />,
      //   title: "Sightless Syntax-Blind Coding",
      //   time: "12:00 pm - 01:30 pm",
      //   location: "Computer Lab",
      //   description: "",
      //   speaker: "",
      //   designation: "",
      //   type: "Competition",
      // },
      {
        icon: <BrainCircuit />,
        title: "PitchX - Tech Pitch",
        time: "11:30 am - 1:30 pm",
        location: "First Floor Seminar Hall",
        description: "",
        speaker: "",
        designation: "",
        type: "Competition",
      },
      {
        icon: <Gamepad2 />,
        title: "BGMI Tournament",
        time: "02:00 pm - 4:00 pm",
        location: "Fifth Floor CAD Lab",
        description: "",
        speaker: "",
        designation: "",
        type: "Competition",
      },
      {
        icon: <Bug />,
        title: "Pre-Hackathon Talk",
        time: "02:00 pm",
        location: "Ground Floor Seminar Hall",
        description: "",
        speaker: "",
        designation: "",
        type: "Hackathon",
      },
      {
        icon: <Bug />,
        title: "Hacknight Kick-off",
        time: "02:30 pm",
        location: "Skill Lab",
        description: "",
        speaker: "",
        designation: "",
        type: "Hackathon",
      },
    ],
  },
  {
    day: "9th Nov",
    events: [
      {
        icon: <BrainCircuit />,
        title: "Hackathon Judging",
        time: "10:30 am - 1:30 pm",
        location: "",
        description: "",
        speaker: "",
        designation: "",
        type: "Judging",
      },
      {
        icon: <Laptop2 />,
        title: "Final Presentation",
        time: "02:00 pm",
        location: "Seminar Hall",
        description: "",
        speaker: "",
        designation: "",
        type: "Presentation",
      },
      {
        icon: <PartyPopper />,
        title: "Valedictory Ceremony & Awards",
        time: "04:00 pm",
        location: "Seminar Hall",
        description: "",
        speaker: "",
        designation: "",
        type: "Ceremony",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="overflow-hidden pt-16 md:pt-20 pb-16 md:pb-20">
      <h1 className="select-none text-center text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 md:pb-6 lg:pb-10">
        Schedule
      </h1>
      <div className="mx-auto max-w-7xl px-3 md:px-5">
        <Tabs defaultValue="7th Nov" className="w-full">
          <div className="flex justify-center items-center overflow-x-auto pb-2 md:pb-0">
            <TabsList className="h-auto flex-wrap justify-center">
              {scheduleData.map((day) => (
                <TabsTrigger 
                  key={day.day} 
                  value={day.day}
                  className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base whitespace-nowrap"
                >
                  {day.day.charAt(0).toUpperCase() + day.day.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {scheduleData.map((day) => (
            <TabsContent 
              key={day.day} 
              value={day.day} 
              className="pt-6 md:pt-10"
            >
              <div className="max-w-2xl mx-auto px-2 md:px-0">
                <ol className="relative border-s border-primary">
                  {day.events.map((event, index) => (
                    <li key={index} className="mb-8 md:mb-10 ms-6 md:ms-10">
                      <span className="absolute flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-background rounded-full -start-4 md:-start-5 ring-4 md:ring-8 ring-background">
                        {event.icon}
                      </span>
                      <div className="flex flex-wrap gap-2 mb-1 md:mb-2 items-center text-base md:text-lg lg:text-xl tracking-wide md:tracking-wider font-semibold">
                        <span className="break-words">
                          {event.title}{" "}
                          {event.type && (
                            <Badge className="ml-0 mt-1 md:ml-2 md:mt-0 text-xs md:text-sm">
                              {event.type}
                            </Badge>
                          )}
                        </span>
                      </div>
                      <div className="mb-1 md:mb-2 text-primary text-sm md:text-base tracking-wide md:tracking-wider break-words">
                        {event.speaker}
                        {event.designation && (
                          <div className="text-xs md:text-sm text-white/70">
                            {event.designation}
                          </div>
                        )}
                      </div>
                      <time className="block mb-1 md:mb-2 text-sm md:text-base font-normal leading-none text-white/60">
                      {event.time}
                      </time>
                      {event.location && (
                        <div className="mt-2 text-sm md:text-base font-normal text-white/70">
                          {event.location}
                        </div>
                      )}
                      <p className="text-sm md:text-base font-normal text-white/85">
                        {event.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Schedule;
