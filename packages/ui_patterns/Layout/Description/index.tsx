import React from 'react'

type Props = {
  prop : string
}

const Description = ({prop}: Props) => {
  return (
    <div className=' text-center py-10'>
      <span className='bg-white text-black px-4 py-2 rounded-full'>
          {prop}
      </span>
    
    </div>
  )
}

export default Description