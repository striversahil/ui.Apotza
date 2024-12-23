'use client'
import Page from '@/components/content/pages'
import Sidebar from '@/components/content/Sidebar'
import Navbar from '@/components/Landing/Navbar'
import React, { useEffect, useState } from 'react'

type Props = {
  params: Promise<{ Comp_Id: string }>; // `params` is a Promise
};



export default function CompIdPage({ params }: Props) {
  const [ Comp_Id, setComp_Id ] = useState('')

  async function getProp () {
    const unwrappedParams = await params; 
    const { Comp_Id } = unwrappedParams
    setComp_Id(Comp_Id)
  }

  useEffect(() => {
    getProp()
  }, [])



  // const [text, setText] = useState('');


  
  return (
    <div>
      <Navbar />
      <div className='flex h-screen bg-gradient-to-tl from-blue-950 to-transparent'>
          <Sidebar/>
          
          <div className=' flex-grow'>
            <Page title={Comp_Id}/>
          </div>
      </div>
    </div>
  )
}
