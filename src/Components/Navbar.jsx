import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoHeart, IoClose } from 'react-icons/io5';
import { TbMenu2 } from 'react-icons/tb';
import { MdLocationOn } from 'react-icons/md';
import { useCart } from './Both';
import Button from './Button';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Safe destructuring with fallback empty arrays to prevent crashes
  const { cartItem = [], cart = [] } = useCart() || {};

  // Detect scroll to add glassmorphic shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showMenu]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md  shadow-lg py-3.5 '
            : 'bg-white py-5 shadow-lg'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Location Tag */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl sm:text-3xl font-bold text-slate-900 group">
              Gr<span className="text-orange-500 group-hover:text-orange-600 transition-colors uppercase">o</span>cify
              <span className="text-orange-500 font-extrabold text-2xl">.</span>
            </Link>

            {/* Quick Delivery Tag (Desktop Only) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100/80 text-xs font-semibold text-slate-700">
              <MdLocationOn className="text-orange-500 text-sm" />
              <span>Deliver to: <strong className="text-slate-900 font-bold">15 Mins</strong></span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10 font-semibold text-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`transition-colors duration-200 text-lg  relative py-1 ${
                      isActive
                        ? 'text-orange-500 font-bold'
                        : 'text-slate-800  hover:text-orange-500'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full animate-fade-in" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Search, Action Buttons & Hamburger */}
          <div className="flex items-center gap-3 sm:gap-5">           

            {/* Wishlist Link with Badge */}
            <Link
              to="/heart"
              aria-label="Wishlist"
              className="relative p-2.5 rounded-full hover:bg-slate-100 text-slate-700 hover:text-orange-500 transition-colors"
            >
              <IoHeart className="text-2xl" />
              {cartItem.length > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                  {cartItem.length}
                </span>
              )}
            </Link>

            {/* Cart Link with Badge */}
            <Link
              to="/addtocart"
              aria-label="Cart"
              className="relative p-2.5 rounded-full hover:bg-slate-100 text-slate-700 hover:text-orange-500 transition-colors"
            >
              <FaShoppingCart className="text-xl" />
              {cart.length > 0 && (
                <span className="absolute top-1 right-1 bg-orange-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-sm">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Login CTA */}
            <Link to="/login" className="hidden sm:block">
              <Button content="Login" />
            </Link>

            {/* Hamburger Toggle (Mobile / Tablet) */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 text-2xl transition-colors focus:outline-none"
            >
              {showMenu ? <IoClose /> : <TbMenu2 />}
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE SLIDE-OVER DRAWER ================= */}
      {showMenu && (
        <div 
          onClick={() => setShowMenu(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[340px] bg-white z-50 shadow-2xl flex flex-col justify-between p-6 transform transition-transform duration-300 ease-in-out lg:hidden ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6">
          {/* Header Inside Drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <Link to="/" className="text-2xl font-black tracking-tight text-slate-900">
              Gr<span className="text-orange-500">o</span>cify.
            </Link>
            <button
              onClick={() => setShowMenu(false)}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 text-xl"
            >
              <IoClose />
            </button>
          </div>

          {/* Search Bar Inside Mobile Drawer */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search groceries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-orange-500"
            />
            <FaSearch className="absolute left-3 top-3.5 text-slate-400 text-xs" />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                      isActive
                        ? 'bg-orange-50 text-orange-600 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-orange-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer Area with Login Button inside Drawer */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <Link to="/login" className="w-full block">
            <div className="w-full text-center">
              <Button content="Login / Register" />
            </div>
          </Link>
          <p className="text-center text-xs text-slate-400 font-medium">
            Fast 15-minute grocery delivery ⚡
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;