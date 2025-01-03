import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F4EDE4] text-[#5E3A87] py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
        </p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-[#5E3A87] hover:text-gray-500 mx-2">Privacy Policy</a>
          <a href="/terms" className="text-[#5E3A87] hover:text-gray-500 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
