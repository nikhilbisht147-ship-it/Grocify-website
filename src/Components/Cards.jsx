import React, { useState } from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from './Button'
import { FaRupeeSign } from "react-icons/fa";
import { useCart } from './Both';


const Cards = ({image, name , price}) => {
    const { toggleCart, cartItem, cart, addToCart } = useCart()

    const product = { image, name, price }
    
    const isAdded = cartItem.some(item => item.name === name)
    console.log(useCart());
    const isInCart = cart.some(item => item.name === product.name);
    return (
        <div className='bg-zinc-200 p-5 rounded-xl'>
            {/* Card Icons */}
            <div className='flex justify-between'>
                <span onClick={()=> toggleCart(product)} className= {` text-3xl cursor-pointer ${isAdded ? "text-red-500" : "text-zinc-600"}`}>
                    <FaHeart />
                </span>
                <button  onClick={()=> addToCart(product)} className={` text-xl px-2 py-1 rounded-md cursor-pointer ${
          isInCart ? "bg-zinc-500" : "bg-gradient-to-b from-orange-400 to-orange-600"
        }`}>
                    <FaPlus />
                </button>
            </div>        


            {/* Card Image */}
            <div className='w-full h-50 '>
                <img src={image}className='w-full h-full object-contain' />
            </div>
            {/* Card Content */}
            <div className='flex flex-col justify-center items-center '>
                <h3 className='text-xl font-semibold'>{name}</h3>
                <div className=' flex items-center gap-x-2  font-bold mt-2 mb-3 text-2xl'><FaRupeeSign  className=''/>{price.toFixed(2)}</div>
                <Button content='Shop Now' />
            </div>
        </div>
    )
}

export default Cards
