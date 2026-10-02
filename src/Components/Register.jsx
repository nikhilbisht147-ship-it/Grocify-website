import React, { useState } from 'react'
import Heading from './Heading'
import { Link } from 'react-router-dom'
import { FiUser, FiPhone, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className='min-h-[85vh] flex items-center justify-center py-12 md:py-20 px-4 sm:px-6'>
      <div className='w-full max-w-md mx-auto'>
        
        {/* Brand Heading using your Heading component style */}
        <div className='flex flex-col items-center mb-8'>
          <div className='w-fit text-center'>
            <Heading highlight='Create' heading='Account' />
          </div>
         
        </div>

        {/* Card Container */}
        <div className='bg-white rounded-2xl border border-orange-300/80 shadow-2xl shadow-orange-400 p-6 sm:p-9'>
          
          <form className='flex flex-col gap-y-4' onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name */}
            <div>
              <label className='block text-zinc-700 font-semibold text-sm mb-1.5'>
                Full Name
              </label>
              <div className='flex items-center gap-x-3 px-3.5 h-11 border border-zinc-300 rounded-lg focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all'>
                <FiUser className='text-zinc-400 text-lg shrink-0' />
                <input 
                  type='text' 
                  placeholder='Enter your full name' 
                  className='w-full text-zinc-800 placeholder:text-zinc-400 focus:outline-none text-sm'
                  required
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label className='block text-zinc-700 font-semibold text-sm mb-1.5'>
                Mobile Number
              </label>
              <div className='flex items-center gap-x-3 px-3.5 h-11 border border-zinc-300 rounded-lg focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all'>
                <FiPhone className='text-zinc-400 text-lg shrink-0' />
                <input 
                  type='tel' 
                  placeholder='Enter your mobile number' 
                  className='w-full text-zinc-800 placeholder:text-zinc-400 focus:outline-none text-sm'
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className='block text-zinc-700 font-semibold text-sm mb-1.5'>
                Password
              </label>
              <div className='flex items-center gap-x-3 px-3.5 h-11 border border-zinc-300 rounded-lg focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all'>
                <FiLock className='text-zinc-400 text-lg shrink-0' />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder='Create a password' 
                  className='w-full text-zinc-800 placeholder:text-zinc-400 focus:outline-none text-sm'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='text-zinc-400 hover:text-zinc-600 focus:outline-none'
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className='block text-zinc-700 font-semibold text-sm mb-1.5'>
                Confirm Password
              </label>
              <div className='flex items-center gap-x-3 px-3.5 h-11 border border-zinc-300 rounded-lg focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all'>
                <FiLock className='text-zinc-400 text-lg shrink-0' />
                <input 
                  type={showConfirmPassword ? 'text' : 'password'} 
                  placeholder='Re-enter your password' 
                  className='w-full text-zinc-800 placeholder:text-zinc-400 focus:outline-none text-sm'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='text-zinc-400 hover:text-zinc-600 focus:outline-none'
                >
                  {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms and conditions check */}
            <div className='flex items-start gap-2 pt-1'>
              <input 
                type='checkbox' 
                id='terms' 
                className='mt-1 accent-orange-500 rounded cursor-pointer' 
                required 
              />
              <label htmlFor='terms' className='text-xs text-zinc-500 leading-snug cursor-pointer'>
                I agree to the <span className='text-orange-500 hover:underline'>Terms & Conditions</span> and <span className='text-orange-500 hover:underline'>Privacy Policy</span>.
              </label>
            </div>

            {/* Grocify Signature Gradient Button */}
            <button 
              type='submit' 
              className='mt-2 w-full py-3 rounded-lg text-white font-semibold text-base bg-gradient-to-b from-orange-400 to-orange-600 hover:scale-[1.02] active:scale-[0.99] transition-all duration-150 cursor-pointer shadow-md shadow-orange-500/20'
            >
              Register Account
            </button>
          </form>

          {/* Switch to Login Link & Trust Badge */}
          <div className=' pt-5 border-t border-zinc-100 flex flex-col items-center gap-y-3'>
            <p className='text-sm text-zinc-600'>
              Already have an account?{' '}
              <Link to='/login' className='font-bold text-orange-500 hover:text-orange-600 cursor-pointer'>
                Login
              </Link>
            </p>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Register