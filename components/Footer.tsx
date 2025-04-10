import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] px-6 py-16 text-[#191A23]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h1 className="text-xl font-bold mb-4">🧩 Positivus</h1>
          <p className="text-sm text-gray-700">
            We help businesses grow and thrive in the digital world through innovative strategies and creative execution.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>Email: hello@positivus.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Location: New York, USA</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="w-6 h-6" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Twitter" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-600 mt-10">
        © {new Date().getFullYear()} Positivus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
