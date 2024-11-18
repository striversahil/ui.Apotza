import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

type Props = {}

const NavRedirect = 
    [
      {name : 'Home', url : '/home'},
      {name : 'Components', url : '/components'},
      {name : 'Service', url : '/service'},
      {name : 'About', url : '/about'},
    ]

const Navbar = (props: Props) => {
  return (
    // Main Container
  <div className="fixed top-2 w-full flex justify-center">
    <div className="relative w-full max-w-[1200px] h-20 border-[2px] border-green-600 bg-slate-800 rounded-xl flex justify-between">
      {/* Here is Logo */}
      <Link href="/">
        <div className='flex h-full justify-center gap-2 items-center overflow-hidden cursor-pointer ml-14'>
          <Image src="/apotzalogo.jpeg" alt="logo" width={20} height={20} className='rounded-md '/>
          <span className='font-jakarta font-extrabold text-xl '>Apotza </span><span className=''>Ui Kit</span>
        </div>
      </Link>
      {/* Here is seperate container forNavigation and Button Container */}
      <div className='items-center justify-center gap-5 hidden md:flex'>
        {/* Here is Navigation */}
        <div>
          <div className='flex gap-4 justify-around items-center'>
            {NavRedirect.map((item, index) => (
              <Link href={item.url} key={index}>
                <div className='font-jakarta font-medium text-lg text-white hover:text-green-600 cursor-pointer'>
                  {item.name}
                </div>  
              </Link>
            ))}
          </div>
        </div>
        {/* Here is Button */}
        <div className='mr-4'>
          <Link href="/components">
            <Button className='bg-blue-600 hover:bg-blue-600/70 rounded-full'>Get Started !</Button>
          </Link>
        </div>
      </div>
      <div className='md:hidden flex gap-2 px-4'>
            <Image src="/assets/next.svg" width={50} height={20} alt="menu"/>
      </div>

    </div>
  </div>


    
  )
}

export default Navbar