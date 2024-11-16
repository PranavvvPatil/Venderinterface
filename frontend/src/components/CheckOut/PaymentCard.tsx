import Plus from "../../assets/icons/small-plus.png";
import CircleFilled from "../../assets/icons/circlefilled.png";
import CircleEmpty from "../../assets/icons/circleEmpty.png";
import Amazon from "../../assets/checkout/amazon.png";
import Cash from "../../assets/checkout/cash.png";
import Paytm from "../../assets/checkout/paytm.png";
import {useState} from "react"

const PaymentCard = () => {

    const [selectedMethod,setSelectedMetod] = useState('')

    return(
        <div className="w-[22.5rem] h-[12.5rem] pl-6 pr-[9px] pt-3 pb-[11px] bg-[#f5f5dc] rounded-[15px] flex-col justify-center items-start gap-[17px] inline-flex">
          <div className="self-stretch justify-center items-center gap-[94px] inline-flex">
             <h4 className="text-black text-xs font-medium font-Poppins">Choose how to Pay</h4>
             <div className="w-[7.1rem] px-[5px] py-2.5 bg-[#fdfdf8] rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="rounded-[10px] justify-start items-start gap-[5.20px] inline-flex">
                   <img className="w-2 h-2 relative" src={Plus} alt='plus icon' />
                   <p className="w-[5.88rem] text-black text-[10.41px] font-normal font-Poppins underline leading-[7.02px] tracking-tight">Add New Method</p>
                </div>
             </div>
          </div>
          <div className="self-stretch h-[8.25rem] flex-col justify-start items-start gap-[15px] inline-flex">
             <div className="self-stretch justify-between items-center inline-flex">
                <div className="justify-start items-center gap-3 flex">
                   <img className="w-7 h-7" src={Amazon} />
                   <div className="w-[7.25rem] flex-col justify-start items-start gap-[3px] inline-flex">
                      <p className="self-stretch text-black text-xs font-normal font-Poppins ">Amazon Pay</p>
                      <p className="self-stretch text-black text-xs font-normal font-Poppins ">Wrap your items</p>
                   </div>
                </div>
                {
                    selectedMethod === 'amazon'? <img className="w-6 h-6 mr-5 relative" src={CircleFilled} /> : <img className="w-6 h-6 mr-5 relative" onClick={()=>setSelectedMetod('amazon')} src={CircleEmpty} />
                }
                
             </div>
             <div className="self-stretch justify-between items-center inline-flex">
                <div className="justify-start items-center gap-[13px] flex">
                   <img className="w-7 h-7" src={Paytm} />
                   <div className="w-[7.25rem] flex-col justify-start items-start gap-[3px] inline-flex">
                      <p className="text-center text-black text-xs font-normal font-Poppins ">Paytm****234</p>
                      <p className="self-stretch text-black text-xs font-normal font-Poppins ">Wrap your items</p>
                   </div>
                </div>
                {
                    selectedMethod === 'paytm'? <img className="w-6 h-6 mr-5 relative" src={CircleFilled} /> : <img className="w-6 h-6 mr-5 relative" onClick={()=>setSelectedMetod('paytm')} src={CircleEmpty} />
                }
             </div>
             <div className="self-stretch justify-between items-center inline-flex">
                   <div className="justify-center items-center gap-[13px] flex">
                      <img className="w-6 h-6" src={Cash} />
                      <p className="text-black text-xs font-normal font-Poppins ">Cash On Delivery</p>
                   </div>
                   {
                    selectedMethod === 'cash'? <img className="w-6 h-6 mr-5 relative" src={CircleFilled} /> : <img className="w-6 h-6 mr-5 relative" onClick={()=>setSelectedMetod('cash')} src={CircleEmpty} />
                   }
             </div>
          </div>
        </div>
    )
}

export default PaymentCard;