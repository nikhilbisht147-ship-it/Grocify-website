import React from 'react'
import Button from './Button'
import FreshFruits from '../assets/images/fresh-fruits.png'

const Discount = () => {
  return (
    <section className=' mt-15 bg-zinc-200 bg-right bg-contain bg-no-repeat' style={{backgroundImage: `url(${FreshFruits})`}}>
        <div className='md:bg-transparent bg-zinc-200 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10'>
             <span className='lg:text-9xl text-5xl bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent font-bold tranform md:-rotate-90 h-fit lg:self-center'>20%</span>
             <div className='max-w-[700px]'>
                <h3 className=' text-4xl lg:text-7xl mt-2 text-zinc-800 font-bold '>1st order discount</h3>
                <p className='text-zinc-600 my-6'>
                    Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.
                </p>
                <Button content='Get a Discount'/>
             </div>
        </div>
    </section>
  )
}

export default Discount
