import React from 'react'
import MainBanner from '../components/MainBanner'
import Homeslider from '../components/Homeslider'
import mainImage from '../Images/Uricbg.png'
import mainImage1 from '../Images/ourstorybg.png'
import mainImage2 from '../Images/redvalbg.png'
import mainImage3 from '../Images/Uricbg.png'
import DataUricsugar from '../components/DataUricsugar'
function Puricsuguar() {
  return (
    <div>
       <MainBanner images={[   mainImage,   mainImage1,   mainImage2,   mainImage3, ]}/>
      <Homeslider/>
      <DataUricsugar/>
    </div>
  )
}

export default Puricsuguar
