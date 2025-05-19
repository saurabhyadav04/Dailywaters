import React from "react";
import one from '../Images/1.png'
import two from '../Images/2.png'
import three from '../Images/3.png'
function HomeFirstComp() {
  return (
    <div className="text-[#073b61] font-sans text-center py-15">
      <h2 className="font-abold uppercase text-4xl md:text-4xl text-black leading-tight mb-4 font-montserrat tracking-widest">
        DO YOU KNOW!
      </h2>
      <h1 className="font-bold uppercase text-4xl md:text-5xl leading-tight mb-2 font-montserrat tracking-widest">
        THE 70% <br />
        OF YOUR BODY <br /> IS WATER
      </h1>
      {/* Types of Water Section */}
      <div className="max-w-full">
        <section className="flex flex-col md:flex-row">
          {/* Block 1 */}
          <div className="relative flex-1">
            <article className="relative overflow-hidden">
              <img
                src={one}
                alt="Glass of RO water with splash of water inside"
                className="w-full h-auto block"
              />
              <div className="absolute bottom-0 w-full bg-[rgba(0,31,63,0.7)] text-white font-['Poppins'] font-semibold text-xl md:text-2xl text-center py-3 md:py-3.5 tracking-widest z-20">
                RO WATER
              </div>
            </article>
            <div className="relative text-center text-3xl font-semibold px-4 py-6 bg-white tracking-widest">
              No Minerals &amp; <br />Proteins
              <span className="hidden md:block absolute top-[10%] right-0 h-[80%] w-[3px] bg-[#001f3f] opacity-30"></span>
            </div>
          </div>

          {/* Block 2 */}
          <div className="relative flex-1">
            <article className="relative overflow-hidden">
              <img
                src={two}
                alt="Pouring bottled water into a glass with splash"
                className="w-full h-auto block"
              />
              <div className="absolute bottom-0 w-full bg-[rgba(0,31,63,0.7)] text-white font-['Poppins'] font-semibold text-xl md:text-2xl text-center py-3 md:py-3.5 tracking-widest z-20">
                BOTTLED WATER
              </div>
            </article>
            <div className="relative text-center text-3xl font-semibold px-4 py-6 bg-white tracking-widest">
              Harmful <br /> Micro Plastics
              <span className="hidden md:block absolute top-[10%] right-0 h-[80%] w-[3px] bg-[#001f3f] opacity-30"></span>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex-1">
            <article className="relative overflow-hidden">
              <img
                src={three}
                alt="Water flowing from a metal tap faucet"
                className="w-full h-auto block"
              />
              <div className="absolute bottom-0 w-full bg-[rgba(0,31,63,0.7)] text-white font-['Poppins'] font-semibold text-xl md:text-2xl text-center py-3 md:py-3.5 tracking-widest z-20">
                TAP WATER
              </div>
            </article>
            <div className="text-center text-3xl font-semibold px-4 py-6 bg-white tracking-widest">
              Lacks Essential <br />Body Minerals
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeFirstComp;
