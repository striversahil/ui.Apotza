import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'


const Brand = () => {
  return (
    <div className='relative top-5 w-fit h-full'>
        <div className='absolute w-full h-full bg-transparent backdrop-blur-[0.7px]'></div>
        <Image src={'/icons/Frame.svg'} width={1000} height={1000} alt={'Frame'}/>
    </div>
  )
}

export default Brand