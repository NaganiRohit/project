"use client";
import { TypewriterEffectSmooth } from "@/app/Component/ui/typeEfect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Master",
    },
    {
      text: "The",
    },
    {
      text: "Art",
    },
    {
      text: "Of",
    },
    {
      text: "Music.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-auto  ">

      <TypewriterEffectSmooth words={words} />
    
    </div>
  );
}
