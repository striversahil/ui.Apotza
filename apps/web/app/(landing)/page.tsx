import Navbar from '@/components/Landing/Navbar'
import React from 'react'
import HeroBanner from '@/components/Landing/HeroSection'
import Footer from "@/components/Landing/Footer"
import * as Components from "@repo/components"

type Props = {}

const landingPage = (props: Props) => {
  console.log('landing page');

  
  
  return (
    <div className=''>
      
      <Navbar/>
      <HeroBanner/>
        {/* <div className='h-screen'>console.log('landing page')
     </div> */}
     <Footer/>

    </div>
  )
}

export default landingPage