import React from 'react'
import CategoryPage from './CategoryPage'
import BgDairy from '../assets/images/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <CategoryPage title="Dairy & Eggs" bgImage={BgDairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy
