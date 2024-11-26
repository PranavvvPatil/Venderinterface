
import { RiSearch2Line } from "react-icons/ri";
import notification from '../../assets/vender/Component 2.png';
import account from '../../assets/vender/iconamoon_profile-circle-light.png';
import arrow from '../../assets/vender/arrow_drop_down (1).png';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow p-6">
    {/* Left Section: Dashboard */}
    <div className="text-black font-medium text-2xl">
      <h1>Dashboard</h1>
    </div>
  
    {/* Center Section: Search Bar */}
    <div className="flex-grow flex justify-center">
    <div className="flex items-center bg-[#E8E8E8] px-4 py-2 rounded-3xl w-[400px]">
    <input
    className="placeholder:text-[#A6A6A6] bg-transparent focus:outline-none w-full text-[#A6A6A6] text-xs font-normal"
    placeholder="Search products and more.."
/>
      <RiSearch2Line className="text-xl" />
    </div>
  </div>
  
    {/* Right Section: Profile Info */}
    <div className="flex items-center ">
      <button className="p-1 rounded-full">
         <img src={notification} alt="" />
      </button>
      <button className="inline-flex items-center justify-center p-[10px_14px] border border-[#B5B5B5] rounded-[20px] space-x-8">
      <span className="text-black font-poppins text-xs font-normal leading-normal">
    Jerome Bell
</span>
            <img src={account} alt="Account" className="ml-2" />
        </button>
     
      
      <button className="p-2  rounded-full">
        <img src={arrow} alt="" />
      </button>
    </div>
  </div>
  
  );
};

export default Navbar;