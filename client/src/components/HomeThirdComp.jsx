import React from 'react';
import blueharmony from '../Images/BlueHarmony.png';
import Gutwell from '../Images/GutWell.png';
import RedWellnesspack from '../Images/RedWellnesspack.png';
import UricSugarDetoxpack from '../Images/UricSugarDetoxpack.png';

function HomeThirdComp() {
  const products = [
    {
      name: 'BLUE HARMONY',
      image: blueharmony,
      alt: 'Blue Harmony product packaging',
      description:
        'Blue Harmony Infused Water – a refreshing blend of butterfly pea flower, spices, and chia. Packed with antioxidants, it boosts memory, aids digestion, hydrates, and keeps your skin glowing.',
      color: 'bg-[#d3def9]',
      textColor: 'text-[#2a3a7a]',
      iconColor: 'text-[#004269]',
      url: '/products/drinks/681720cbd477b654b3202120',
      buttonColor: 'bg-[#004269]',
      hoverColor: 'hover:bg-[#003269]',
    },
    {
      name: 'RED - WELLNESS',
      image: RedWellnesspack,
      alt: 'Red Wellness product packaging',
      description:
        'Dahasamani (Karingali) – Kerala’s herbal red water that cools your body, purifies blood, aids digestion, and boosts overall health naturally.',
      color: 'bg-[#f9c7c7]',
      textColor: 'text-[#d61a1a]',
      iconColor: 'text-[#d61a1a]',
      url: 'products/drinks/6817225cd477b654b3202140',
      buttonColor: 'bg-[#d61a1a]',
      hoverColor: 'hover:bg-[#c01515]',
    },
    {
      name: 'GUT - WELL',
      image: Gutwell,
      alt: 'Gut Well product packaging',
      description:
        'A powerful blend of Ajwain, Jeera, Saunf & Cinnamon – boosts digestion, cleanses your system, supports weight loss, and keeps your heart healthy.',
      color: 'bg-[#d6debb]',
      textColor: 'text-[#3f5a0a]',
      iconColor: 'text-[#3f5a0a]',
      url: '/products/drinks/681721c9d477b654b3202128',
      buttonColor: 'bg-[#3f5a0a]',
      hoverColor: 'hover:bg-[#344b07]',
    },
    {
      name: 'URIC + SUGAR DETOX',
      image: UricSugarDetoxpack,
      alt: 'Uric and Sugar Detox product packaging',
      description:
        'Balance your body naturally – this herbal mix helps control uric acid, blood sugar & boosts metabolism.',
      color: 'bg-[#d9b6af]',
      textColor: 'text-[#8c1c11]',
      iconColor: 'text-[#8c1c11]',
      url: '/products/drinks/681722b5d477b654b3202145',
      buttonColor: 'bg-[#8c1c11]',
      hoverColor: 'hover:bg-[#7c1c11]',
    },
  ];

  return (
    <div>
      <h1 className="text-[#004269] font-bold text-3xl sm:text-4xl md:text-[3.5rem] text-center mt-8 mb-12 font-[Fredoka_One]">
        OUR PRODUCTS
      </h1>

      {products.map((product, index) => (
        <div
          key={index}
          className="max-w-[1200px] mx-auto px-4 pb-12 flex flex-col lg:flex-row flex-wrap justify-center items-center gap-8"
        >
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] flex justify-center">
            <img
              src={product.image}
              alt={product.alt}
              className="w-full h-auto object-contain max-w-[400px]"
              width="400"
              height="400"
            />
          </div>
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[50%]">
            <div
              className={`${product.color} ${product.textColor} rounded-[50px] px-6 py-4 flex justify-between items-center cursor-pointer select-none font-[Fredoka_One] font-bold text-xl sm:text-2xl md:text-[2rem]`}
            >
              {product.name}
              <i className={`fas fa-chevron-down ${product.iconColor} text-xl md:text-[1.8rem]`}></i>
            </div>
            <p className={`mt-4 text-base sm:text-[1.1rem] leading-relaxed ${product.textColor}`}>
              {product.description}
            </p>
            <div className="flex items-center justify-center mt-4">
              <a href={product.url}>
                <button
                  className={`${product.buttonColor} cursor-pointer text-white text-base px-6 py-2 rounded-md ${product.hoverColor} transition duration-200`}
                >
                  Shop Now
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeThirdComp;
