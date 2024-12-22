import React from 'react'

type Props = {
  title? : string
  component? : React.ReactNode
  path? : string
}

const Page = ({title , component , path}: Props) => {
  return (
    <div className=' h-screen bg-slate-400'>
      <div className='relative top-[100px] w-full h-[75px] bg-blue-400 text-bold text-2xl flex justify-center items-center '>
        <div className='text-3xl font-bold uppercase'>
          {title}  
        </div>
      </div>
    </div>
  )
}

export default Page