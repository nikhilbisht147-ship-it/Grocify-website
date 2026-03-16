import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-b from-orange-400 to-orange-600 md:text-lg text-md text-white px-3 py-1 rounded-md hover:scale-105 transition-all duration-70 cursor-pointer'>
        {props.content}
    </button>
  )
}

export default Button  