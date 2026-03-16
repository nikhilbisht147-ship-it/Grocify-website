import React from 'react'
import Products from './Products'
import products from './ProductList'
import Cards from './Cards'
import Banner from './Banner'

const CategoryPage = ({title, bgImage, categories=[]}) => {

    let filteredItems = categories.includes("All")
    ? products
    : products.filter(item=> categories.includes(item.categroy))
    
    const renderProduct = filteredItems.map(product =>{
        return(
            <Cards image={product.image} name={product.name} price={product.price}/>
        )
    })
  return (
    <div>
        <Banner title={title} bgImage={bgImage}/>
      <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-15 py-3 max-w-[1400px] mx-auto px-10 mt-20'>
        {renderProduct}
      </div>
    </div>
  )
}

export default CategoryPage
