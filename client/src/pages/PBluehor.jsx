import React from 'react'
import Databluehar from '../components/Databluehar'
import MainBanner from '../components/MainBanner'
import Homeslider from '../components/Homeslider'
import mainImage from '../Images/bluehormoneybg.png'
import mainImage1 from '../Images/ourstorybg.png'
import mainImage2 from '../Images/redvalbg.png'
import mainImage3 from '../Images/Uricbg.png'
import mainImage4 from '../Images/DW-01.png'

function PBluehor() {
  return (
    <>
      <MainBanner images={[mainImage, mainImage1, mainImage2, mainImage3, mainImage4]}/>
       <Homeslider/>
      <Databluehar/>
    </>
  )
}

export default PBluehor
