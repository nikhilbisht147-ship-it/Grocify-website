import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-zinc-200 py-14 sm:py-20 mt-16 sm:mt-20'>
            <div className='max-w-[1400px] mx-auto px-6 sm:px-10'>
                {/* Main Content Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12'>
                    
                    {/* Brand Col */}
                    <div className='flex flex-col justify-between'>
                        <div>
                            <a href='#' className='font-bold text-2xl tracking-tight inline-block'>
                                Gr<span className='uppercase bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent'>o</span>cify
                            </a>
                            <p className='text-zinc-600 mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed max-w-sm'>
                                Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className='flex items-center gap-3 mt-6'>
                            {[
                                { icon: <FaFacebookF size={14} />, link: '#' },
                                { icon: <FaInstagram size={14} />, link: '#' },
                                { icon: <FaTwitter size={14} />, link: '#' },
                                { icon: <FaLinkedinIn size={14} />, link: '#' }
                            ].map((social, index) => (
                                <a 
                                    key={index} 
                                    href={social.link} 
                                    className='w-9 h-9 rounded-full bg-white hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 hover:text-white text-zinc-700 flex items-center justify-center transition-all duration-200 shadow-sm'
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h5 className='text-zinc-800 text-xl sm:text-2xl font-bold'>Company</h5>
                        <ul className='mt-4 sm:mt-6 space-y-3.5 text-sm sm:text-base'>
                            <li>
                                <a href='#' className='text-zinc-700 hover:text-orange-500 transition-colors inline-block'>About Us</a>
                            </li>
                            <li>
                                <a href='#' className='text-zinc-700 hover:text-orange-500 transition-colors inline-block'>FAQ</a>
                            </li>
                            <li>
                                <a href='#' className='text-zinc-700 hover:text-orange-500 transition-colors inline-block'>Our Process</a>
                            </li>
                            <li>
                                <a href='#' className='text-zinc-700 hover:text-orange-500 transition-colors inline-block'>Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h5 className='text-zinc-800 text-xl sm:text-2xl font-bold'>Support</h5>
                        <ul className='mt-4 sm:mt-6 space-y-3.5 text-sm sm:text-base'>
                            <li>
                                <a href='#' className='text-zinc-700 hover:text-orange-500 transition-colors inline-block'>Support Center</a>
                            </li>
                            <li>
                                <a href='#' className='text-zinc-700 hover:text-orange-500 transition-colors inline-block'>Feedback</a>
                            </li>
                            <li>
                                <a href='#' className='text-zinc-700 hover:text-orange-500 transition-colors inline-block'>Contact Us</a>
                            </li>
                            <li>
                                <a href='#' className='text-zinc-700 hover:text-orange-500 transition-colors inline-block'>Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Stay Connected */}
                    <div>
                        <h5 className='text-zinc-800 text-xl sm:text-2xl font-bold'>Stay Connected</h5>
                        <p className='mt-4 sm:mt-6 text-zinc-600 text-sm sm:text-base leading-relaxed'>
                            Questions or Feedback?<br />
                            We'd love to hear from you.
                        </p>

                        <form onSubmit={(e) => e.preventDefault()} className='flex items-center bg-white p-1.5 rounded-lg mt-5 shadow-sm border border-zinc-300/60 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all'>
                            <input 
                                type='email' 
                                name='email' 
                                placeholder='Email Address' 
                                autoComplete='off'
                                className='h-10 pl-3 flex-1 text-sm sm:text-base text-zinc-800 placeholder:text-zinc-400 focus:outline-none bg-transparent min-w-0'
                                required
                            />
                            <button 
                                type='submit'
                                className='bg-gradient-to-b from-orange-400 to-orange-600 p-2.5 rounded-md text-white text-xl cursor-pointer hover:scale-105 active:scale-95 transition-all shrink-0'
                            >
                                <IoIosArrowForward />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Divider & Copyright */}
                <div className='border-t border-zinc-300 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-zinc-600'>
                    <p>
                        © 2026 Grocify. All rights reserved.
                    </p>
                    <p className='text-zinc-500'>
                        Freshness guaranteed every day.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer