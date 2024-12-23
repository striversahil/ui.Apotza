'use client'

import React from 'react'

import { components } from "@/constants/index"
import Navigation_button from './Button'

type Props = {}



const Sidebar = (props: Props) => {
  return (
    <div className='relative left-0 my-40 w-[250px] rounded-xl overflow-y-auto bg-slate-600'>
      <div className=' sticky top-0 w-full h-[75px] mb-10 bg-blue-400 text-bold text-2xl flex justify-center items-center'>Components <span className='bg-slate-400 rounded-full'>✨</span></div>
      <div className='flex flex-col gap-5 my-6'>
        {components.map((item , index) =>(
          <Navigation_button key={index} index={index} name={item.name} path={item.path} />
        ))}
      </div>
      
    </div>
  )
}

export default Sidebar