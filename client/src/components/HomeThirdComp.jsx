import React from 'react';
import blueharmony from '../Images/BlueHarmony.png';
import Gutwell from '../Images/GutWell.png';
import RedWellnesspack from '../Images/RedWellnesspack.png';
import UricSugarDetoxpack from '../Images/UricSugarDetoxpack.png';

function HomeThirdComp() {
  return (
    <div>
      <h1 className="text-[#004269] font-bold text-[3.5rem] text-center mt-8 mb-12 font-[Fredoka_One]">
        OUR PRODUCTS
      </h1>
      {/* Blue Hormony */}
      <div className="max-w-[1200px] mx-auto px-4 pb-12 flex flex-wrap justify-center items-center gap-12">
        <div className="flex-1 min-w-[320px] max-w-[400px] flex justify-center">
          <img
            src={blueharmony}
            alt="Blue Harmony product packaging with blue and orange colors, showing butterfly pea flower and benefits text"
            className="w-full h-auto object-contain"
            width="400"
            height="400"
          />
        </div>
        <div className="flex-1 min-w-[400px] max-w-[600px]">
          <div className="bg-[#d3def9] rounded-[50px] px-8 py-4 flex justify-between items-center cursor-pointer select-none font-[Fredoka_One] font-bold text-[2rem] text-[#2a3a7a] m-[20px]">
            BLUE HARMONY
            <i className="fas fa-chevron-down text-[#004269] text-[1.8rem]"></i>
          </div>
          
          <p className="mt-4 max-w-[600px] text-[1.1rem] leading-[1.5] text-[#2a3a7a] m-10">
            Blue Harmony Infused Water – a refreshing blend of butterfly pea flower, spices, and chia. Packed with antioxidants, it boosts memory, aids digestion, hydrates, and keeps your skin glowing.
          </p>
          <div class="flex items-center justify-center">
              <a href="/products/drinks/681720cbd477b654b3202120"><button class="bg-[#004269] cursor-pointer text-white text-base px-6 py-2 rounded-md hover:bg-[#003269] transition duration-200">
                  Shop Now
                </button>
                </a>
            </div>
        </div>
      </div>


      {/*  RED - WELLNESS */}
        <div className="max-w-[1200px] mx-auto px-4 pb-12 flex flex-wrap justify-center items-center gap-12">
        <div className="flex-1 min-w-[320px] max-w-[400px] flex justify-center">
          <img
            src={RedWellnesspack}
            alt="Blue Harmony product packaging with blue and orange colors, showing butterfly pea flower and benefits text"
            className="w-full h-auto object-contain"
            width="400"
            height="400"
          />
        </div>
        <div className="flex-1 min-w-[400px] max-w-[600px]">
          <div className="bg-[#f9c7c7] text-[#d61a1a] rounded-[50px] px-8 py-4 flex justify-between items-center cursor-pointer select-none font-[Fredoka_One] font-bold text-[2rem] text-[#2a3a7a] m-[20px]">
          RED - WELLNESS
            <i className="fas fa-chevron-down text-[#d61a1a] text-[1.8rem]"></i>
          </div>
          <p className="mt-4 max-w-[600px] text-[1.1rem] leading-[1.5] text-[#d61a1a] m-10">
          Dahasamani (Karingali) – Kerala’s herbal red water that cools your body, purifies blood, aids digestion, and boosts overall health naturally.
          </p>
          <div class="flex items-center justify-center">
              <a href="products/drinks/6817225cd477b654b3202140"><button class="bg-[#d61a1a] cursor-pointer text-white text-base px-6 py-2 rounded-md hover:bg-[#d61a1a] transition duration-200">
                  Shop Now
                </button>
                </a>
            </div>
        </div>
      </div>

         {/*  GUT - WELL */}
      <div className="max-w-[1200px] mx-auto px-4 pb-12 flex flex-wrap justify-center items-center gap-12">
        <div className="flex-1 min-w-[320px] max-w-[400px] flex justify-center">
          <img
            src={Gutwell}
            alt="Blue Harmony product packaging with blue and orange colors, showing butterfly pea flower and benefits text"
            className="w-full h-auto object-contain"
            width="400"
            height="400"
          />
        </div>
        <div className="flex-1 min-w-[400px] max-w-[600px]">
          <div className="bg-[#d6debb] text-[#3f5a0a] rounded-[50px] px-8 py-4 flex justify-between items-center cursor-pointer select-none font-[Fredoka_One] font-bold text-[2rem] text-[#2a3a7a] m-[20px]">
          GUT - WELL
            <i className="fas fa-chevron-down text-[#3f5a0a] text-[1.8rem]"></i>
          </div>
          
          <p className="mt-4 max-w-[600px] text-[1.1rem] leading-[1.5] text-[#3f5a0a] m-10">
          A powerful blend of Ajwain, Jeera, Saunf & Cinnamon – boosts digestion, cleanses your system, supports weight loss, and keeps your heart healthy.
          </p>
          <div class="flex items-center justify-center">
              <a href="/products/drinks/681721c9d477b654b3202128"><button class="bg-[#3f5a0a] cursor-pointer text-white text-base px-6 py-2 rounded-md hover:bg-[#3f5a0a] transition duration-200">
                  Shop Now
                </button>
                </a>
            </div>
        </div>
      </div>

         {/*  URIC + SUGAR DETOX */}
         <div className="max-w-[1200px] mx-auto px-4 pb-12 flex flex-wrap justify-center items-center gap-12">
        <div className="flex-1 min-w-[320px] max-w-[400px] flex justify-center">
          <img
            src={UricSugarDetoxpack}
            alt="Blue Harmony product packaging with blue and orange colors, showing butterfly pea flower and benefits text"
            className="w-full h-auto object-contain"
            width="400"
            height="400"
          />
        </div>
        <div className="flex-1 min-w-[400px] max-w-[600px]">
          <div className="bg-[#d9b6af] text-[#8c1c11]  rounded-[50px] px-8 py-4 flex justify-between items-center cursor-pointer select-none font-[Fredoka_One] font-bold text-[2rem] text-[#2a3a7a] m-[20px]">
          URIC + SUGAR DETOX
            <i className="fas fa-chevron-down text-[#8c1c11]  text-[1.8rem]"></i>
          </div>
          
          <p className="mt-4 max-w-[600px] text-[1.1rem] leading-[1.5] text-[#8c1c11]  m-10">
          Balance your body naturally – this herbal mix helps control uric acid, blood sugar & boosts metabolism.
          </p>
          <div class="flex items-center justify-center">
              <a href="/products/drinks/681722b5d477b654b3202145"><button class="bg-[#8c1c11] cursor-pointer text-white text-base px-6 py-2 rounded-md hover:bg-[#7c1c11] transition duration-200">
                  Shop Now
                </button>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomeThirdComp;
