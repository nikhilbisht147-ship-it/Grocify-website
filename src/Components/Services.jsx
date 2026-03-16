import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import img8 from '../assets/images/img8.png'

const Services = () => {
  return (
    <div>
      <section className="bg-[#f8f5f0] ">

        {/* Top Hero Section */}
        <div className="container  max-w-[1400px]  mx-auto px-6 py-6 grid relative md:grid-cols-2 gap-10 items-center mt-26 ">

          {/* Left Content */}
          <div className=''>
            <h2 className="text-5xl font-bold mb-4">
              Our <span className="text-yellow-600">Services</span>
            </h2>

            <p className="text-2xl font-bold text-zinc-600 mb-4">
              “Accurate, Reliable Bookkeeping that you can trust”
            </p>

            <p className="text-zinc-600 text-lg">
              Our goal is to give our customers the highest-quality
              bookkeeping, software support, tax and compliance services.
              Our goal is to give our customers the highest-quality
              bookkeeping, software support, tax and compliance services.
            </p>
          </div>

          {/* Right Image */}

          


          <div className=' pt-0  z-10'>
            <img
              src={img8}
              alt="services"
              className="h-120 w-140"
            />
          </div>

        </div>
        <div className='absolute bg-yellow-800 lg:w-230 lg:h-100 md:w-120 md:h-50 right-0  mt-26 rounded-lb-sm  [clip-path:polygon(0%_0%,100%_0%,100%_100%,100%_100%,100%_100%,0%_20%)] overflow-none h-50 top-0'></div>


        {/* Middle Heading */}
        <div className="text-center py-10 ">
          <h3 className="text-3xl font-bold">
            We Provide Awesome Services
          </h3>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            We are dedicated to providing top-quality bookkeeping
            and financial support services.
          </p>
        </div>


        {/* Service Cards */}
        <div className="bg-zinc-300 relative py-16">
          <div className="container mx-auto px-6 grid  sm:grid-cols-2 md:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:scale-105 transition ">
              <div className="bg-yellow-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                <MdOutlineMessage className="text-yellow-600 text-2xl" />
              </div>
              <h4 className="font-semibold">Bookkeeping</h4>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:scale-105 transition">
              <div className="bg-yellow-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                <MdOutlineMessage className="text-yellow-600 text-2xl" />
              </div>
              <h4 className="font-semibold">
                XERO / QuickBooks Software Support
              </h4>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:scale-105 transition">
              <div className="bg-yellow-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                <MdOutlineMessage className="text-yellow-600 text-2xl" />
              </div>
              <h4 className="font-semibold">Setup & Conversion</h4>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:scale-105 transition">
              <div className="bg-yellow-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                <MdOutlineMessage className="text-yellow-600 text-2xl" />
              </div>
              <h4 className="font-semibold">Tax & Compliance</h4>
            </div>

          </div>
        </div>

      </section>
    </div>
  )
}

export default Services
