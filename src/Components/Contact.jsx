import React from 'react'
import img7 from '../assets/images/img7.png'
import { MdPhoneInTalk, MdPerson, MdEmail, MdOutlineMessage, MdOutlineEmail } from "react-icons/md";

const Contact = () => {

  return (
    <div className='max-w-[1400px] mx-auto '>

      <div className=' mt-26  '>
        <div className=' h-[50vh] relative md:shadow-xl '>
          <h2 className='text-5xl  px-8 py-4  font-bold pt-20' ><span className='text-zinc-800'>Contact</span> <span className='text-orange-500'>Us</span></h2>
          <p className="text-2xl font-bold text-zinc-600 px-8 py-4">
            “Accurate, Reliable Bookkeeping that you can trust”
          </p>
          <p className=' text-zinc-600 text-lg px-8 flex flex-wrap'>If you have any questions, suggestions, or need support, feel free to contact us.<br />Our team is always ready to assist you and will respond as soon as possible.</p>

          <div className='absolute bg-yellow-800 xl:w-80 xl:h-20 md:h-10 md:w-40 left-0  rounded-lb-sm  [clip-path:polygon(100%_100%,100%_100%,0%_100%,0%_0%,0%_0%,0%_0%)] overflow-none bottom-0  '></div>


          <div className='absolute top-2 right-0'>
            <img src={img7} className='xl:h-90 xl:w-200 lg:h-65 lg:w-120 h-0 w-0 mt-0 object-fill' />
          </div>

        </div>
      </div>


      <div className='max-w-[1400px] mx-auto px-10 pt-30'>
        {/* grid 1 */}
        <div className=' grid lg:grid-cols-2 grid-cols-1 gap-y-20 xl:gap-x-40 gap-x-20'>
          <div className='flex flex-col gap-y-7'>
            <h1 className='text-3xl text-zinc-800 font-bold'>Get your Instant free<br />Quote Now</h1>
            <h6 className='text-xl text-zinc-700 font-bold'>Connect with us instentelly</h6>
            <p className='text-lg text-zinc-600' >We are always happy to hear from our customers. If you have any questions
              about our products, need assistance with an order, or want to share your
              feedback, feel free to reach out to us. Our team is committed to providing
              quick and helpful support to ensure you have the best experience.</p>
            <div className='flex  gap-x-2 items-center'>
              <span className='p-1 rounded-full text-xl bg-orange-500'><MdPhoneInTalk /></span><span className='text-xl font-semibold text-zinc-600'>08005554433</span>
            </div>
            <div className='flex items-center gap-x-2'>
              <span className='bg-orange-500 rounded-full p-1 text-xl '><MdOutlineEmail /></span><span className='text-xl font-semibold text-zinc-600'>@bussinessinfogmail.com</span>
            </div>
          </div>
          <div>
            {/* grid 2 */}
            <div className="xl:h-100 xl:w-150 lg:w-100 flex flex-col gap-y-2 p-10  rounded-xl bg-gradient-to-r from-zinc-200 to-zinc-400">


              {/* Name */}
              <div className="flex items-center border-b border-gray-300 py-3">
                <MdPerson className=" text-xl mr-3" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full text-lg outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex items-center border-b border-gray-300 py-3 ">
                <MdPhoneInTalk className="text-xl mr-3 " />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full text-lg outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex items-center border-b border-gray-300 py-3">
                <MdEmail className="text-xl mr-3" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full text-lg outline-none"
                />
              </div>

              {/* Password */}
              <div className="flex items-center border-b border-gray-300 py-3">
                <MdOutlineMessage className="text-xl mr-3" />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full text-lg outline-none"
                />
              </div>

              {/* Button */}
              <button className="mt-6 w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-full  hover:scale-103 transition-all duration-70 cursor-pointer text-lg font-semibold">
                Submit
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Contact
