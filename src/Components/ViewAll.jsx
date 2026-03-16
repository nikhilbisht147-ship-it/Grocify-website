import React from 'react'
import CategoryPage from './CategoryPage'
import BgViewAll from '../assets/images/all-banner.jpg'

const ViewAll = () => {
  return (
    <div>
         <CategoryPage title="All Products" bgImage={BgViewAll} categories={['All']}/>
    </div>
  )
}

export default ViewAll
