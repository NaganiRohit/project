"use client";
import React from "react";
import { Button } from "@/app/Component/ui/moving-border";

export default function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className=" bg-slate-900 text-neutral-200 text-[22px] border-none"
      >
        Explore Courses
      </Button>
    </div>
  );
}
