import React from 'react'
import Alkalinewater from '../Images/Alkalinewater.png'
import detoxwater from '../Images/detoxwater.png'
import harbalwater from '../Images/harbalwater.png'
import productbg from '../Images/productbg.png'
function HomesSecondComp() {
  return (
    <div className="text-[#073b61] font-sans text-center px-5 py-30" 
    style={{
        background: `url(${productbg}) no-repeat center top`,
        backgroundSize: 'cover'
      }}
    >
      <h1 className="font-bold uppercase text-4xl md:text-5xl leading-tight mb-2 font-montserrat  tracking-widest">
        INTRODUCING<br />THE DAILY WATERS!
      </h1>
      <h2 className="font-semibold text-2xl md:text-3xl mb-10 font-sans tracking-widest">
        Herbs and Spices Infused Water
      </h2>
      <div className="flex flex-wrap justify-center sm:gap-46 gap-30 max-w-full mx-auto">
        <div className="max-w-[140px] flex flex-col items-center">
            <img
              src={Alkalinewater}
              alt="Icon of two water drops with PH symbol inside a blue circle"
              className="w-auto h-[120px] mb-5"
              width="60"
              height="60"
            />
          <p className="font-bold uppercase text-2xl leading-tight font-montserrat tracking-widest">
            ALKALINE<br />WATER
          </p>
        </div>
        <div className="max-w-[140px] flex flex-col items-center">
            <img
              src={detoxwater}
              alt="Icon of a glass with water and lemon slice inside a yellow circle"
              className="w-auto h-[120px] mb-5"
              width="60"
              height="60"
            />
          <p className="font-bold uppercase text-2xl leading-tight font-montserrat tracking-widest">
            DETOX<br />WATER
          </p>
        </div>
        <div className="max-w-[140px] flex flex-col items-center">
            <img
              src={harbalwater}
              alt="Icon of two leaves inside a green circle"
              className="w-auto h-[120px] mb-5"
              width="60"
              height="60"
            />
          <p className="font-bold uppercase text-2xl leading-tight font-montserrat tracking-widest">
            HERBAL<br />WATER
          </p>
        </div>
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
    </div>
  )
}

export default HomesSecondComp
