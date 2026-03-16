import React from 'react'
import Heading from './Heading'
import FruitsCat from '../assets/images/fruits-and-veggies.png'
import DairyCat from '../assets/images/dairy-and-eggs.png'
import SeaFoodCat from '../assets/images/meat-and-seafood.png'
import { Link } from 'react-router-dom'
const Category = () => {

  const renderCards = category.map(card => {
    return (
      <div className='flex-1 max-w-[400px] mx-auto mb-2'>
        {/* card img */}
        <div className=' w-full min-h-[32vh] relative -mb-10'>
          <img src={card.image} className='absolute bottom-0'/>
        </div>
       {/* card content */}
        <div className='bg-zinc-200 pt-17 p-8 rounded-lg'>
          <h3 className='text-zinc-800 text-2xl font-bold'>{card.title}</h3>
          <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
          <Link to={card.path} className=' inline-block bg-gradient-to-b from-orange-400 to-orange-600 md:text-lg text-md text-white px-3 py-1 rounded-md hover:scale-105 transition-all duration-70 cursor-pointer'>
            See All
            </Link>
        </div>
      </div>
    )
  })
  return(
    <div className='max-w-[1400px] mx-auto px-10'>
      <Heading highlight="Shop" heading="by Category" />

      {/* Category Cards */}
      <div className='md:flex flex-wrap lg:gap-10 gap-4 lg:mt-20 mt-5'>
        {renderCards}
        
      </div>
    </div>
  )
}

export default Category

// array object
const category = [
  {
    id: 1,
    title: 'Friuts & Veggies',
    description: 'Fresh, organic produce sourced from local farms. Explore a wide range of seasinal fruits and crisp vegetables.',
    image: FruitsCat,
    path: "/fruits"
  },
  {
    id: 2,
    title: 'Dairy & Eggs',
    description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses. ',
    image: DairyCat,
    path: "/dairy",
  },
  {
    id: 3,
    title: 'Meat & SeaFood',
    description: 'High-quality, reponsibly sourced meat and seafood. choose from fresh cuts , marinated options, and more.',
    image: SeaFoodCat,
    path: "/seafood"
  }
]

