
import dash from '../../assets/vender/sidebar/grid_view.png';
import category from '../../assets/vender/sidebar/category.png';
import order from '../../assets/vender/sidebar/list_alt_check.png';
import bid from '../../assets/vender/sidebar/shoppingmode.png';
import ship from '../../assets/vender/sidebar/package.png';
import paid from '../../assets/vender/sidebar/paid.png';
import report from '../../assets/vender/sidebar/monitoring.png';
import help from '../../assets/vender/sidebar/help.png';
import log from '../../assets/vender/sidebar/logout.png';
const Sidebar = () => {
  return (
    <div className="w-80 h-screen bg-[#DDF2D0] flex flex-col text-gray-700">
      {/* Header */}
      <div className="p-[50px] text-black font-poppins text-[20px] font-bold leading-normal text-center">
        Shopyournursery
     </div>

      {/* Menu Items */}
      <nav className="flex-grow">
        <ul className="space-y-4 p-4">
        <li className="flex items-center space-x-6 p-2 rounded-xl hover:bg-[#9FDD79] cursor-pointer">
            <img src={dash} alt="" />
            <span className="text-[#3A3A3A] font-poppins text-[20px] font-normal leading-normal">Dashboard</span>
          </li>
          <li className="flex items-center space-x-6 p-2 rounded-2xl hover:bg-[#9FDD79] cursor-pointer">
            <img src={category} alt="" />
            <span className="text-[#3A3A3A] font-poppins text-[20px] font-normal leading-normal">Inventory Management</span>
          </li>
          <li className="flex items-center space-x-6 p-2 rounded-2xl hover:bg-[#9FDD79] cursor-pointer">
            <img src={order} alt="" />
            <span className="text-[#3A3A3A] font-poppins text-[20px] font-normal leading-normal">Order Fulfillment</span>
          </li>
          <li className="flex items-center space-x-6 p-2 rounded-2xl hover:bg-[#9FDD79] cursor-pointer">
            <img src={bid} alt="" />
            <span className="text-[#3A3A3A] font-poppins text-[20px] font-normal leading-normal">Bidding</span>
          </li>
          <li className="flex items-center space-x-6 p-2 rounded-2xl hover:bg-[#9FDD79] cursor-pointer">
            <img src={ship} alt="" />
            <span className="text-[#3A3A3A] font-poppins text-[20px] font-normal leading-normal">Shipment & Logistics</span>
          </li>
          <li className="flex items-center space-x-6 p-2 rounded-2xl hover:bg-[#9FDD79] cursor-pointer">
            <img src={paid} alt="" />
            <span className="text-[#3A3A3A] font-poppins text-[20px] font-normal leading-normal">Payment & Tracking</span>
          </li>
          <li className="flex items-center space-x-6 p-2 rounded-2xl hover:bg-[#9FDD79] cursor-pointer">
            <img src={report} alt="" />
            <span className="text-[#3A3A3A] font-poppins text-[20px] font-normal leading-normal">Reports & Insights</span>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 space-y-8">
        <div className="flex items-center space-x-6 text-gray-600 hover:text-gray-800 cursor-pointer">
          <img src={help} alt="" />
          <span className="text-[#3A3A3A] font-poppins text-[20px] font-normal leading-normal">
         Help and Support
        </span>
        </div>
        <div className="flex items-center space-x-6 text-[#D63C3C] hover:text-red-800 cursor-pointer">
          <img src={log} alt="" />
          <span className="font-poppins text-[20px] font-normal leading-normal">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;