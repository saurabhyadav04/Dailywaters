import React, { useEffect, useState } from 'react';

const MainBanner = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="overflow-hidden relative w-full" style={{ height: 700 }}>
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover"
            style={{ height: 700 }}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1f3a1f] via-transparent to-transparent pointer-events-none"></div>
      <div
        className="absolute top-24 left-6 md:left-16 max-w-lg text-white select-none"
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        <h1 className="text-5xl md:text-6xl leading-tight font-semibold tracking-wide">
          CHANGING<br />THE WAY<br />HOW YOU DRINK
        </h1>
        <h2
          aria-label="WATER!"
          className="mt-2 text-7xl md:text-8xl font-extrabold flex flex-wrap gap-1"
        >
          <span className="text-yellow-400">WA</span>
          <span className="text-[#d75a3f]">T</span>
          <span className="text-teal-500">E</span>
          <span className="text-slate-300">R!</span>
        </h2>
        <p className="mt-3 text-2xl font-semibold max-w-md leading-snug">
          Water Is Nature's Medicine -<br />
          Are You Drinking It The Right Way
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
