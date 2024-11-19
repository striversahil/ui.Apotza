import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Tech_Giants = [
    {
      company : 'Apple',
      logo : '/icons/apple.svg',
      'href' : 'https://www.apple.com/'
    },
    {
      company : 'Google',
      logo : '/icons/google.svg',
      'href' : 'https://www.google.com/'
    },
   ]

const Text = ( ) => {
  return (
    <div className='relative top-5 h-1/2 flex flex-col gap-5 justify-center items-center z-10'>
        <div className='bg-blue-500 rounded-full px-3 text-gray-200 font-bold '>Components for Lazy Gen-Z's 🙂‍↔️</div>
        <h1 className='flex flex-col items-center'> 
          <span className='font-bold text-[50px]'>Make Your App Stand Out</span>
          <span className='font text-[50px]'>from Crowd.</span></h1>
        <div>
          <span className='text-gray-300'>These Components Will Put Your Web-App to Sky-Rocket and So Integrate It right now it just <span className='text-green-500 bg-slate-600 rounded-full px-2'>Copy Paste</span> Components</span>
        </div>
        <div className='flex gap-5'>
          {Tech_Giants.map((item , index) => {
            return (
              <div key={index}>
                <Link href={item.href} target='blank'>                
                  <div className='flex gap-2 bg-black rounded-xl shadow-md shadow-blue-300 p-2 hover:translate-y-[-5px] hover:duration-300 duration-300 cursor-pointer'>
                    <Image src={item.logo} alt={item.company} width={50} height={50}/> 
                    <div className='flex flex-col'>
                      <div>{item.company}</div>
                      <div className='text-gray-400'>Available on {item.company}</div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        
      </div>
  )
}

export default Text