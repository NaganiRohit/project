import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/Component/ui/3d-card";
import Link from "next/link";



function Courses() {
  return (
    <div className='p-10' >
      <div className='text-6xl flex justify-center mt-32 font-bold'> All Courses </div>

   <div className=' grid lg:grid-cols-2 md:grid-cols-1 flex-wrap   '>
   <CardContainer  className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Guitar:
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-lg max-w-sm mt-2 dark:text-neutral-300"
        >Guitar: A string instrument played with a pick or fingers. It’s popular in rock, pop, and jazz music.

        
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=600"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href=""
            target="__blank"
            className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
          >
            Explore
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
        Piano:
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
       A keyboard instrument with 88 keys. It’s used in both classical and modern music.
        
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=600"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href=""
            target="__blank"
            className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
          >
            Explore
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Violin: 
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
        

A small string instrument played with a bow. It plays a key role in classical music.

        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.pexels.com/photos/7095506/pexels-photo-7095506.jpeg?auto=compress&cs=tinysrgb&w=600"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href=""
            target="__blank"
            className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
          >
            Explore
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >Drums:
          
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
 A percussion instrument with various drums and cymbals. It’s used to provide rhythm in bands and orchestras.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.pexels.com/photos/1475021/pexels-photo-1475021.jpeg?auto=compress&cs=tinysrgb&w=600"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href=""
            target="__blank"
            className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
          >
            Explore
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
   </div>

    </div>
  )
}

export default Courses
