
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
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];








function CardHoverEffect() {
  return (
    <div className='w-full h-screen overflow-hidden bg-gray-950'>
     <div className='flex  w-full justify-center flex-wrap'>
     <h1 className='text-sky-500 pt-30 pt-20 pb-10 '>
        FEATURED WEBINARS
      </h1>
     </div>
<div className='flex justify-center max-w-28xl mx-auto px-10'>

<p className='  text-6xl font-bold '>
    Enhance your musical journey
   </p>

</div>


<div className="max-w-28xl mx-auto px-8 ">
      <HoverEffect items={projects} />
      
    </div>
  








    </div>
  )
}

export default CardHoverEffect
