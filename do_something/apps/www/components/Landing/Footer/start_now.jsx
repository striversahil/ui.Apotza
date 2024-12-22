import React from 'react'
import { Button } from '@/components/ui/button'



const Start_now = () => {
  return (
    <div className='relative flex flex-col justify-center h-[500px] w-full bg-gradient-to-t from-blue-900 to-transparent gap-11'>
                <div className='text-orange-100 text-5xl text-center font-extrabold '>
                    Start Your Journey Now .  !
                </div>
                <div className='text-gray-400 text-center'>
                        Volutpat commodo sed egestas egestas fringilla phasellus. <br />Donec ac odio tempor orci dapibus ultrices. Ut lectus arcu bibendum at varius vel pharetra vel.
                </div>

                <div className='flex items-center justify-center gap-[25px]'>
                    <Button className='px-4 h-7  rounded-full border bg-white border-pink-500  cursor-pointer'>Learn More -\ </Button>
                    <Button className='px-4 h-7 bg-pink-300 rounded-full cursor-pointer'>Go Ahead </Button>
                </div>
    </div>  
  )
}

export default Start_now