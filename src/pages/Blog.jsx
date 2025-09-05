// src/pages/Blog.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Blog() {
    const navigate = useNavigate();

    const blogposts = [
      {
        id: 1,
        title: " Smarter Choices, Greener Planet: The Rise of Sustainable Shopping Assistants",
        summary: " Sustainable shopping assistants are transforming how we buy by making eco-conscious choices simple and accessible. These AI-powered tools guide consumers to select products with lower environmental impact, highlighting eco-certifications, ethical sourcing, and carbon footprints. They personalize suggestions based on user values like vegan, plastic-free, or local products. By automating research and comparison, they reduce greenwashing confusion and encourage mindful consumption. As climate concerns rise, these assistants empower people to shop smarter — supporting a greener planet with every purchase. This shift marks a new era of intelligent, responsible retail powered by technology and driven by sustainability. ",
        date: "2025-07-18 ",
      },
      {
        id: 2,
        title: "Why Sustainable Shopping Matters in 2025  ",
        summary: "In 2025, sustainable shopping is more crucial than ever as climate change, resource depletion, and waste pollution escalate. Consumers are increasingly aware that their purchasing habits directly impact the planet. Choosing eco-friendly, ethically sourced, and low-carbon products helps reduce environmental damage and supports responsible businesses. With advanced tools like AI-driven shopping assistants, making sustainable choices has become easier and more informed. Governments and brands are also pushing for transparency and circular economy models. In this pivotal year, every purchase is a vote for the future — and sustainable shopping empowers individuals to drive real change through conscious consumption. ",
        date: "2025-07-15 ",
      },
      {
        id: 3,
        title: " The Future of Eco-Conscious Retail: AI Meets Sustainability",
        summary: "he future of retail is being redefined at the intersection of artificial intelligence and sustainability. As environmental awareness deepens, consumers demand more transparency, ethical sourcing, and eco-friendly products. AI is stepping in to meet these expectations — analyzing supply chains, product lifecycles, and customer preferences to deliver smarter, greener choices. From intelligent shopping assistants that suggest low-impact alternatives to platforms that track carbon footprints and flag greenwashing, AI empowers shoppers to make informed, sustainable decisions with ease. Retailers are also leveraging AI to optimize inventory, reduce waste, and improve energy efficiency across operations. As this technology continues to evolve, it will enable hyper-personalized eco-shopping experiences while supporting global efforts to combat climate change. The fusion of AI and sustainability marks a turning point in retail, where innovation not only drives convenience and profit but also contributes to a healthier planet. Eco-conscious retail is no longer optional — it’s the future. ",
        date: " 2025-07-13",
      },
    ];

  return (
    <>
    <h2 className="text-3xl font-bold p-6 mb-2">Sustainability Blog</h2>
    <div className="m-6 pl-4  border rounded-xl bg-green-50 text-gray-700"><strong className="text-xl font-semibold text-black">Sustainable shopping assistants</strong> are emerging as a powerful tool to empower consumers in making environmentally conscious purchasing decisions. These tools utilize technology to provide information on a product's sustainability, helping consumers choose items that align with their values and contribute to a greener planet.
      <h2 className="font-semibold text-xl mt-3 text-black">assistants are gaining traction:</h2>
      <p>1. Increased Consumer Awareness: There's a growing global awareness of the environmental impact of consumption, with a significant rise in online searches for sustainable goods. Consumers are actively seeking ways to reduce their carbon footprint and support brands with sustainable practices.</p>
      <p>2. Demand for Transparency: Consumers want to know the environmental impact of the products they buy. Sustainable shopping assistants provide this transparency by offering details on a product's sustainability, including materials used, packaging, and carbon footprint.</p>
      <p>3. Access to Information: These assistants aggregate data from various sources, providing users with a comprehensive view of a product's sustainability features. This includes information on certifications, eco-friendly materials, and ethical sourcing.</p>
      <p>4. Empowering Choices: By providing easy access to information, sustainable shopping assistants empower consumers to make informed decisions and choose products that align with their environmental values</p>
      <p>5. Driving Business Practices: The rise of eco-conscious consumers is also influencing businesses to adopt more sustainable practices. Companies are under increasing pressure to demonstrate their commitment to sustainability and transparency.</p>
      <p className="text-sm text-gray-500">2025-07-18</p>
    </div>

    <div className="p-6">
      {blogposts.map(post => (
        <div key={post.id} className="mb-6 p-4 border rounded-xl shadow-md  bg-green-50">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-gray-700">{post.summary}</p>
          <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        </div>
      ))}
    </div>
        
     <h1 className="w-3/4 mx-auto text-center  m-10 p-1 font-bold text-2xl
        bg-green-300 rounded-4xl justify-center"><span className="text-blue-600">Promoting</span> Small Businesses <span className="text-yellow-400">||</span> Individual Enterprises <span className="text-yellow-400">||</span> and Handmade Products</h1>

      <Link to="/RealShop" target="parent"><div className="bg-yellow-300 w-110 mx-auto p-3 rounded-full"><h3 className="w-3/4 mx-auto text-center ">Service for Shopkeepers</h3>
      <h1 className="w-3/4 mx-auto text-center text-2xl">Huge quantity goods delivery </h1></div></Link>
      
      <h1 className="w-3/4 mx-auto text-center  m-4 p-1 font-bold rounded-4xl justify-center text-3xl"><span className="text-green-600">Green</span><span className="text-yellow-400">Basket</span> </h1>
      
    </>  
  );
}

export default Blog;