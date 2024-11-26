import favoritepot from "../../assets/cart/favoritepot.png";
import emptycart from "../../assets/cart/emptycart.png";
import { useNavigate } from "react-router-dom";
type emptyPropsType = {
  tag: string;
};
export default function Empty({ tag }: emptyPropsType) {
  const img = tag == "empty" ? emptycart : favoritepot;
  const navigate = useNavigate();
  return (
    <div className="max-w-[1600px] w-full flex flex-col items-center justify-center mt-8 mb-40">
      <div className="max-w-[45rem] px-[5vw] sm:px-0 flex flex-col items-center gap-y-5">
        <div className="w-[12rem]">
          <img src={img} className="object-contain" />
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center ">
          {tag == "empty" ? (
            <h2 className="font-Poppins font-medium text-2xl text-center">
              Your Cart is <span className="text-[#FF4A4A]">Empty!</span>
            </h2>
          ) : (
            <h2 className="font-Poppins font-medium text-2xl text-center">
              Your Wishlist Awaits!
            </h2>
          )}
          <div className="text-sm sm:text-base text-center font-Poppins text-[#8C8C8C]">
            {tag == "empty"
              ? "Looks like you have not added anything to your cart. You will find a lot of intresting products on our 'Shop Plants' page."
              : "Add your favorite plants to your wishlist as you browse, and they will magically appear here."}
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-5 sm:flex-row w-full justify-evenly mt-5">
          <button 
            onClick={() => navigate("/shop")}
            className="bg-[#7AA262] max-w-[18rem] w-full py-3 rounded-full text-[#F3F3F3] font-medium font-Poppins text-center"
          >
            Continue Shopping
          </button>
          <button
            onClick={() =>
              tag == "empty" ? navigate("/favorite") : navigate("/cart")
            }
            className="bg-[#E8E8E8]  max-w-[18rem] w-full py-3 rounded-full  font-normal font-Poppins text-center"
          >
            {tag == "empty" ? " Go to Favorites" : "Go to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
