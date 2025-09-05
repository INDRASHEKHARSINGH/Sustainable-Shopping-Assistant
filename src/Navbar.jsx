
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = ({ onAccountClick }) => {
  return (
    <>
        <div className='fixed top-0 mb-15 bg-white w-full h-15   flex items-center justify-between z-30'>
          <h1 className='p-5 pt-5 font-bold text-3xl'><span className='text-green-600 font-serif text-[40px]'>Green</span><span className='text-yellow-400 font-serif text-[35px]'>Basket</span></h1>
          
          <input type="text" placeholder='Search...' className='bg-gray-200 w-4/12 rounded-md h-10 pl-2' />
          
          <NavLink to="/Home" target='_parent' className='pl-20% font-light  text-gray-800 hover:text-black'><span className='hover:underline'> Home</span></NavLink>
          <NavLink to="/Categories" target='_top'  className='w-20%  font-light  text-gray-800 hover:text-black'><span className='hover:underline'> Categories</span></NavLink>
          <NavLink to="/Cart" target='_parent' className='w-20% font-light  text-gray-800 hover:text-black'><span className='hover:underline'>Cart  </span></NavLink>
          <NavLink to="/Blog" target='_parent' className='pl-20%  font-light  text-gray-800 hover:text-gray-800'><span className='hover:underline'>Blog</span></NavLink>
          <NavLink to="/about" target='_parent' className='pl-20%  font-light  text-gray-800 hover:text-black'><span className='hover:underline'> About</span></NavLink> 
          
          <button
            onClick={onAccountClick}
              className='pl-20%  mr-10   text-gray-800 hover:text-black'>
                <span>Profile</span>
                </button>
           
        </div>
    </>
  );
};


export default Navbar;