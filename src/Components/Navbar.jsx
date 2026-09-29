import React, { useActionState, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useCart } from './Both';
import Button from './Button'



const Navbar = () => {

    const [showmenu, setShowMenu] = useState(false)
    const { cartItem, cart  } = useCart()

    const toggleMenu = () => {
        setShowMenu(!showmenu)
    }
    return (

        <header className='bg-white fixed top-0 right-0 left-0 z-50 shadow-lg'>
            <nav className='flex justify-between max-w-[1400px] xl:mx-auto mx-10 my-7 items-center px-2 '>
                <Link to='/' className='font-bold text-2xl'>
                    Gr<span className='uppercase bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent'>o</span>cify
                </Link>
                <ul className='lg:flex gap-x-20 font-semibold text-lg hidden '>
                    <li>
                        <Link to='/' className='focus:text-orange-400 '>Home</Link>

                    </li>
                    <li>
                        <Link to='/about' className='focus:text-orange-400 '>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='focus:text-orange-400'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/services' className='focus:text-orange-400'>Services</Link>
                    </li>
                </ul>
                {/* search input */}
                <div className='flex items-center gap-x-5'>
                    <div className=' md:flex border-2 rounded-full p-1 border-orange-500 hidden'>
                        <input type='text' placeholder='Search...' className='w-40 pl-4 outline-none' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-600 rounded-full h-9 w-9 flex justify-center items-center'>
                            <FaSearch />
                        </button>

                    </div>
                    {/* heart, shopping bag or toggle button */}
                    <div className='flex gap-x-5'>
                        <Link to='/heart' className='text-2xl'><IoHeart />
                            <span className="absolute  bg-red-500 text-white text-xs px-2 rounded-full">
                                {cartItem.length}
                            </span></Link>


                        <Link to='/addtocart' className='text-2xl'><FaShoppingCart />
                        <span className="absolute  bg-red-500 text-white text-xs px-2 rounded-full">
                                {cart.length}
                            </span></Link>

                        <Link to='/login'><Button content='Login'/></Link>
                        <a href='#' className='text-2xl text-zinc-800 lg:hidden' onClick={toggleMenu}>{showmenu ? <TbMenu3 /> : <TbMenu2 />}</a>
                    </div>
                </div>
                {/* mobile menu  */}
                <ul className={`flex flex-col absolute bg-orange-500/40  py-10 px-10 gap-x-20 backdrop-blur-xl font-semibold text-lg lg:hidden top-30  gap-y-8 rounded-xl text-center -left-full transform -translate-x-1/2 transition-all duration-500  ${showmenu ? 'left-1/2' : ""}`}>
                    <li>
                        <Link to='/' className='focus:text-orange-400 ' >Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className='focus:text-orange-400 '>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='focus:text-orange-400 '>Contact</Link>
                    </li>
                    <li>
                        <Link to='/services' className='focus:text-orange-400 '>Services</Link>
                    </li>
                    <li className=' flex border-2 rounded-full p-1 border-orange-500 lg:hidden'>
                        <input type='text' placeholder='Search...' className='w-40 pl-4 outline-none' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-600 rounded-full h-9 w-9 flex justify-center items-center'>
                            <FaSearch />
                        </button>

                    </li>
                </ul>

            </nav>

        </header>
    )
}

export default Navbar
