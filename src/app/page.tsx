import React from 'react'
import Homep from "@/app/Component/Home"
import SectionTwo from "@/app/Component/Baground-gradient"
import StickyScroll from './Component/Sticky-Scroll-reveal'
import MovingCard from './Component/Infinite-Moving-cards'
import CardHover from './Component/CardHoverEffect'
import WavyBackgrounddemo from './Component/Wavy-Background'
import Footter from './Component/ui/footter'
import Courses from './Courses/page'
function home() {


  return (
      <>
  <div  className='academy w-full h-screen overflow-hidden '>

  <Homep />
  </div>


  <div className=' bg-gray-900 w-full h-screen overflow-hidden flex justify-center items-center flex-row flex-wrap py-20 px-10 '>

  
  
  <SectionTwo />
  <SectionTwo />
  <SectionTwo />
  <SectionTwo />
  <SectionTwo />
  <SectionTwo />
  <SectionTwo />
  <SectionTwo />

  </div>
 
  <div className='w-full h-screen overflow-hidden '>
<StickyScroll/>

  </div>

<div className='w-full h-screen overflow-hidden'> 
<MovingCard/>
</div>

<CardHover/>
<WavyBackgrounddemo/>
<Footter/>

    
      
      </>
  
)
}

export default home
