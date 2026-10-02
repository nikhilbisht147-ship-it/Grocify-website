import React from 'react'
import Heading from './Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {

    const renderSteps = steps.map(item => {
        return (
            <div 
                key={item.id} 
                className={`w-full sm:w-[calc(50%-2rem)] xl:w-auto xl:flex-1 ${item.id % 2 === 0 ? 'xl:-mt-100' : ''}`}
            >
                <span className='flex rounded-full justify-center items-center w-18 h-18 mx-auto text-7xl text-white bg-zinc-800 outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed'>
                    {item.number}
                </span>

                <div className='flex items-center mt-10 gap-x-5'>
                    <span className='flex shrink-0 bg-gradient-to-b from-orange-400 to-orange-600 text-white w-15 h-15 rounded-full justify-center items-center text-3xl'>
                        {item.icon}
                    </span>

                    <div className='flex-1'>
                        <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
                        <p className='text-zinc-600 text-base md:text-lg pt-2'>{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-6 sm:px-10 py-12 md:py-20'>
                <div className='mr-auto w-fit'>
                    <Heading highlight='Our' heading='Process' />
                </div>

                <div className='flex flex-wrap items-center justify-center gap-y-16 gap-x-8 xl:gap-x-17 mt-12 md:mt-20 xl:pt-40'>
                    {renderSteps}
                </div>
            </div>
        </section>
    )
}

export default Process;

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'We carefully source our products from trusted suppliers to ensure freshness, quality, and reliability.',
        icon: <PiPlant />
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'Our manufacturing process follows modern standards to produce safe, efficient, and high-quality products.',
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'Every product goes through strict quality checks to maintain the highest standards for our customers.',
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'Our efficient logistics network ensures fast, reliable, and timely delivery of products to your doorstep.',
        icon: <BsTruck />
    },
]