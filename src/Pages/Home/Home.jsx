import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../Components/Explore/Explore'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
const Home = () => {
const [category , setCategory] =useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory = {setCategory}/>
      <FoodDisplay category = {category}/>
    </div>
  )
}

export default Home