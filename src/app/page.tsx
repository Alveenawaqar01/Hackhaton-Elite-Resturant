import React from 'react'
import Navbar from './component/navbar'
import Topbar from './component/topbar'
import Hero from './component/hero'
import Food from './component/food'
import Fooditem from './component/fooditem'
import Foodchoose from './component/foodchoose'
import Burger from './component/burger'
import Chef from './component/chef'
import Review from './component/review'
import Blog from './component/blog'
import Footer from './component/footer'


const page = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Food/>
      <Fooditem/>
      <Foodchoose/>
      <Burger/>
      <Chef/>
      <Review/>
      <Blog/>
      <Footer/>
      
    </div>
  )
}

export default page
