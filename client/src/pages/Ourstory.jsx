import React from 'react'
import Ourstorydata from '../components/Ourstorydata'
import MainBanner from '../components/MainBanner'
import Homeslider from '../components/Homeslider'
import mainImage from '../Images/Ourstorybg.png'
import mainImage2 from '../Images/redvalbg.png'
import mainImage1 from '../Images/Uricbg.png'
import mainImage4 from '../Images/DW-01.png'
function Ourstory() {
  return (
    <div>
     <MainBanner images={[mainImage, mainImage1, mainImage2, mainImage4, ]}/>
    <Homeslider/>
      <Ourstorydata/>
    </div>
  )
}

export default Ourstory
