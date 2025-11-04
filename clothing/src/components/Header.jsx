import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-[60px]">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-[11px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
              MENSWEAR
            </a>
            <a href="#" className="text-[11px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
              WOMENSWEAR
            </a>
            <a href="#" className="text-[11px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
              EVERYTHING ELSE
            </a>
            <a href="#" className="text-[11px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
              SALE
            </a>
            <a href="#" className="text-[11px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
              SEARCH
            </a>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-[20px] font-bold tracking-tight cursor-pointer">
              SSENSE
            </h1>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <a href="#" className="text-[11px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
              ENGLISH
            </a>
            <a href="#" className="text-[11px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
              LOGIN
            </a>
            <a href="#" className="text-[11px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
              WISHLIST
            </a>
            <a href="#" className="text-[11px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
              BAG (0)
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
