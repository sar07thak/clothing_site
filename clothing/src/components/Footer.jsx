import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-8">
        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-6">
          <a href="#" className="text-[10px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
            CUSTOMER CARE
          </a>
          <a href="#" className="text-[10px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
            LOCATION
          </a>
          <a href="#" className="text-[10px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
            EDITORIAL ARCHIVE
          </a>
          <a href="#" className="text-[10px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
            CAREERS
          </a>
          <a href="#" className="text-[10px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
            COUNTRY/REGION: INDIA
          </a>
          <a href="#" className="text-[10px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
            EMAIL SIGNUP
          </a>
          <a href="#" className="text-[10px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
            AFFILIATES
          </a>
          <a href="#" className="text-[10px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
            SITEMAP
          </a>
          <a href="#" className="text-[10px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
            FACEBOOK
          </a>
          <a href="#" className="text-[10px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
            INSTAGRAM
          </a>
          <a href="#" className="text-[10px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
            X
          </a>
          <a href="#" className="text-[10px] tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">
            TIKTOK
          </a>
        </div>

        {/* Copyright and Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          <p className="text-[10px] text-gray-500">© 2025 seadfashion.com</p>
          <a href="#" className="text-[10px] text-gray-500 hover:text-black transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="text-[10px] text-gray-500 hover:text-black transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-[10px] text-gray-500 hover:text-black transition-colors">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
