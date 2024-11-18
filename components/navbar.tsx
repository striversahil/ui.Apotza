import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='fixed h-4 top-0 w-full border-b-[1px] border-blue-300'>
        <div >
          <span className='font-jakarta font-bold text-[25px] pl-80'>It's Jakarta font !</span>
            {/* Navbar is awesome */}
        </div>
    </div>
  )
}

export default Navbar