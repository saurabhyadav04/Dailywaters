import React from 'react';
import backgroundImage from '../Images/footerbg.png'
function Footer() {
  return (
    <section
      aria-label="Join our mailing list and footer navigation"
      className="relative bg-center bg-cover px-5 py-10 md:py-16 text-center bg-[#0f2a44] text-white font-poppins"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Mailing List */}
      <div className="max-w-xl mx-auto mb-12">
        <h2 className="font-extrabold text-xl md:text-2xl tracking-wide mb-5">
          JOIN OUR MAILING LIST
        </h2>
        <form
          action="#"
          method="post"
          aria-label="Subscribe to mailing list"
          className="flex max-w-xl mx-auto border border-white/60"
        >
          <input
            type="email"
            aria-label="Email address"
            required
            placeholder="Your email address"
            className="flex-grow bg-transparent text-white placeholder-white/80 px-4 py-2 text-sm md:text-base outline-none border-none"
          />
          <button
            type="submit"
            aria-label="Subscribe to mailing list"
            className="bg-white text-[#0f2a44] font-extrabold uppercase text-sm md:text-base px-5 py-2"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
      {/* Footer Columns */}
      <div className="max-w-6xl mx-auto flex flex-wrap sm:justify-between justify-center gap-y-10">
        {/* Address & Social */}
        <div className="flex flex-col min-w-[180px] md:min-w-[200px]">
          <h3 className="font-extrabold text-lg md:text-xl leading-tight mb-3">
            DAILY WATERS
          </h3>
          <p className="text-base md:text-lg font-normal mb-1">
            The Ridge, Shimla,
          </p>
          <p className="text-base md:text-lg font-normal mb-1">
            Himachal Pradesh 171001
          </p>
          <p className="text-base md:text-lg font-normal mt-2 leading-snug">
            Mon - Fri :
            9:00 AM to 5:00 PM
          </p>
          <div className="flex space-x-14 mt-4 text-xl md:text-2xl">
            <a href="#" aria-label="Twitter" className="hover:text-[#1da1f2]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#e1306c]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#1877f2]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#0a66c2]">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block border-l border-white/30 mx-5"></div>

        {/* About Us */}
        <div className="flex flex-col min-w-[180px] md:min-w-[200px]">
          <h3 className="font-extrabold text-lg md:text-xl mb-3">ABOUT US</h3>
          <ul className="space-y-2 text-base md:text-lg font-normal cursor-pointer">
            <li className="hover:underline"><a href="/about-us">About Our Company </a></li>
            <li className="hover:underline"><a href="/return-refund">Returns and Refund </a></li>
            <li className="hover:underline"><a href="/privacy-policy">Privacy Policy </a></li>
            <li className="hover:underline"><a href="/terms-conditions">Terms &amp; Conditions </a></li>
          </ul>
        </div>

        {/* Our Products */}
        <div className="flex flex-col min-w-[180px] md:min-w-[200px]">
          <h3 className="font-extrabold text-lg md:text-xl leading-tight mb-3">
            OUR PRODUCTS
          </h3>
          <ul className="space-y-2 text-base md:text-lg font-normal cursor-pointer">
            <li className="hover:underline"><a href="/blue-harmony">Blue Harmony</a></li>
            <li className="hover:underline"><a href="/gut-well">Gut Well</a></li>
            <li className="hover:underline"><a href="/red-wellness">Red Wellness</a></li>
            <li className="hover:underline"><a href="/uric-sugar-detox">Uric-Sugar Detox</a></li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-col min-w-[180px] md:min-w-[200px]">
          <h3 className="font-extrabold text-lg md:text-xl mb-3">LINKS</h3>
          <ul className="space-y-2 text-base md:text-lg font-normal cursor-pointer">
            <li className="hover:underline"><a href="/">Home</a></li>
            <li className="hover:underline"><a href="/products">Latest Products</a></li>
            <li className="hover:underline"><a href="/our-story">Our Story</a></li>
            <li className="hover:underline"><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
