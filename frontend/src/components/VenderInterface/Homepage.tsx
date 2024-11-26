
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


import Overview from "./Overview";


function Homepage () {
  return (
    <div className="flex  h-screen">
      <div className="w-[350px] h-[982px]">
      <Sidebar />
      </div>
      
      <div className="flex-grow  flex flex-col h-[982px]">
        <Navbar />
        <Overview/>
      </div>
    </div>
  );
}

export default Homepage;