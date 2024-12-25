import React from 'react'
import * as Pattern from '@repo/ui_patterns'

type Props = {
  title : string
  description : string
  src : React.ElementType
  usage : React.ElementType
  href : string
}

const Page = ({title , description , src , usage , href}: Props) => {
  
  return (
    <div className=' h-screen'>
      <div className='mt-[100px] w-full h-[75px] bg-blue-400 text-bold text-2xl flex justify-center items-center rounded-xl'>
        <div className='text-3xl font-bold uppercase'>
          {title}  
        </div>
      </div>
      <Pattern.Code title={title} description={description} src={src} usage={usage} href={href}/>
    </div>
  )
}

export default Page