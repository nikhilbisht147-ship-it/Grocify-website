import React from 'react'
import CategoryPage from './CategoryPage'
import BgSeaFood from '../assets/images/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="Meat & SeaFood" bgImage={BgSeaFood} categories={['Meat', 'SeaFood']}/>
    </div>
  )
}

export default SeaFood
