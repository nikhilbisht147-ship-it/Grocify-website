import React from 'react'
import Heading from './Heading'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Customer1 from '../assets/images/Customer1.jpg'
import Customer2 from '../assets/images/Customer2.jpg'
import Customer3 from '../assets/images/Customer3.jpg'
import Customer4 from '../assets/images/Customer4.jpg'
import Customer5 from '../assets/images/Customer5.jpg'
import { FaStar } from 'react-icons/fa';


const Customer = () => {


    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10'>
                <Heading highlight='Customers' heading='Saying' />

                <div className=' flex justify-end py-5 mt-5 gap-x-3'>
                    <button className=' custom-prev text-2xl rounded-lg text-zinc-800 w-11 h-11 bg-zinc-200 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 cursor-pointer'>
                        <IoIosArrowBack />
                    </button>
                    <button className='custom-next text-2xl rounded-lg text-zinc-800 w-11 h-11 bg-zinc-200 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 cursor-pointer'>
                        <IoIosArrowForward />
                    </button>
                </div>


                <Swiper navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev"
                }} 
                loop={true}
                breakpoints={{
                    640: {slidesPerView: 1, spaceBetween: 20},
                    768: {slidesPerView: 2, spaceBetween: 20},
                    1024: {slidesPerView:3 , spaceBetween: 20}
                }}
                modules={[Navigation]} className="mySwiper">
                    {
                        review.map(item => {
                            return (
                                <SwiperSlide className='bg-zinc-200 rounded-lg p-8'>
                                    <div className='flex gap-5 items-center'>
                                        <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                                            <img src={item.image} className='w-full h-full'/>
                                        </div>
                                        <div>
                                            <h5 className='text-xl font-bold'>{item.name}</h5>
                                            <p className='text-zinc-600 '>{item.profession}</p>
                                            <span className='flex text-yellow-500 mt-2 text-xl gap-1'>
                                                {Array.from({length: item.rating}, (_, index)=>(
                                                    <FaStar/>
                                                ))}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='mt-10 min-h-[15vh]'>
                                        <p className=' text-zinc-600 text-base md:text-lg'>{item.para}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>



            </div>
        </section>
    )
}

export default Customer


const review = [
    {
        id: 1,
        name: 'Emily Johnson',
        profession: 'Food Blogger',
        rating: 3,
        para: 'Grocify has made grocery shopping so easy for me. The website is simple to use and the delivery is always on time. The quality of fruits and vegetables is excellent.',
        image: Customer1,
    },
    {
        id: 2,
        name: 'David Smith',
        profession: 'Chef',
        rating: 5,
        para: 'I really like the clean design of the website and how quickly I can find products. Prices are reasonable and the checkout process is very smooth.',
        image: Customer2,
    },
    {
        id: 3,
        name: 'Alya Zahra',
        profession: 'Modal',
        rating: 2,
        para: 'This is my go-to grocery website now. Fresh products, great discounts, and very reliable service. Highly recommended for anyone who wants hassle-free grocery shopping.',
        image: Customer3,
    },
    {
        id: 4,
        name: 'Carlos Mendes',
        profession: 'Fitness Coach',
        rating: 5,
        para: 'The product categories are well organized and the website loads fast. I especially like the wishlist and cart features which make shopping convenient.',
        image: Customer4,
    },
    {
        id: 5,
        name: 'Natcha Phongchai',
        profession: 'Nutritionist',
        rating: 4,
        para: '“Fantastic experience! Ordering groceries online has never been this simple. The interface is user-friendly and customer support is very helpful.',
        image: Customer5,
    },
]
