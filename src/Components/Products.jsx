import React, { useState } from 'react'
import Heading from './Heading'
import ProductList from '../Components/ProductList'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const Products = () => {

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [activeTab, setActiveTab] = useState('All')
    let filteredItems = activeTab === 'All' ? ProductList : ProductList.filter(item => item.categroy === activeTab);
    const renderCards = filteredItems.slice(0, 8).map((product, index) => {
        return (
            <Cards key={product.id || index} image={product.image} name={product.name} price={product.price} />
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-20 py-12 md:py-20'> 
                {/* heading */}
                <Heading highlight='Our' heading='Products' />

                {/* Tabs */}
                <div className='flex flex-wrap gap-3 sm:gap-4 justify-center mt-8 sm:mt-10 text-lg'>
                    {categories.map(category => {
                        return (
                            <button 
                                key={category} 
                                className={`px-4 py-1 rounded-md cursor-pointer ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-600 text-white' : 'bg-zinc-200'}`} 
                                onClick={() => setActiveTab(category)}
                            >
                                {category}
                            </button>
                        )
                    })}
                </div>

                {/* Products */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-9 gap-y-10 sm:gap-y-15 mt-12 sm:mt-20'>
                    {renderCards}
                </div>

                <div className='mt-10 sm:mt-15 mx-auto w-fit'>
                    <Link 
                        to="viewall" 
                        className='inline-block bg-gradient-to-b from-orange-400 to-orange-600 md:text-lg text-md text-white px-3 py-1 rounded-md hover:scale-105 transition-all duration-70 cursor-pointer'
                    >
                        View All
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Products