import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Toys(){
    const navigate = useNavigate();

    const products = [
        {
         
         
        },
    ];
    return (
        <>
         <div className="w-full bg-gray-100 mr-2  rounded-xl shadow-md grid sm:grid-cols-3 md:grid-cols-6 border border-gray-200 hover:shadow-lg transition duration-300">
            {products.map(product =>(
                <div className="w-55  m-5 bg-white overflow-hidden   rounded-xl shadow-md overflow-nowrap border border-gray-200 hover:shadow-lg transition duration-300">
                  <img src={product.image} alt={product.name} className="w-full h-45 object-cover" />
                  <div className="p-3">
                    <h3 className="text-lg font-semibold text-center text-black">{product.name}</h3>
                    <p className="text-black font-serif font-semibold text-md ">Price: <span>  ₹{ product.price}</span>  </p>
                    <p className="text-black font-serif font-semibold text-sm ">Rating: {product.rating}</p>
                    <p className="text-black font-serif font-semibold text-sm ">{product.shortdescription}</p>
                    <p className="text-black font-serif font-semibold text-sm ">Natural:{product.natural}</p>
                    <p className="text-black font-serif font-semibold text-sm ">Type:{product.type}</p>
                  
                    <div className="grid sm:grid-cols-2">
                        <Link to="/BuyNow" target="_parent"><div  className="text-sm w-22 mt-6  bg-gray-500 text-white px-2 py-2 rounded-4xl hover:bg-yellow-400 transition">
                        Shop Now
                    </div></Link>
                  
                  {/*
                    <Link to="/AddToCart" target="_parent"><div  className="text-sm w-22 mt-6  bg-gray-500 text-white px-2 py-2 rounded-4xl hover:bg-green-500 transition">
                       Add to cart
                    </div></Link> */}
                  
                    </div>
                   </div>
                </div>
            ))}
        </div>
        </>
    );
} 

export default Toys;