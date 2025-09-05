import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
 function About(){
     const navigate = useNavigate();
    

    const certifications = [
    {
      name: "USDA Organic",
      description: "Products made with 95–100% organic ingredients without synthetic pesticides.",
    },
    {
      name: "Fair Trade Certified",
      description: "Ethical labor practices, fair wages, and sustainable farming.",
    },
    {
      name: "FSC (Forest Stewardship Council)",
      description: "Responsible forest management and sustainable wood/paper products.",
    },
    {
      name: "Leaping Bunny (Cruelty-Free)",
      description: "Products not tested on animals throughout the supply chain.",
    },
    {
      name: "Ecocert",
      description: "Organic farming, natural ingredients, and eco-packaging standards.",
    },
    {
      name: "Energy Star",
      description: "Energy-efficient products that reduce electricity use and emissions.",
    },
    {
   
      name: "Carbon Neutral Certified",
      description: "Verified low or zero carbon emissions across a company’s supply chain.",
    },
    {
      name: "EU Organic",
      description: "Compliance with strict European organic farming and production regulations.",
    },
    {
        name: "EWG Verified",
      description: "Non-toxic, safe ingredients based on Environmental Working Group standards.",
    },
    {
      name: "Certified B Corporation",
      description: "High standards of social and environmental performance and transparency.",
    },
   ];
    
   return (
   <>
    <div className="max-w-4xl mx-auto mt-5 mb-5 p-6 bg-white rounded-lg shadow  hover:bg-green-50">
      
      <h1 className="text-3xl font-bold text-green-700 mb-2">About Us</h1>
      <p className="mb-4 text-gray-700">
        <strong>GreenBasket</strong>  is a smart sustainable shopping assistant website that helps users make eco-friendly and ethical purchasing decisions. It offers curated products from verified sustainable brands, tracks carbon footprints, and suggests greener alternatives using AI. Greenbasket promotes responsible consumption by highlighting eco-certifications, low-impact packaging, and transparent sourcing. With an easy-to-use interface and real-time guidance, it empowers users to shop consciously without compromising on quality or convenience. By connecting consumers with planet-positive choices, Greenbasket is on a mission to reduce waste, support ethical businesses, and create a greener future—one thoughtful purchase at a time. Shop smart. Shop green. Shop with Greenbasket.
      </p>

      <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2"> Our Mission</h2>
      <p className="text-gray-700 mb-4">
        At Greenbasket, our mission is to make sustainable shopping simple, accessible, and impactful. We strive to empower individuals to make eco-conscious choices by providing intelligent recommendations, transparent product information, and verified sustainable alternatives. Through the power of AI, we guide users toward ethical brands, low-impact products, and environmentally responsible decisions. Greenbasket is committed to reducing waste, supporting green businesses, and promoting mindful consumption. Our goal is to inspire a shift toward sustainability in everyday shopping—helping people shop with purpose while protecting the planet. Together, we can build a future where every purchase contributes to a healthier world.
      </p>
      
      <h2 className="text-2xl font-semibold text-green-600 mt-2 mb-2"> Our Future Plan</h2>
      <p className="text-gray-700 mb-4">Greenbasket aims to evolve into a comprehensive platform that transforms everyday shopping into a sustainable experience. Our future plans include launching a mobile app, expanding our network of eco-certified partners, and integrating advanced AI for personalized green product suggestions. We plan to introduce features like carbon footprint tracking, rewards for eco-friendly choices, and educational content to promote conscious consumerism. Greenbasket will also support local and ethical businesses through a dedicated marketplace. By combining smart technology with sustainability goals, our vision is to make eco-conscious shopping easy, rewarding, and impactful—driving positive change for individuals, communities, and the environment.</p>
      
      <h2 className="text-2xl font-semibold text-green-600 mt-2 mb-2"> What We Do</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Curate eco-certified, sustainable products</li>
        <li>Recommend environmentally friendly alternatives using AI</li>
        <li>Track and display product carbon footprint</li>
        <li>Educate users on ethical brands and green choices</li>
      </ul>

      <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2"> Why Choose Us?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Transparency in sustainability ratings</li>
        <li>Support for local and eco-conscious businesses</li>
        <li>Real-time smart suggestions for greener options</li>
        <li>User-friendly, AI-driven shopping experience</li>
      </ul>

      <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">Our Impact</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Reduced environmental footprint through informed shopping</li>
        <li>Increased awareness about responsible consumption</li>
        <li>Encouraged reuse, recycling, and minimalist practices</li>
      </ul>

      <p className="mt-6 text-gray-600 text-sm">
        Together, let's create a smarter and greener planet — one purchase at a time.
      </p>
    </div>
    
    <div className="max-w-6xl mx-auto p-4 mb-10 mt-10 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center"> Eco-Friendly Certifications</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-green-100">
            <tr>
              <th className="text-left p-3 text-sm font-semibold text-green-800">Certification Name</th>
              <th className="text-left p-3 text-sm font-semibold text-green-800">What It Ensures</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {certifications.map((cert, index) => (
              <tr key={index} className="hover:bg-green-50">
                <td className="p-3 font-medium text-gray-900">{cert.name}</td>
                <td className="p-3 text-gray-700">{cert.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    <h1 className="w-3/4 mx-auto text-center  m-10 p-1 font-bold text-2xl
        bg-green-300 rounded-4xl justify-center"><span className="text-blue-600">Promoting</span> Small Businesses <span className="text-yellow-400">||</span> Individual Enterprises <span className="text-yellow-400">||</span> and Handmade Products
        </h1>

      <Link to="/RealShop" target="parent"><div className="bg-yellow-300 w-110 mx-auto p-3 rounded-full"><h3 className="w-3/4 mx-auto text-center ">Service for Shopkeepers</h3>
      <h1 className="w-3/4 mx-auto text-center text-2xl">Huge quantity goods delivery </h1></div></Link>


       <h1 className="w-3/4 mx-auto text-center  m-4 p-1 font-bold 
        rounded-4xl justify-center text-3xl"><span className="text-green-600">Green</span><span className="text-yellow-400">Basket</span> </h1>
        </>
    );
}

export default About;