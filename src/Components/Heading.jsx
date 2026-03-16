import React from 'react'

const Heading = (props) => {
  return (
    <div className='w-fit text-center mt-15 mx-auto  '>
      <h1 className='md:text-4xl text-zinc-800 text-3xl font-bold'>
        <span className='bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent'>{props.highlight} </span>{props.heading}
        </h1>
      <div className='bg-orange-500 w-30 h-1 mt-5 rounded-full ml-auto'></div>
    </div>
  )
}

export default Heading; 