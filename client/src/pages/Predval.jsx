import React from 'react'
import MainBanner from '../components/MainBanner'
import Homeslider from '../components/Homeslider'
import mainImage from '../Images/redvalbg.png'
import Dataredwell from '../components/Dataredwell'
import mainImage1 from '../Images/ourstorybg.png'
import mainImage2 from '../Images/DW-01.png'
import mainImage3 from '../Images/Uricbg.png'
function Predval() {
  return (
    <>
      <MainBanner images={[mainImage, mainImage1, mainImage2, mainImage3]}/>
       <Homeslider/>
       <Dataredwell/>
    </>
  )
}

export default Predval
