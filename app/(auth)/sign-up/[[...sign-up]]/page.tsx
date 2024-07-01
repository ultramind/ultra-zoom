import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='w-full h-screen flex justify-center items-center'>
        <SignUp/>
    </main>
  )
}

export default SignUpPage