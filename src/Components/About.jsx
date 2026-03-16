import React from 'react'
import { MdSlowMotionVideo } from "react-icons/md";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoHeartCircleOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { GiFruitBowl } from "react-icons/gi";
import img3 from '../assets/images/img3.png'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.avif'
import img16 from '../assets/images/img16.png'
import { TbWorldHeart } from "react-icons/tb";




const About = () => {

  return (
    // banner
    <div className=' mt-26'>
      <div className='  shadow-lg'>
        <div className=' xl:h-[50vh] h-[55vh] max-w-[1400px] mx-auto flex '>
          <div>
            <h2 className='text-5xl  px-8 py-4  font-bold pt-15' ><span className='text-zinc-800'>About</span> <span className='text-orange-500'>Us</span></h2>
            <p className='px-8 w-full text-zinc-600  text-lg'>Welcome to Grocify, where grocery shopping becomes smarter and easier. Our mission is to provide fresh products, affordable prices, and a seamless shopping experience so customers can find everything they need in one convenient place.</p>

            <div className='flex '>
              <button className='flex border-1 mx-8  mt-5 py-2 px-3 hover:scale-105 cursor-pointer transition-all duration-70  z-10 rounded-md border-orange-400 justify-center items-center gap-2 font-semibold'>
                Make a ride <MdSlowMotionVideo className='text-xl' />
              </button>
              <Link to='/contact' className=' flex justify-center items-center hover:scale-105 z-10 py-1 text-white px-8  bg-orange-500 mt-5 rounded-md font-semibold cursor-pointer transition-all duration-70 '>
                Let's Talk
              </Link>
            </div>
          </div>
          <div className='md:h-300 md:w-300 h-0 w-0 '>
            <img src={img16} className=' h-102 w-120  hidden md:block object-contain' />
          </div>

        </div>
      </div>


      {/* our story */}

      <div className="relative max-w-[1400px] mx-auto py-20 ">

        {/* Background Text */}
        <h1 className="absolute left-5 top-1/2 -translate-y-1/2 
  text-[50px] sm:text-[70px] md:text-[70px] lg:text-[70px]
  font-bold text-gray-300 opacity-40 pointer-events-none">
          INTRODUCTION
        </h1>

        {/* Title */}
        <div className="relative z-10 flex items-center gap-4">

          <div className="w-[4px] h-20 ml-10  bg-orange-500"></div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
            Our Story
          </h2>

        </div>

      </div>

      {/* Main */}

      <div className='max-w-[1400px] mx-auto px-10  pt-15 grid lg:grid-cols-2 grid-cols-1'>
        <div>
          <div ><h5 className='text-2xl font-bold mb-3 text-orange-500 '>Grocify.in info</h5>
            <p className='mb-10 bg-zinc-200 p-4 text-lg text-zinc-600 rounded-lg'>Grocify is an online grocery platform created to make everyday shopping simple, fast, and convenient. Our goal is to help customers find fresh groceries, daily essentials, and household products in one place without the hassle of visiting multiple stores. With an easy-to-use interface and carefully selected products, Grocify ensures a smooth shopping experience for everyone.</p>
          </div>

          <div>
            <h5 className='text-2xl font-bold mb-3 text-orange-500 '>Our Mission</h5>
            <p className='mb-10 bg-zinc-200 text-lg p-4 text-zinc-600 rounded-lg'>At Grocify, our mission is to provide high-quality groceries at affordable prices while saving our customers valuable time. We believe grocery shopping should be easy and accessible for everyone. By combining technology with reliable service, we aim to deliver freshness, convenience, and satisfaction with every order.</p>
          </div>

          <div>
            <h5 className='text-2xl font-bold mb-3 text-orange-500 '>What We Offer</h5>
            <p className='mb-10 bg-zinc-200 text-lg p-4 text-zinc-600 rounded-lg'>At Grocify, our mission is to provide high-quality groceries at affordable prices while saving our customers valuable time. We believe grocery shopping should be easy and accessible for everyone. By combining technology with reliable service, we aim to deliver freshness, convenience, and satisfaction with every order.</p>
          </div>

          <Link to='/contact' className=' flex justify-center items-center gap-x-1 w-fit bg-gradient-to-b from-orange-400 to-orange-600 text-lg text-md text-white px-3 py-1 rounded-md hover:scale-105 transition-all duration-70 cursor-pointer'>
            Contact Us <IoArrowForwardCircleOutline className='text-2xl' />
          </Link>
        </div>


        <div className='  flex lg:flex-col md:flex-row flex-col  gap-y-10 gap-x-10 lg:mt-0 mt-10 justify-center items-center '>
          <img src={img5} className=' object-contain rounded-xl  h-90 w-90  ' />
          <img src={img6} className='object-contain rounded-xl  h-90 w-90 ' />
        </div>
      </div>

      {/* why us */}

      <div className='   max-w-[1400px] mx-auto px-10 pt-15'>

        <div className=' grid lg:grid-cols-2 grid-cols-1 gap-y-10 gap-x-10 justify-center items-center'>
          <div className='  left-0 w-[100%]'>
            <div className='flex items-center relative '>
              <div className='bg-orange-400 h-1 w-15 transform rotate-90'></div>
              <h1 className='text-6xl font-bold text-zinc-300'>IMPORTANCE </h1>
              <h6 className='text-3xl font-bold left-15 text-orange-500 absolute'>Why Us</h6>
            </div>

            <p className='  mt-15 text-lg text-zinc-600 bg-zinc-200 p-4 rounded-lg '>We focus on quality, reliability, and customer satisfaction. Grocify provides a clean and simple shopping experience where users can easily explore products, manage their cart, and place orders smoothly. Our platform is built to make grocery shopping more efficient and enjoyable. We aim to bring fresh groceries and daily essentials closer to our customers through a convenient and user-friendly platform. With Grocify, shopping becomes faster, easier, and more reliable for everyone.
            </p>
          </div>

          <div>
            <img src={img3} className='h-90 w-150 object-contain' />
          </div>
        </div>


        <div className="bg-zinc-200  rounded-lg mt-20 py-16">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2">

            {/* Box 1 */}
            <div className="p-10 border-b-2 md:border-r-2 border-orange-500 text-center">
              <GiFruitBowl className="text-3xl mx-auto mb-2" />
              <h2 className="text-orange-500 text-2xl font-semibold mb-3">Quality</h2>
              <p className="text-zinc-600 text-lg">
                We provide fresh and high-quality groceries carefully selected to
                meet your daily needs. Our goal is to ensure customers always
                receive reliable and healthy products.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-10 border-b-2 border-orange-500 text-center">
              <IoHeartCircleOutline className="text-3xl mx-auto mb-2" />
              <h2 className="text-orange-500 text-2xl font-semibold mb-3">Passion</h2>
              <p className="text-zinc-600 text-lg">
                At Grocify, we are passionate about making grocery shopping easier
                and more convenient through a smooth and user-friendly experience.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-10 md:border-r-2 md:border-b-0 border-b-2 border-orange-500 text-center">
              <TbWorldHeart className="text-3xl mx-auto mb-2" />
              <h2 className="text-orange-500 text-2xl font-semibold mb-3">Integrity</h2>
              <p className="text-zinc-600 text-lg">
                We believe in honesty, transparency, and building trust with our
                customers by delivering quality service every time they shop.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-10 text-center">
              <IoMdSettings className="text-3xl mx-auto mb-2" />
              <h2 className="text-orange-500 text-2xl font-semibold mb-3">Experience</h2>
              <p className="text-zinc-600 text-lg">
                Grocify is designed to provide a smooth shopping experience where
                users can easily explore products, manage carts, and order groceries
                without hassle.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

  )
}

export default About



