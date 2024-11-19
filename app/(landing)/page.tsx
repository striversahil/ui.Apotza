import Navbar from '@/components/Navbar/navbar'
import React from 'react'
import HeroBanner from '@/components/HeroSection/index'
import Footer from '@/components/Footer/index'

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