import React from 'react'

const images = [
  {
    id: 1,
    role: 'Sr. Software Engineer',
    src: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Apple Guy',
    logo: 'icons/apple.svg',
    company: 'Apple',
  },
  {
    id: 2,
    role: 'CTO',
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Google Guy',
    logo: 'icons/google.svg',
    company: 'Google',
  },
  {
    id: 3,
    role: 'Sr. Software Engineer',
    src: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Apple Guy',
    logo: 'icons/apple.svg',
    company: 'Apple',
  },
  {
    id: 4,
    role: 'CTO',
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Google Guy',
    logo: 'icons/google.svg',
    company: 'Google',
  },
  {
    id: 5,
    role: 'Sr. Software Engineer',
    src: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Apple Guy',
    logo: 'icons/apple.svg',
    company: 'Apple',
  },
  {
    id: 6,
    role: 'CTO',
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Google Guy',
    logo: 'icons/google.svg',
    company: 'Google',
  },
  {
    id: 7,
    role: 'Sr. Software Engineer',
    src: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Apple Guy',
    logo: 'icons/apple.svg',
    company: 'Apple',
  },
  {
    id: 8,
    role: 'CTO',
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Google Guy',
    logo: 'icons/google.svg',
    company: 'Google',
  },
  {
    id: 1,
    role: 'Sr. Software Engineer',
    src: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Apple Guy',
    logo: 'icons/apple.svg',
    company: 'Apple',
  },
  {
    id: 2,
    role: 'CTO',
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Google Guy',
    logo: 'icons/google.svg',
    company: 'Google',
  },
  {
    id: 3,
    role: 'Sr. Software Engineer',
    src: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Apple Guy',
    logo: 'icons/apple.svg',
    company: 'Apple',
  },
  {
    id: 4,
    role: 'CTO',
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Google Guy',
    logo: 'icons/google.svg',
    company: 'Google',
  },
  {
    id: 5,
    role: 'Sr. Software Engineer',
    src: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Apple Guy',
    logo: 'icons/apple.svg',
    company: 'Apple',
  },
  {
    id: 6,
    role: 'CTO',
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Google Guy',
    logo: 'icons/google.svg',
    company: 'Google',
  },
  {
    id: 7,
    role: 'Sr. Software Engineer',
    src: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Apple Guy',
    logo: 'icons/apple.svg',
    company: 'Apple',
  },
  {
    id: 8,
    role: 'CTO',
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Google Guy',
    logo: 'icons/google.svg',
    company: 'Google',
  },
]

const Image_corousel = () => {
  return (
    <div className='relative h-1/2 flex flex-col px-20 py-10 gap-5 '>
      {/* Testimonials */}
      <div className='flex justify-between'>
          <div className='flex flex-col gap-3'>
              <div className='bg-blue-200 rounded-full w-fit px-3 text-blue-800  '>Testimonials</div>
              <div className='font-bold text-2xl w-fit'>What Procaster's wanna Say!</div>
              <p className='text-zinc-400'>These Components are so Amazing that , we even get Dreams of these Components! 😁</p>
          </div>
          <div>Left Right</div>
      </div>
      {/* Image Corousel */}
      <div className='relative flex top-2 flex-wrap gap-5'>
          {images.map((item , index) => {
              return(
                <div className='relative h-96 w-60 bg-black border-2 border-blue-300 rounded-xl  overflow-clip ' key={index}>
                  <div>
                      <img className='' src={item.src} alt={item.alt} />
                      <div className='absolute bg-transparent backdrop-blur-sm px-3 bottom-0 w-full outline-white outli'>
                          <div className=' font-bold text-xl'>{item.role}</div>
                          <div className='text-sm font-light text-gray-300  '>{item.alt}</div>
                          <div className='font-bold '>{item.company}</div>
                      </div>  
                  </div>
                </div>
              )
          })}
      </div>
    </div>
  )
}

export default Image_corousel