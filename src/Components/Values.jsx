import React from 'react'
import Heading from './Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from '../assets/images/basket-full-vegetables.png'

const Values = () => {

    //  leftvalue var
    const leftvalue = value.slice(0, 2).map(item => {
        return (
            <div className='flex md:flex-row-reverse w-100 items-center gap-5 '>
                <div>
                    <span className='flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-600  w-10 h-10 rounded-full'>
                        {item.icon}
                    </span>
                </div>
                <div className='md:text-right'>
                    <h1 className='font-bold text-xl md:text-2xl text-zinc-800 '>{item.title}</h1>
                    <p className='text-zinc-600 text-base  md:text-lg'>{item.para}</p>

                </div>
            </div>
        )
    })

    // rightvalue var
    const rightvalue = value.slice(2, 4).map(item => {
        return (
            <div className=' flex w-100 items-center gap-5'>
                <div>
                    <span className='flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-600 w-10 h-10 rounded-full'>{item.icon}</span>
                </div>
                <div className=''>
                    <h1 className='font-bold text-xl md:text-2xl text-zinc-800 '>{item.title}</h1>
                    <p className='text-zinc-600 text-base md:text-lg'>{item.para}</p>

                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] md:mx-auto mx-10'>
                <Heading highlight='Our' heading='Values' />

                <div className='flex md:flex-row flex-col gap-10 md:gap:5 justify-evenly mt-10 md:mt-20'>
                    {/* leftvalue */}
                    <div className='md:min-h-100 flex gap-10 flex-col justify-between'>
                        {leftvalue}
                    </div>

                    {/* image */}
                    <div className='md:flex justify-center items-center w-100 hidden'>
                        <img src={Basket}/>
                    </div>

                    {/* rightvalue */}
                    <div className='md:min-h-100 gap-10 flex flex-col justify-between'>
                        {rightvalue}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values

const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'We build trust with our customers by delivering quality products and reliable service every day.',
        icon: <FaHeart />

    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'We follow strict food safety standards to ensure every product is safe, clean, and healthy.',
        icon: <FaLeaf />

    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'Our products are carefully selected and delivered quickly to guarantee freshness every time.',
        icon: <FaShieldAlt />

    },
    {
        id: 4,
        title: '100% Organic',
        para: 'We provide 100% organic products grown naturally without harmful chemicals or additives.',
        icon: <FaSeedling />

    }
]
