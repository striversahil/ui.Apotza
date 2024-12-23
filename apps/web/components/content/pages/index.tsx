import React from 'react'
import * as Pattern from '@repo/ui_patterns'

type Props = {
  title? : string
  component? : React.ReactNode
  path? : string
}

const Page = ({title , component , path}: Props) => {
  console.log(Pattern.Hello);
  
  return (
    <div className=' h-screen'>
      <div className='mt-[100px] w-full h-[75px] bg-blue-400 text-bold text-2xl flex justify-center items-center rounded-xl'>
        <div className='text-3xl font-bold uppercase'>
          {title}  
        </div>
      </div>
      <Pattern.Code />
    </div>
  )
}

export default Page