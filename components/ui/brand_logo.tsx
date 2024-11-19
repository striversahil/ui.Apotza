import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Brand_logo = (props: Props) => {
  return (
    <Link href="/">
        <div className='flex justify-center gap-2 items-center overflow-hidden cursor-pointer ml-14'>
            <Image src="/apotzalogo.jpeg" alt="logo" width={20} height={20} className='rounded-md '/>
            <span className='font-jakarta font-extrabold text-2xl '>Apotza </span><span className='text-slate-200 animate-pulse'>UI KIT</span>
        </div>
    </Link>
  )
}

export default Brand_logo