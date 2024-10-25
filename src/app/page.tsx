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

  
  
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto '>


  <SectionTwo />
  <SectionTwo />
  <SectionTwo />
  <SectionTwo />

  </div>

  </div>
 
  <div className='w-full h-screen overflow-hidden '>
<StickyScroll/>

  </div>

<div className='w-full h-screen overflow-hidden'> 
<MovingCard/>
</div>

<div className='w-full h-screen overflow-hidden'>
<CardHover/>
</div>


<div className='w-full h-screen overflow-hidden'>
  
<WavyBackgrounddemo/>
</div>

<div className='w-full h-fit overflow-hidden'>
<Footter/>

</div>

    
      
      </>
  
)
}

export default home
