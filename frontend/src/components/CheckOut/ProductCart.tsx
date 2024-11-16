import Trash from "../../assets/icons/trash.png";
import Plus from "../../assets/icons/small-plus.png";
import Minus from "../../assets/icons/smallminus.png";
import { useLocation } from "react-router-dom";
import {useState} from "react"

const ProductCart = () => {

      const location = useLocation();

        const initialProducts =
        location.state &&
        JSON.parse(location.state.products).filter(
          (product: any) => product.count != 0
        ).map((product: any) => ({
          ...product,
          totalPrice: product.totalPrice || product.count * product.price,
        }));
      
        const [productList, setProductList] = useState(initialProducts || []);

        const handleDelete = (index) => {
          const updatedProducts = [...productList];
          updatedProducts.splice(index, 1);
          setProductList(updatedProducts);
        };

        const handleRemoveAll = () => {
          setProductList([]);
        };
      
        const handleIncrement = (index) => {
          const updatedProducts = [...productList];
          const item = updatedProducts[index];
          const newQuantity = item.count + 1;
          const updatedTotalPrice = parseFloat((newQuantity * item.price).toFixed(2));
          updatedProducts[index] = { ...item, count: newQuantity, totalPrice: updatedTotalPrice };
          setProductList(updatedProducts);
        };
        
        const handleDecrement = (index) => {
          const updatedProducts = [...productList];
          const item = updatedProducts[index];
          if (item.count > 1) {
            const newQuantity = item.count - 1;
            const updatedTotalPrice = parseFloat((newQuantity * item.price).toFixed(2)); 
            updatedProducts[index] = { ...item, count: newQuantity, totalPrice: updatedTotalPrice };
          }
          setProductList(updatedProducts);
        };

    return(
      <div className='flex flex-col justify-center items-center'>

        <div className="w-[50.325rem] h-6 mb-[2.375rem] mr-[1.575rem] justify-between items-center inline-flex">
          <div className="justify-center items-end gap-2.5 flex">
            <h4 className="text-black text-base font-medium font-Poppins leading-normal tracking-wide">Cart</h4>
            <p className="text-[#bcbcbc] text-sm font-normal font-Poppins ">{productList.length} items</p>
          </div>
          <div onClick={handleRemoveAll} className="justify-center cursor-pointer items-center gap-2.5 flex">
            <h4 className="text-[#d03434] text-sm font-normal font-Poppins ">Remove all</h4>
            <img className="w-6 h-6 relative text-[#d03434] " src={Trash} />
          </div>
        </div>

        {
       productList &&
       productList.map((item: any, index: number)=>{
       return(
        <div Key={index} className="w-[48.44rem] h-[6.63rem] py-2.5 border-b border-[#d4d3d3] justify-between items-center inline-flex">
           <div className="h-[5.19rem] justify-start items-center gap-2.5 flex">
              <img className="w-[1.875rem] h-[1.875rem] relative" onClick={() => handleDelete(index)} src={Trash} />
              <div className="justify-start items-center gap-[1.875rem] flex">
              <img className="w-[3.875rem] h-[4.878rem] rounded-[5px]" src={item.img} />
                 <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                 <h4 className="text-center text-black text-[1.25rem] font-semibold font-Poppins ">{item.title}</h4>
                    <div className="flex-col justify-start items-start gap-[5px] flex">
                       <div className="justify-start items-center gap-[5px] inline-flex">
                       <p className="text-center text-[#939393] text-sm font-normal font-Poppins ">{item.selectedSize}</p>
                       </div>
                       <div className="justify-start items-center gap-[5px] inline-flex">
                          <p className="text-center text-[#d03434] text-base font-medium font-Poppins line-through leading-normal tracking-wide">$250</p>
                          <p className="text-center text-black text-base font-medium font-Poppins leading-normal tracking-wide">{item.price}$ Per item</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="w-[4.3125rem] h-[5.375rem] flex-col justify-center mr-[2rem] items-center gap-[1.625rem] inline-flex">
              <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 p-[5px] bg-[#f2f2f2] rounded-[10px] shadow justify-center items-center flex">
                <button onClick={() => handleDecrement(index)}><img className="w-2.5 h-2.5 relative flex-col justify-start items-start flex" src={Minus} /></button>
              </div>
              <p className="text-black text-sm font-normal font-Poppins">{item.count}</p>
              <div className="w-5 h-5 p-[5px] bg-[#f2f2f2] rounded-[10px] shadow justify-center items-center flex">
                <button onClick={() => handleIncrement(index)}><img className="w-2.5 h-2.5 relative flex-col justify-start items-start flex" src={Plus} /></button>
              </div>
              </div>
              <p className="self-stretch text-black text-xl font-semibold font-Poppins ">${item.totalPrice} </p>
           </div>
        </div>
        )
    })
        }
      </div>
    )
}

export default ProductCart;