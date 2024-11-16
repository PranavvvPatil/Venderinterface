
import edit from "../../assets/icons/edit.png";
import { useLocation, useNavigate } from "react-router-dom";

const AddressCart = () => {

   const location = useLocation();
   const navigate = useNavigate();


   const selectedAddress = location.state && JSON.parse(location.state.selectedAddress);

   console.log(selectedAddress) 
    return(
        <div className='w-[22.5rem] h-[12.5rem] pl-3 pr-1 pt-[22px] pb-11 bg-[#f5f5dc] rounded-[15px] justify-end items-center inline-flex'>
            <div className="w-[21.5rem] h-[8.4rem] flex-col justify-start items-start gap-[18px] inline-flex">
               <div className="pr-1.5 justify-start items-center inline-flex">
                  <div className="w-[21.13rem] self-stretch flex-col justify-start items-start gap-[10.41px] inline-flex">
                     <div className="self-stretch justify-start items-start gap-[10.82rem] inline-flex">
                        <div className="w-[4.75rem] justify-end items-center flex">
                           <h4 className="w-[19.8rem] text-black text-base font-medium font-Poppins">{selectedAddress.fullname}</h4>
                        </div>
                        <div className="w-[5.38rem] px-[5px] py-2.5 bg-[#fdfdf8] rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="rounded-[10px] justify-start items-start gap-[5.20px] inline-flex">
                               <img className="w-[8.67px] h-[8.67px]" src={edit} />
                               <button onClick={() => navigate(-1)} className="text-black text-[10.41px] font-normal font-Poppins underline leading-[7.02px] tracking-tight">Edit Address</button>
                            </div>
                        </div>
                  </div>
                    <p className="w-[21.13rem] text-black text-xs font-normal font-Poppins">{selectedAddress.street}, {selectedAddress.city}, {selectedAddress.state}, {selectedAddress.zipcode},{" "}
                    {selectedAddress.country}</p>
                  </div>
               </div>
               <div className="justify-start items-center gap-[8.67px] inline-flex">
                  <p className="text-black text-xs font-normal font-Poppins">Contact:</p>
                  <p className="text-black text-xs font-normal font-Poppins">{selectedAddress.contact}</p>
               </div>
               <div className="self-stretch justify-start items-center gap-[55.50px] inline-flex">
                  <div className="justify-start items-center gap-[8.67px] flex">
                     <p className="text-black text-xs font-normal font-Poppins">Email:</p>
                     <p className="text-black text-xs font-normal font-Poppins">{selectedAddress.email}</p>
                  </div>
               </div>
            </div>
        </div>
    )
}

export default AddressCart;