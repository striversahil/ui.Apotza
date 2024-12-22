'use client'

import React from 'react'

import { components } from '@/constants/components'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='relative left-0 top-[200px] h-[700px] w-[250px] rounded-xl overflow-y-auto bg-slate-600'>
      <div className=' sticky top-0 w-full h-[75px] mb-10 bg-blue-400 text-bold text-2xl flex justify-center items-center'>Components <span className='bg-slate-400 rounded-full'>✨</span></div>
      <div className='flex flex-col gap-5 my-6'>
        {components.map((item , index) =>(
          <Button key={index} className=' mx-5 rounded-full bg-slate-400 hover:bg-slate-400/70 font-bold uppercase' onClick={() => redirect(item.path)}>{item.name}</Button>
        ))}
      </div>
      
    </div>
  )
}

export default Sidebar