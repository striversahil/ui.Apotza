import Navbar from '@/components/Navbar/navbar'
import React from 'react'
import HeroBanner from '@/components/HeroSection/index'

type Props = {}

const landingPage = (props: Props) => {
  console.log('landing page');
  
  return (
    <div className=''>
      <Navbar/>
      <HeroBanner/>
     <div className='h-screen'>console.log('landing page');</div>
     <div>console.log('landing page');</div>
     <div>console.log('landing page');</div>
     <div>console.log('landing page');</div>
     <div>console.log('landing page');</div>
     <div>console.log('landing page');</div>
     <div>console.log('landing page');</div>
     <div>console.log('landing page');</div>
     <div>console.log('landing page');</div>
     
     console.log('landing page')
     <button className=' cursor-pointer'>Hello</button>
    </div>
  )
}

export default landingPage