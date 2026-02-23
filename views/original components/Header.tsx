// components/Header.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine } from '@remixicon/react';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const dropdownItems = {
    about: [
      { label: 'Service Areas', href: '#' },
      { label: 'Testimonials', href: '#' },
    ],
    services: [
      { label: 'Cost Estimating Services', href: '#' },
      { label: 'Construction Takeoff Services', href: '#' },
      { label: 'Residential Estimating Services', href: '#' },
      { label: 'Commercial Estimating Services', href: '#' },
      { label: 'Industrial Estimating Services', href: '#' },
      { label: 'Preliminary Estimate Services', href: '#' },
      { label: 'Virtual Bid Management', href: '#' },
      { label: 'Construction Estimating Consultant', href: '#' },
    ],
    trades: [
      { label: 'Electrical Estimating Services', href: '#' },
      { label: 'Concrete Estimating Services', href: '#' },
      { label: 'Opening Estimating Services', href: '#' },
      { label: 'Masonry Estimating Services', href: '#' },
      { label: 'MEP Estimating Services', href: '#' },
      { label: 'Metal Estimating Services', href: '#' },
      { label: 'SiteWork Estimating Services', href: '#' },
      { label: 'Lumber Takeoff Services', href: '#' },
      { label: 'Thermal & Moisture Protection Estimating Services', href: '#' },
      { label: 'Interior & Exterior Finishes Estimating Services', href: '#' },
    ],
    blogs: [
      { label: 'Cost Estimation and Takeoffs', href: '#' },
      { label: 'Construction Business Management', href: '#' },
      { label: 'Construction Business Setup and Legal', href: '#' },
      { label: 'Construction Materials and Procurement', href: '#' },
      { label: 'Sustainable and Advanced Construction', href: '#' },
      { label: 'Construction Technology and Innovation', href: '#' },
    ],
  };

  // Theme-based styles
  const themeStyles = {
    light: {
      background: 'bg-white',
      text: 'text-gray-900',
      border: 'border-gray-300',
      button: 'bg-blue-600 hover:bg-blue-700',
      buttonText: 'text-white',
      dropdown: 'bg-white border-gray-200',
      dropdownText: 'text-gray-700 hover:text-blue-600',
      dropdownHover: 'hover:bg-blue-50',
      specialButton: 'bg-purple-600 hover:bg-purple-700',
    },
    dark: {
      background: 'bg-gray-900',
      text: 'text-gray-100',
      border: 'border-gray-700',
      button: 'bg-blue-700 hover:bg-blue-800',
      buttonText: 'text-white',
      dropdown: 'bg-gray-800 border-gray-700',
      dropdownText: 'text-gray-200 hover:text-blue-300',
      dropdownHover: 'hover:bg-gray-700',
      specialButton: 'bg-purple-700 hover:bg-purple-800',
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <div 
      ref={dropdownRef}
      className={`w-full ${currentTheme.background} ${currentTheme.text}`}
    >
      {/* Desktop Header */}
      <div className={`hidden lg:flex flex-row items-center justify-between border-b ${currentTheme.border} p-4`}>
        
        {/* Logo */}
        <div className="w-1/4">
          <div className={`text-xl font-bold ${theme === 'light' ? 'text-blue-800' : 'text-blue-300'}`}>
            Apni Bhook Estimates
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="flex flex-row items-center space-x-4 w-3/4 justify-between">
          
          {/* Desktop Navigation Items */}
          <div className="flex flex-row items-center space-x-4">
            
            {/* About Us */}
            <div className="relative">
              <button
                className={`flex items-center justify-between px-4 py-2 ${currentTheme.button} ${currentTheme.buttonText} rounded hover:opacity-90`}
                onClick={() => toggleDropdown('about')}
              >
                About US
                <span className="ml-2">
                  {openDropdown === 'about' ? '▲' : '▼'}
                </span>
              </button>
              {openDropdown === 'about' && (
                <ul className={`absolute left-0 mt-2 w-48 ${currentTheme.dropdown} shadow-lg rounded border ${currentTheme.border} z-50`}>
                  {dropdownItems.about.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className={`block px-4 py-3 ${currentTheme.dropdownText} ${currentTheme.dropdownHover} border-b ${currentTheme.border} last:border-b-0`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Our Services */}
            <div className="relative">
              <button
                className={`flex items-center justify-between px-4 py-2 ${currentTheme.button} ${currentTheme.buttonText} rounded hover:opacity-90`}
                onClick={() => toggleDropdown('services')}
              >
                Our Services
                <span className="ml-2">
                  {openDropdown === 'services' ? '▲' : '▼'}
                </span>
              </button>
              {openDropdown === 'services' && (
                <ul className={`absolute left-0 mt-2 w-64 ${currentTheme.dropdown} shadow-lg rounded border ${currentTheme.border} z-50`}>
                  {dropdownItems.services.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className={`block px-4 py-3 ${currentTheme.dropdownText} ${currentTheme.dropdownHover} border-b ${currentTheme.border} last:border-b-0`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Trades */}
            <div className="relative">
              <button
                className={`flex items-center justify-between px-4 py-2 ${currentTheme.button} ${currentTheme.buttonText} rounded hover:opacity-90`}
                onClick={() => toggleDropdown('trades')}
              >
                Trades
                <span className="ml-2">
                  {openDropdown === 'trades' ? '▲' : '▼'}
                </span>
              </button>
              {openDropdown === 'trades' && (
                <ul className={`absolute left-0 mt-2 w-72 ${currentTheme.dropdown} shadow-lg rounded border ${currentTheme.border} z-50`}>
                  {dropdownItems.trades.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className={`block px-4 py-3 ${currentTheme.dropdownText} ${currentTheme.dropdownHover} border-b ${currentTheme.border} last:border-b-0`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Our Projects */}
            <div>
              <button className={`px-4 py-2 ${currentTheme.button} ${currentTheme.buttonText} rounded hover:opacity-90`}>
                Our Projects
              </button>
            </div>

            {/* Blogs */}
            <div className="relative">
              <button
                className={`flex items-center justify-between px-4 py-2 ${currentTheme.button} ${currentTheme.buttonText} rounded hover:opacity-90`}
                onClick={() => toggleDropdown('blogs')}
              >
                Blogs
                <span className="ml-2">
                  {openDropdown === 'blogs' ? '▲' : '▼'}
                </span>
              </button>
              {openDropdown === 'blogs' && (
                <ul className={`absolute left-0 mt-2 w-64 ${currentTheme.dropdown} shadow-lg rounded border ${currentTheme.border} z-50`}>
                  {dropdownItems.blogs.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className={`block px-4 py-3 ${currentTheme.dropdownText} ${currentTheme.dropdownHover} border-b ${currentTheme.border} last:border-b-0`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Contact Us */}
            <div>
              <button className={`px-4 py-2 ${currentTheme.button} ${currentTheme.buttonText} rounded hover:opacity-90`}>
                Contact Us
              </button>
            </div>
          </div>

          {/* Desktop Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Affordable Estimates Button */}
            <button className={`px-4 py-2 ${currentTheme.specialButton} text-white rounded hover:opacity-90 font-semibold`}>
              Affordable Estimates (30% off)
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center px-4 py-2 rounded ${theme === 'light' ? 'bg-gray-800 text-white' : 'bg-yellow-200 text-gray-800'} hover:opacity-90`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <>
                  <RiMoonLine className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Dark</span>
                </>
              ) : (
                <>
                  <RiSunLine className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Light</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className={`lg:hidden border-b ${currentTheme.border} p-4`}>
        <div className="flex items-center justify-between">
          {/* Mobile Logo */}
          <div className={`text-xl font-bold ${theme === 'light' ? 'text-blue-800' : 'text-blue-300'}`}>
            Apni Bhook Estimates
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded ${theme === 'light' ? 'bg-gray-800 text-white' : 'bg-yellow-200 text-gray-800'} hover:opacity-90`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <RiMoonLine className="w-5 h-5" />
              ) : (
                <RiSunLine className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded ${currentTheme.button} ${currentTheme.buttonText} hover:opacity-90`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <RiCloseLine className="w-6 h-6" />
              ) : (
                <RiMenuLine className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className={`mt-4 ${currentTheme.dropdown} rounded-lg border ${currentTheme.border} shadow-lg`}>
            {/* Mobile Navigation Items */}
            <div className="p-2">
              {/* About Us - Mobile */}
              <div className="mb-2">
                <button
                  className={`flex items-center justify-between w-full px-4 py-3 ${currentTheme.button} ${currentTheme.buttonText} rounded hover:opacity-90`}
                  onClick={() => toggleDropdown('about-mobile')}
                >
                  About US
                  <span>
                    {openDropdown === 'about-mobile' ? '▲' : '▼'}
                  </span>
                </button>
                {openDropdown === 'about-mobile' && (
                  <div className={`mt-2 ${currentTheme.dropdown} rounded border ${currentTheme.border}`}>
                    {dropdownItems.about.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className={`block px-4 py-3 ${currentTheme.dropdownText} ${currentTheme.dropdownHover} border-b ${currentTheme.border} last:border-b-0`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Our Services - Mobile */}
              <div className="mb-2">
                <button
                  className={`flex items-center justify-between w-full px-4 py-3 ${currentTheme.button} ${currentTheme.buttonText} rounded hover:opacity-90`}
                  onClick={() => toggleDropdown('services-mobile')}
                >
                  Our Services
                  <span>
                    {openDropdown === 'services-mobile' ? '▲' : '▼'}
                  </span>
                </button>
                {openDropdown === 'services-mobile' && (
                  <div className={`mt-2 ${currentTheme.dropdown} rounded border ${currentTheme.border}`}>
                    {dropdownItems.services.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className={`block px-4 py-3 ${currentTheme.dropdownText} ${currentTheme.dropdownHover} border-b ${currentTheme.border} last:border-b-0`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Trades - Mobile */}
              <div className="mb-2">
                <button
                  className={`flex items-center justify-between w-full px-4 py-3 ${currentTheme.button} ${currentTheme.buttonText} rounded hover:opacity-90`}
                  onClick={() => toggleDropdown('trades-mobile')}
                >
                  Trades
                  <span>
                    {openDropdown === 'trades-mobile' ? '▲' : '▼'}
                  </span>
                </button>
                {openDropdown === 'trades-mobile' && (
                  <div className={`mt-2 ${currentTheme.dropdown} rounded border ${currentTheme.border}`}>
                    {dropdownItems.trades.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className={`block px-4 py-3 ${currentTheme.dropdownText} ${currentTheme.dropdownHover} border-b ${currentTheme.border} last:border-b-0`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Our Projects - Mobile */}
              <div className="mb-2">
                <button className={`w-full px-4 py-3 ${currentTheme.button} ${currentTheme.buttonText} rounded hover:opacity-90`}>
                  Our Projects
                </button>
              </div>

              {/* Blogs - Mobile */}
              <div className="mb-2">
                <button
                  className={`flex items-center justify-between w-full px-4 py-3 ${currentTheme.button} ${currentTheme.buttonText} rounded hover:opacity-90`}
                  onClick={() => toggleDropdown('blogs-mobile')}
                >
                  Blogs
                  <span>
                    {openDropdown === 'blogs-mobile' ? '▲' : '▼'}
                  </span>
                </button>
                {openDropdown === 'blogs-mobile' && (
                  <div className={`mt-2 ${currentTheme.dropdown} rounded border ${currentTheme.border}`}>
                    {dropdownItems.blogs.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className={`block px-4 py-3 ${currentTheme.dropdownText} ${currentTheme.dropdownHover} border-b ${currentTheme.border} last:border-b-0`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Us - Mobile */}
              <div className="mb-2">
                <button className={`w-full px-4 py-3 ${currentTheme.button} ${currentTheme.buttonText} rounded hover:opacity-90`}>
                  Contact Us
                </button>
              </div>

              {/* Affordable Estimates - Mobile */}
              <div className="mb-2">
                <button className={`w-full px-4 py-3 ${currentTheme.specialButton} text-white rounded hover:opacity-90 font-semibold`}>
                  Affordable Estimates (30% off)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;