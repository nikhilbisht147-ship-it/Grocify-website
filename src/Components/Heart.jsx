import React from 'react'
import { useCart } from './Both'
import Button from './Button'
import { FaRupeeSign } from "react-icons/fa";
import Heading from './Heading';

const Heart = () => {
  const { cartItem } = useCart()

  return (
    <div className='max-w-[1400px] mx-auto px-10 mt-40'>
      <Heading highlight='My' heading='Wishlist' />

      {cartItem.length === 0 ? (
        <h1 className='text-center mt-10 text-2xl font-semibold'>Your cart is empty</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-9 gap-y-15 mt-20 ">
          {cartItem.map((item, index) => (



            <div key={index} className="bg-zinc-200 p-5 rounded-xl  text-center  ">

              <div className='w-full h-50'>
                <img
                  src={item.image}
                  className='w-full h-full object-contain'
                />
              </div>

              <div className='flex flex-col justify-center items-center'>
                <h3 className='text-xl font-semibold'>{item.name}</h3>

                <div className='flex items-center gap-x-2 font-bold mt-2 mb-3 text-2xl'>
                  <FaRupeeSign />
                  {item.price.toFixed(2)}
                </div>

                <Button content='Shop Now' />

              </div>


            </div>

          ))}
        </div>
      )}



    </div>

  )
}

export default Heart
