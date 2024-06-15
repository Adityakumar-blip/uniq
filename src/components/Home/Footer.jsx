import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; 2024 Builder</p>
        <nav className="mt-4 space-x-4">
          <a href="#terms" className="text-gray-400">
            Terms of Service
          </a>
          <a href="#privacy" className="text-gray-400">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
