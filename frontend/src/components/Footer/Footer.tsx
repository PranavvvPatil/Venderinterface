import { FaFacebook, FaLinkedin, } from "react-icons/fa6";
import { footerDetails } from "../../constants/footerDetails";
import FooterLinks from "./FooterLinks";
import { FaInstagram } from "react-icons/fa";
import emailmsg from "../../assets/footer/emailmessage.png";
type footerPropsType = {
  className?: string;
};
function Footer({ className }: footerPropsType) {
  return (
    <div
      className={`bg-[#F8FFEF]  flex flex-col lg:grid lg:grid-col lg:gap-x-10 py-14 max-w-[1600px] w-[98.7vw] h-[572px] mt-10 ${className}`}
    >
      <div className="flex flex-col  ">
        <h2 className="font-bold font-Poppins text-3xl text-left mt-[25px] ml-20 ">
          Shop Your Nursery
        </h2>
        <div className="flex gap-y-6 ml-20 items-center justify-start mt-[38px]">
       
       <div className=" w-[1290px] h-[350px] flex   justify-between ">

         <div className=" w-[643px] flex flex-row space-x-20">
         {footerDetails .filter(item => [1,2,3].includes(item.id)) // Filter for specific IDs
              .map(item => (
     <FooterLinks key={item.id} data={item} />
            ))}
         </div>
       
       <div className=" w-[425px] flex flex-col gap-y-8 sm:gap-y-14 justify-center lg:justify-start">
       <div className="relative flex flex-col items-center lg:items-start gap-y-6 min-[550px]:mb-5">
         <h1 className="text-black font-poppins text-[18px]  leading-[22px] font-semibold">Sign up for our Newsletter</h1>
         <div className="flex gap-x-3 mt-3">
         <input
           type="text"
           className="w-[326px] h-[48px] py-[15px] px-[20px] items-center rounded-[20px] bg-[#F7FAFF] border border-[#E8E8E8] text-[#4A4A4A] placeholder:text-[#A9A9A9] focus:outline-none"
           placeholder="Write your email here"
         />
         <button className="flex w-[77px] h-[48px] py-[15px] px-[20px] justify-center items-center gap-[10px] rounded-[20px] bg-[#7AA262] text-white">
         <img src={emailmsg} alt="Description" className="w-5 h-5" />
         </button>
         </div>
         <h1 className="text-[#0A0A0A] font-normal text-[16px] leading-[22px] font-poppins">For plant care tips, our featured plant of the week, exclusive offers and discounts</h1>
         <h1 className="text-[#2C2C2C] text-center font-semibold text-[18px] leading-[24px] font-Poppins mt-[50px]">
         Follow Us
           </h1>
           <div className="text-[#081417] flex gap-x-4 text-2xl  justify-end">
           <a
             href="https://www.facebook.com/"
             className="cursor-pointer no-underline"
           >
             <FaFacebook />
           </a>
           <a href="https://x.com/" className="cursor-pointer no-underline">
             <FaInstagram />
           </a>
           <a href="https://x.com/" className="cursor-pointer no-underline">
             <FaLinkedin />
           </a>
           
           
         </div>
         
       </div>
       
       
     </div>
    
       </div>
       
        </div>
    
      </div>
      
      
      <hr className="w-full bg-[#5F5F5F] h-[2px] mt-[20px] " />
        <div className="flex flex-row text-[#7C7C7C] font-poppins text-sm font-normal leading-normal justify-between mt-3 ">
          <div className=" flex  ml-6"><h1>Copyright@</h1> <h1>2024HanviTec Solutions Private Limited ,All rights reserved</h1></div>
          <div className="flex flew-row gap-x-2 mr-6">
          <a href="#" className="text-[#7C7C7C] font-poppins text-sm font-normal leading-normal">
             Term of use
          </a>

          <a href="#" className="text-[#7C7C7C] font-poppins text-sm font-normal leading-normal">
             Cookie Policy
          </a>

          <a href="#" className="text-[#7C7C7C] font-poppins text-sm font-normal leading-normal">
             Privacy Policy
          </a>

          </div>

        </div>
        
      
    </div>
  );
}

export default Footer;