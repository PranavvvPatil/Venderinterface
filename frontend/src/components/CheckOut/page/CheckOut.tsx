import AddressCart from "../AddressCart";
import PaymentCard from "../PaymentCard";
import ProductCart from "../ProductCart";


const CheckOut = () => {
    return(
        <div className="flex justify-start">
          <div className="flex flex-col ">
            <h1 className="text-black text-base font-medium font-Poppins leading-normal tracking-wide mt-[1.625rem]">Check Out</h1>
            <div className="w-[54rem] h-[12.5rem] mt-[1.875rem] mb-[5rem] opacity-80 justify-start items-center inline-flex gap-[4.315rem]">       
               <AddressCart />
               <PaymentCard />
            </div>
             <ProductCart />
          </div>
          <div className="w-[401px] h-[696px] bg-neutral-100 rounded-[8.97px]">
            CheckOut
          </div>
        </div>
    )
}

export default CheckOut;