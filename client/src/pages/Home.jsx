import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import Homeslider from '../components/Homeslider'
import HomeFirstComp from '../components/HomeFirstComp'
import HomesSecondComp from '../components/HomesSecondComp'
import HomeThirdComp from '../components/HomeThirdComp'
import mainImage from '../Images/DW-01.png'
import mainImage1 from '../Images/ourstorybg.png'
import mainImage2 from '../Images/redvalbg.png'
import mainImage3 from '../Images/Uricbg.png'
import HomeFourthComp from '../components/HomeFourthComp'
import HomeFifthComp from '../components/HomeFifthComp'
const Home = () => {
  return (
    <>
      <MainBanner images={[   mainImage,   mainImage1,   mainImage2,   mainImage3, ]}/>
      <Homeslider/>
      <HomeFirstComp/>
      <HomesSecondComp/>
      <HomeThirdComp/>
      <HomeFifthComp/>
      <HomeFourthComp/>
      
    </>
  )
}

export default Home
