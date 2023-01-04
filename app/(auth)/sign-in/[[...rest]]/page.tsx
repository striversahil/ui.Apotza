import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-screen"><SignIn/></div>
  )
}

export default page