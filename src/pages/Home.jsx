import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import ProductItem from "../components/ProductItem";
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const categories = [
    {
    id: 1,
    name: "Clothes & Fashion",
    price: "$5",
    image:
      "images/kurta.jpg.webp",
  },
  {
    id: 2,
    name: "Home & Living",
    price: "$5",
    image:
      "images/sofa.jpg.webp",
  },
  {
    id: 3,
    name: "Kitchen & Dining",
    price: "$5",
    image:
      "productsImage/jug.jpg.webp",
  },
  {
    id: 4,
    name: "Health & Wellness",
    price: "$5",
    image:
      "images/healthAndWellness.jpeg",
  },
  {
    id: 5,
    name: "Groceries & Essentials",
    price: "$5",
    image:
      "images/rice.jpg.webp",
  },
  {
    id: 6,
    name: "Personal Care & Beauty",
    price: "$5",
    image:
      "images/personalCare.jpeg",
  },
  {
    id: 7,
    name: "Electronics & Gadgets",
    price: "$5",
    image:
      "images/laptop.jpg",
  },
  {
    id: 8,
    name: "Books & Stationery",
    price: "$5",
    image:
      "images/book.jpg.avif",
  },
  {
    id: 9,
    name: "Baby & Kids",
    price: "$5",
    image:
      "images/toys.jpg.webp",
  },
  {
    id: 10,
    name: "Gifts & Crafts",
    price: "$5",
    image:
      "images/gifts.webp",
  },
];

  const slides = [
     {
      id: 1,
      title: 'Advertise',
      image: 'images/adv.png'
    },
    {
      id: 2,
      title: 'Sustainable Products',
      image: 'images/carouselimage4.jpeg'
    },
    {
      id: 3,
      title: 'Recycled Materials',
      image: 'images/carouselimage2.jpeg'
    },
    {
      id: 4,
      title: 'Recycled Materials',
      image: 'images/carouselimage3.jpeg'
    },
    
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideInterval = useRef(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!paused) {
      slideInterval.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(slideInterval.current);
  }, [current, paused]);

  const goToSlide = (index) => {
    setCurrent(index);
  };
  
    return (
    <>
      <div className="grid sm:grid-cols-5 md:grid-cols-10 gap-6 p-6">
        <Link to="/Clothes" target="parent"><div  className='w-28  h-20 mb-3 cursor-pointer border  rounded shadow-md hover:shadow-green-800 hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg '>
          <img src="images/kurta.jpg.webp" alt="Clothes & fashion" className='w-28 h-20 object-cover rounded'/>
          <h2 className='text-[8px] text-center mt-2'>Clothes & Fashion</h2>
        </div>
        </Link>

        <Link to="/Home_Living" target="parent"><div  className='w-28  h-20 mb-3 cursor-pointer border  rounded shadow-md hover:shadow-green-800 hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg '>
          <img src="images/sofa.jpg.webp" alt="Home & Living" className='w-28 h-20 object-cover rounded'/>
          <h2 className='text-[8px] text-center mt-2'>Home & Living</h2>
        </div>
        </Link>

        <Link to="/Kitchen" target="parent"><div  className='w-28  h-20 mb-3 cursor-pointer border  rounded shadow-md hover:shadow-green-800 hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg '>
          <img src="productsImage/jug.jpg.webp" alt="Kitchen & Dining" className='w-28 h-20 object-cover rounded'/>
          <h2 className='text-[8px] text-center mt-2'>Kitchen & dining</h2>
        </div>
        </Link>

        <Link to="" target="parent"><div  className='w-28  h-20 mb-3 cursor-pointer border  rounded shadow-md hover:shadow-green-800 hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg '>
          <img src="images/healthAndWellness.jpeg" alt="Health & Wellness" className='w-28 h-20 object-cover rounded'/>
          <h2 className='text-[8px] text-center mt-2'>Health & Wellness</h2>
        </div>
        </Link>

        <Link to="" target="parent"><div  className='w-28  h-20 mb-3 cursor-pointer border  rounded shadow-md hover:shadow-green-800 hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg '>
          <img src="images/rice.jpg.webp" alt="Groceries & Essentials" className='w-28 h-20 object-cover rounded'/>
          <h2 className='text-[8px] text-center mt-2'>Groceries & Essentials</h2>
        </div>
        </Link>

        <Link to="" target="parent"><div  className='w-28  h-20 mb-3 cursor-pointer border  rounded shadow-md hover:shadow-green-800 hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg '>
          <img src="images/personalCare.jpeg" alt="Personal Care & Beauty" className='w-28 h-20 object-cover rounded'/>
          <h2 className='text-[8px] text-center mt-2'>Personal Care & Beauty</h2>
        </div>
        </Link>

        <Link to="" target="parent"><div  className='w-28  h-20 mb-3 cursor-pointer border  rounded shadow-md hover:shadow-green-800 hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg '>
          <img src="images/laptop.jpg" alt="Electronics & gadgets" className='w-28 h-20 object-cover rounded'/>
          <h2 className='text-[8px] text-center mt-2'>Electronics & Gadgets</h2>
        </div>
        </Link>

        <Link to="" target="parent"><div  className='w-28  h-20 mb-3 cursor-pointer border  rounded shadow-md hover:shadow-green-800 hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg '>
          <img src="images/book.jpg.avif" alt="Books & Stationary" className='w-28 h-20 object-cover rounded'/>
          <h2 className='text-[8px] text-center mt-2'>Books & Stationary</h2>
        </div>
        </Link>

        <Link to="" target="parent"><div  className='w-28  h-20 mb-3 cursor-pointer border  rounded shadow-md hover:shadow-green-800 hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg '>
          <img src="images/toys.jpg.webp" alt="Toys" className='w-28 h-20 object-cover rounded'/>
          <h2 className='text-[8px] text-center mt-2'>Toys</h2>
        </div>
        </Link>

        <Link to="" target="parent"><div  className='w-28  h-20 mb-3 cursor-pointer border  rounded shadow-md hover:shadow-green-800 hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg '>
          <img src="images/gifts.webp" alt="Gifts" className='w-28 h-20 object-cover rounded'/>
          <h2 className='text-[8px] text-center mt-2'>Gifts</h2>
        </div>
        </Link>
    </div>
   
    <div
      className="relative w-full  mx-auto overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
    <div className=" ml-4 relative w-full  h-[300px] mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)`, width: `${slides.length * 100}%` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-360  object-fill h-[300px] rounded-lg"
            />
            {/*}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
              {slide.title}
            </div>
            */}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100"
      >
        ▶
      </button>
    </div>
    </div>
    
    <div className="h-[320px] mt-2">
      <h1 className="pl-3 font-semibold">Eco-Friendly Products</h1>
      <div className=" h-[260px] ml-2 mr-2 mb-5 pl-5 rounded-2xl grid sm:grid-cols-6 bg-gray-100 p-1 justify-center items-center">
          
          <ProductItem 
             image="productsImage/ecofproduct1.webp"
             name="Eco-Friendly Bottle"
             price="349"
          />

          <ProductItem 
             image="productsImage/ecofproduct2.jpg"
             name="Eco-Friendly Bag"
             price="199"
          />

          <ProductItem
             image="productsImage/ecofproduct3.jpg"
             name="Kitchen set"
             price="349"
          />

          <ProductItem
             image="productsImage/ecofproduct4.jpg"
             name="Aloe Vera Gel"
             price="499"
          />

          <ProductItem
             image="productsImage/ecofproduct5.jpg"
             name="Natural Vitamin C"
             price="600"
          />

          <ProductItem
             image="productsImage/bamboohairbrush.jpg"
             name="Bamboo Hair Brush"
             price="99"
          />
          </div>
        </div>

        <div className="h-[320px] mt-2">
        <h1 className="pl-3 font-semibold">Organic Food Products</h1>
       <div className=" h-[260px] ml-2 mr-2 mb-5 pl-5 rounded-2xl grid sm:grid-cols-6 bg-gray-100 p-1 justify-center items-center">
          <ProductItem 
             image="productsImage/wheatflour.jpg"
             name="Wheat Flour"
             price="100"
          />

          <ProductItem 
             image="productsImage/ediableoil.jpg"
             name="Edible Oil"
             price="160"
          />

          <ProductItem
             image="productsImage/dates.jpeg"
             name="Dates"
             price="280"
          />

          <ProductItem
             image="productsImage/oats.jpg"
             name="Oats"
             price="299"
          />

          <ProductItem
             image="productsImage/almonds.jpeg"
             name="Almonds"
             price="300"
          />

          <ProductItem
             image="productsImage/ecofproduct6.jpg.webp"
             name="Desi Ghee"
             price="799"
          />
          </div>
        </div>
        
        <h1 className="w-3/4 mx-auto text-center  m-10 p-1 font-bold text-2xl
        bg-green-300 rounded-4xl justify-center"><span className="text-blue-600">Promoting</span> Small Businesses <span className="text-yellow-400">||</span> Individual Enterprises <span className="text-yellow-400">||</span> and Handmade Products</h1>

      <Link to="/RealShop" target="parent"><div className="bg-yellow-300 w-110 mx-auto p-3 rounded-full"><h3 className="w-3/4 mx-auto text-center ">Service for Shopkeepers</h3>
      <h1 className="w-3/4 mx-auto text-center text-2xl">Huge quantity goods delivery </h1></div></Link>


       <h1 className="w-3/4 mx-auto text-center  m-4 p-1 font-bold 
        rounded-4xl justify-center text-3xl"><span className="text-green-600">Green</span><span className="text-yellow-400">Basket</span> </h1>
        

        <div className="bg-gray-100 w-full ">
          
          <h1 className="font-semibold text-gray-500 pl-5 pb-3">GreenBasket: The one-stop sustainable  platform</h1>
          <div className=" text-gray-600 text-[13px] pl-5 pr-5 font-light ">The Sustainable Shopping Assistant (SSA) is a game-changer for anyone who cares about the planet. It empowers users to make smarter, eco-conscious choices by recommending eco-friendly alternatives, analyzing product sustainability, and highlighting brands that prioritize ethical practices. With ISSA, shopping isn’t just convenient — it’s responsible. By guiding users toward greener options, it actively contributes to reducing environmental harm, promoting clean living, and supporting a more sustainable lifestyle. It’s not just about what we buy — it’s about building a healthier future for ourselves and generations to come.</div>
          
          <h1 className="font-semibold text-gray-500 mt-5 pl-5 pb-3">Your Sustainable Shopping Assistant Platform</h1>
          <div className=" text-gray-600 text-[13px] pl-5 pr-5 font-light ">Encourage users to make eco-conscious decisions by providing transparent information on product impact and sustainability. Enable shoppers to choose products that align with their values—like cruelty-free, plastic-free, fair trade, and locally sourced options.Provide a platform for small-scale, ethical, and eco-certified sellers to showcase their products to the right audience.Optimize the shopping process by minimizing carbon emissions through local sourcing, minimal packaging, and greener alternatives.Raise awareness around sustainability, waste reduction, and circular economy through blogs, product insights, and eco-scores.Use data and AI to display detailed sustainability ratings, brand ethics, material origin, and carbon impact for every product.Tailor recommendations based on user preferences, values (e.g., vegan, recycled, organic), and past sustainable behavior.Build a community-driven platform where users can review, rate, and share sustainable habits, tips, and product alternatives.
          Encourage reuse, repair, and resell of products by integrating second-hand options, donation pathways, and product lifespan tips.Make eco-friendly shopping easy, accessible, and rewarding—removing confusion and replacing it with clear, guided choices.</div>

          <h1 className="font-semibold text-gray-500 mt-5 pl-5 pb-3">Eco-Friendly Fashion</h1>
          <div className=" text-gray-600 text-[13px] pl-5 pr-5 font-light "> • Made from organic, recycled, or biodegradable materials
        	•	Vegan & cruelty-free production
        	•	Transparent supply chain and fair labor certifications
        	•	Eco-labels (e.g., GOTS, Fair Trade)
        	•	Style filters: minimalist, upcycled, slow fashion, etc.</div>

          <h1 className="font-semibold text-gray-500 mt-5 pl-5 pb-3"> Sustainable Home Essentials</h1>
           <div className=" text-gray-600 text-[13px] pl-5 pr-5 font-light "> • Plastic-free, biodegradable, or refillable options
	        •	Low-toxicity ingredients and zero-waste packaging
        	•	Energy-efficient and durable designs
	        •	DIY refill stations or reusable formats
	        •	Product impact scores (carbon, water, waste)</div>

          <h1 className="font-semibold text-gray-500 mt-5 pl-5 pb-3">Green Electronics & Gadgets</h1>
          <div className=" text-gray-600 text-[13px] pl-5 pr-5 font-light "> • Energy Star certified, e-waste responsible
	        •	Made from recycled components
        	•	Repairability index and extended lifespan
        	•	Supports trade-in and recycling programs</div>

          <h1 className="font-semibold text-gray-500 mt-5 pl-5 pb-3"> Sustainable Beauty & Personal Care</h1>
          <div className=" text-gray-600 text-[13px] pl-5 pr-5 font-light "> • Cruelty-free, vegan, organic products
	        •	No microplastics, parabens, or harmful chemicals
	        •	Compostable or refillable packaging
	        •	Certifications (e.g., Leaping Bunny, COSMOS)</div>

           <h1 className="font-semibold text-gray-500 mt-5 pl-5 pb-3">Eco Kids & Baby Products</h1>
           <div className=" text-gray-600 text-[13px] pl-5 pr-5 font-light ">	•	Non-toxic, BPA-free, and natural materials
	         •	Reusable and washable diaper systems
	         •	Wooden, recycled, or cloth-based toys
	         •	Ethical sourcing and safety-tested brands</div>

           <h1 className="font-semibold text-gray-500 mt-5 pl-5 pb-3">Sustainable Stationery & Office</h1>
           <div className=" text-gray-600 text-[13px] pl-5 pr-5 font-light ">	•	Made from recycled or FSC-certified paper
	         •	Plastic-free writing tools and folders
	         •	Solar-powered or energy-saving gadgets
	         •	Upcycled or refillable office supplies</div>

           <h1 className="font-semibold text-gray-500 mt-5 pl-5 pb-3">Outdoor & Eco Travel Gear</h1>
           <div className=" text-gray-600 text-[13px] pl-5 pr-5 font-light ">	•	Lightweight and reusable travel products
	         •	Compostable or biodegradable materials
	         •	Carbon offset travel kits and guides
	         •	Compact, foldable, and low-impact designs</div>

            <h1 className="font-semibold text-gray-500 mt-5 pl-5 pb-3">Second-Hand & Refurbished Goods</h1>
            <div className=" text-gray-600 text-[13px] pl-5 pr-5 font-light mb-5 ">•	Verified quality and certified refurbishers
	          •	Upcycling support and user resale tools
	          •	Transparent product history and condition
	          •	Circular economy promotions </div>
           
        </div>
        
        </>

    );
}

export default Home;