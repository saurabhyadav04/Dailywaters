import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCartCount,
    axios,
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get('/api/user/logout');
      if (data.success) {
        toast.success(data.message);
        setUser(null);
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate('/products');
    }
  }, [searchQuery]);

  const handleProductClick = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setIsProductDropdownOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-[#0f2a1a] via-[#2a4a2a] to-[#0f2a1a] flex-wrap md:flex-nowrap relative z-20">
      {/* Logo */}
      <div className="cursor-pointer" onClick={() => navigate('/')}>
        <div className="font-bold text-white text-[20px] tracking-wider" aria-label="Daily Waters logo">
          DAILY WATERS
        </div>
      </div>

      {/* Hamburger and Cart Icons (Mobile) */}
      <div className="flex items-center gap-4 md:hidden">
          <div onClick={() => navigate('/cart')} className="relative cursor-pointer px-3">
          <img src={assets.nav_cart_icon} alt="cart" className="w-6 opacity-80" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>
        <button
          className="text-white focus:outline-none"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

      
      </div>

      {/* Navigation */}
      <nav
        role="navigation"
        aria-label="Primary navigation"
        className={`${
          mobileMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-[30px] w-full md:w-auto text-left md:text-center bg-[#0f2a1a] md:bg-transparent px-2 py-2 md:p-0 rounded-md absolute md:static top-full left-0 z-10`}
      >
        {/* Mobile Search Bar */}
        {mobileMenuOpen && (
          <div className="w-full px-4 py-2 mb-4 bg-[#0f2a1a]">
            <input
              className="py-2 w-full bg-transparent outline-none placeholder-gray-500 text-white"
              type="text"
              placeholder="Search products"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}

        <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="text-white font-normal text-[16px] tracking-wide">
          HOME
        </NavLink>

        {/* Dropdown for Products */}
        <div className="relative">
          <button
            tabIndex="0"
            onClick={handleProductClick}
            className="flex items-center gap-1 text-white font-normal text-[16px] tracking-wide focus:outline-none"
          >
            PRODUCTS
            <svg className="w-4 h-4 mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg transition-opacity z-30 ${
              isProductDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <NavLink to="/products" onClick={() => setIsProductDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">All Products</NavLink>
            <NavLink to="/blue-harmony" onClick={() => setIsProductDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Blue Harmony</NavLink>
            <NavLink to="/gut-well" onClick={() => setIsProductDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Gut Well</NavLink>
            <NavLink to="/red-wellness"onClick={() => setIsProductDropdownOpen(false)}  className="block px-4 py-2 hover:bg-gray-100">Red Wellness</NavLink>
            <NavLink to="/uric-sugar-detox" onClick={() => setIsProductDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Uric + Sugar Detox</NavLink>
          </div>
        </div>
        <NavLink to="/our-story" onClick={() => setMobileMenuOpen(false)} className="text-white font-normal text-[16px] tracking-wide">
          OUR STORY
        </NavLink>
        <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-white font-normal text-[16px] tracking-wide">
          CONTACT US
        </NavLink>
      </nav>

      {/* Cart and Search (hidden on small screens) */}
      <div className="hidden lg:flex items-center gap-6">
        <div className="flex items-center text-sm gap-2 border border-white px-3 rounded-full ml-4">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-white"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4" />
        </div>

        <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt="cart" className="w-6 opacity-80" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {user && (
          <div className="relative group">
            <img src={assets.profile_icon} className="w-10" alt="profile" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
              <li onClick={() => navigate('my-orders')} className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">My Orders</li>
              <li onClick={logout} className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
        {!user ? (
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setShowUserLogin(true);
            }}
            className="cursor-pointer px-6 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
          >
            Login
          </button>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Navbar;
