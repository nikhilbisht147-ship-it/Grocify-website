import React from 'react'
import Heading from './Heading'
import Button from './Button'

const Login = () => {
  return (
    <div className='mt-26 max-w-[1400px] max-auto px-10'>
      <h1 className=' text-center text-3xl font-bold py-10'>Gr<span className='uppercase text-orange-500'>o</span>cify<span className='text-xl'>.in</span></h1>

      <div className='flex justify-center '>
      <div className='flex flex-col gap-y-4 shadow-2xl   h-105 w-85 py-5 px-5 rounded-xl'>
        <h1 className='text-2xl font-bold '>Login</h1>
        <div>
            <p className='text-lg'>Enter Your Mobile Number</p>
            <div className='border-1 h-8  rounded-sm  flex px-2'>
                <input type='text' className='focus: outline-none   w-full'/>
            </div>
        </div>

        <div>
            <p className='text-lg'>Password</p>
            <div className='border-1 h-8 rounded-sm flex px-2'>
                <input type='text' className='focus: outline-none w-full'/>
            </div>
        </div>

        <div>
            <p className='text-lg'>Re-enter Password</p>
            <div className='border-1 h-8 rounded-sm flex px-2'>
                <input type='text ' className='w-full focus:outline-none'/>
            </div>
        </div>
        <div className='flex justify-center'>
        <p className='text-lg cursor-pointer'>Forgot password?</p>
        </div>
        <Button content='Login'/>
        
      </div>
    </div>
      </div>
  )
}

export default Login
