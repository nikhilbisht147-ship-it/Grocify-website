import React from 'react'
import Grocery from '../assets/images/grocery.png'
import Button from './Button'



const Hero = () => {
    return (
        <section>
            <div className='max-w-[1400px] xl:mx-auto mx-10 px-2 flex md:flex-row flex-col items-center min-h-screen md:pt-25 pt-35'>
                <div >
                    <span className='bg-gradient-to-b from-orange-200 to-orange-300  text-orange-800 md:px-5 px-3 md:py-2 py-2 md:text-base text-sm rounded-full'>Export Best Quality...</span>
                    <h1 className='md:text-5xl/15 text-3xl/10 font-extrabold text-slate-800 mt-4'>
                        Tasty Organic<br/> <span className='bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent'>Fruits</span> & <span className='bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent'>Veggies</span><br/> In Your City
                    </h1>
                    <p className='text-zinc-600 text-lg mt-4 mb-6 max-w-[530px] '>
                    Fresh groceries delivered straight to your doorstep. At Grocify, we make grocery shopping simple, fast, and convenient. 
                    </p>
                    <Button content="Shop Now"/>
                </div>
                <div>
                    <img src={Grocery} alt="gorcery" className='lg:h-130 lg:w-180 h-80 w-130' />
                </div>
                
                
            </div>
            
        </section>
    )
}

export default Hero
