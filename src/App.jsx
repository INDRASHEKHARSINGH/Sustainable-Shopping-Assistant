
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from './AuthForm.jsx';
import Navbar from './Navbar.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import RealShop from './pages/RealShop.jsx';
import Contact from './pages/Contact.jsx';
import PersonalCare from './products/PersonalCare.jsx';
import Home_Living from './products/Home_Living.jsx';
import Kitchen from './products/Kitchen.jsx';
import Clothes from './products/Clothes.jsx';

import Home from './pages/Home.jsx';
import BuyNow from './components/BuyNow.jsx';
import ProductList from "./components/ProductList";
import './App.css'

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

function App() {
 
   const items = [
    "Sustainable Fashion",
    "Ethical Brands",
    "Eco-Friendly Products",
    "Zero Waste Living",
    "Vegan Lifestyle",
    "Upcycled Goods",
    "Fair Trade",
    "Reusable Packaging",
    "Carbon Neutral",
    "Locally Sourced",
    "Organic Products",
    "Zero Waste Design",
    "Ethical Labor",
    "Plastic-Free",
    "Recycled Materials",
    "Green Energy"
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAccountClick = () => {
    setIsModalOpen(true);
   };
   const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
  <>
    
    
    <Router>
      
        <Navbar onAccountClick={handleAccountClick}  />
             {isModalOpen && (
                  <div className="fixed inset-0 z-50  flex items-center justify-center bg-gray-100 bg-opacity-0">
                     <div className="bg-white p-6 rounded-4xl w-full max-w-md hover:shadow-lg shadow-green-600 relative">
                        <button onClick={handleCloseModal}
                        className="absolute top-2 right-5 text-gray-500 text-xl hover:text-red-500"
                      >
                       &times;
                        </button>
                      <AuthForm closeModal={handleCloseModal} />
                     </div>
                  </div>
              )}
              
              
              </Router>


      <div className=" w-full mt-15  overflow-x-auto whitespace-nowrap p-4 bg-green-50 rounded shadow-inner">
      {items.map((item, index) => (
        <a href="#Home" target="_top" > <span
          key={index}
          className="inline-block bg-white text-green-700 font-medium px-6 py-1 mx-1 rounded-full border border-green-300 shadow hover:bg-green-100 transition"
        >
          {item}
        </span>
        </a>
      ))}
    </div>
      
       <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/PersonalCare" element={<PersonalCare />} /> 
          <Route path="/Kitchen" element={<Kitchen />} />
          <Route path="/Clothes" element={<Clothes />} />
          <Route path="/Home_Living" element={<Home_Living />} />
          <Route path="/BuyNow" element={<BuyNow />} />
          <Route path="/RealShop" element={<RealShop />} />
           <Route path="/ProductList" element={<ProductList />} />
        </Routes>
       </Router>

      
  {/* Footer */}
 <footer className="bg-gray-800 text-white pt-10 pb-5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + Slogan */}
        <div>
          <h2 className="text-2xl font-bold mb-2  w-[109px] rounded-2xl"><span className='text-green-600 font-serif text-[40px]'>Green</span><span className='text-yellow-400 font-serif text-[35px]'>Basket</span></h2>
          <p className="text-gray-400 text-sm">
            Shop Smart, Live Better. Your one-stop sustainable e-commerce platform.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Seller Types */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sellers</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="#">For Small Businesses</a></li>
            <li><a href="#">For Enterprises</a></li>
            <li><a href="#">Partner Program</a></li>
            <li><a href="#">Join as Seller</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Help</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>

        {/* Policies & Sitemap */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Legal & Sitemap</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6" />

      {/* Social Media and Contact Info */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <div className="flex gap-4">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="flex items-center gap-1"><FaMapMarkerAlt /> India</span>
          <span className="flex items-center gap-1"><FaPhoneAlt /> +91 9565080730</span>
          <span className="flex items-center gap-1"><FaEnvelope /> support@greenbasket.com</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} GreenBasket. All rights reserved.
      </div>
    </footer>  

 </>

  );
}

export default App;
