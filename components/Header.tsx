import React, { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'blog', label: 'Blog' },
    { id: 'careers', label: 'Careers' },
    { id: 'pricing', label: 'Pricing' },
  ];

  const handleClick = (id: string) => {
    setActiveLink(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">🧩 Positivus</h1>

      <nav className="hidden md:flex gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`transition-colors ${
              activeLink === item.id
                ? 'text-[#B9FF66]'
                : 'text-gray-800 hover:text-[#B9FF66]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button className="bg-black text-white px-4 py-2 rounded hover:opacity-90 text-sm">
        Request a Quote
      </button>
    </header>
  );
};

export default Header;
