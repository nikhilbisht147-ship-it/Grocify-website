import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='bg-zinc-200 py-20 mt-20 '>
            <div className='max-w-[1400px] mx-auto px-10 gap-y-12 flex flex-wrap'>
                <div className='flex-1 basis-[300px]'>
                    <a href='#' className='font-bold text-2xl'>
                        Gr<span className='uppercase bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent'>o</span>cify
                    </a>
                    <p className='text-zinc-600 mt-6 max-w-[300px]'>
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>
                    <p className='mt-6 text-zinc-600'>
                        2025 &copy; all Rights Reserved
                    </p>
                </div>
                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800 hover:text-orange-500 '>About</a>
                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800 hover:text-orange-500 '>FAQ</a>
                    </li>
                </ul>
                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800 hover:text-orange-500 '>Support Center</a>
                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800 hover:text-orange-500 '>Feedback</a>
                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800 hover:text-orange-500 '>Contect Us</a>
                    </li>
                </ul>
                <div className='flex-1'>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
                    <p className='mt-6 text-zinc-600'>Questions or Feedback?<br />
                        We'd love to hear from you.
                    </p>

                    <div className='flex bg-white p-1 rounded-md mt-6 '>
                        <input type='email' name='email' placeholder='Email Address' autoComplete='off'className='h-[5vh] pl-4 flex-1 focus:outline-none'/>
                        <button className=' bg-gradient-to-b from-orange-400 to-orange-600 p-2 rounded-md text-white text-2xl cursor-pointer '>
                        <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
