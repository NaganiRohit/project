
"use client"
import React, { useState } from 'react'
import { HoverEffect } from "@/app/Component/ui/card-hover-effect";

export const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    }
  ];








function CardHoverEffect() {
  return (
    <div className='w-full h-full overflow-hidden bg-gray-950 mb-2'>
     <div className='flex  w-full justify-center flex-wrap'>
     <h1 className='text-sky-500 pt-30 pt-20 pb-10 text-xl'>
        FEATURED WEBINARS
      </h1>
     </div>
<div className='flex justify-center max-w-20xl mx-auto px-5'>

<p className='  text-2xl font-bold '>
    Enhance your musical journey
   </p>

</div>


<div className="w-auto h-auto mx-auto px-8  text-sm">
      <HoverEffect items={projects} />
      
    </div>
  








    </div>
  )
}

export default CardHoverEffect
