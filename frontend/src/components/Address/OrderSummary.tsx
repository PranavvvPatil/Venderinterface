import { useEffect, useState } from "react";
import OrderRow from "../Cart/OrderRow";
import SummaryCard from "./SummaryCard";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  const [priceSummary, setPriceSummary] = useState<any>(
    location.state ? JSON.parse(location.state.priceSummary) : null
  );
  const [couponCode, setCouponCode] = useState<string>("");
  const [selectedCoupon, setSelectedCoupon] = useState<string | null>(null);
  const companyCoupons = [
    { code: "WELCOME10", discount: 10 },
    { code: "FREESHIP", discount: 15 },
    { code: "SAVE20", discount: 20 },
  ];

  useEffect(() => {
    if (location.state == null) {
      navigate("/shop-plants");
    }
  }, [location, navigate]);

  const products =
    location.state &&
    JSON.parse(location.state.products).filter(
      (product: any) => product.count !== 0
    );

  const handleApplyCoupon = () => {
    let discount = 0;

    // Check for company-provided coupon
    if (selectedCoupon) {
      const coupon = companyCoupons.find((c) => c.code === selectedCoupon);
      if (coupon) discount = coupon.discount;
    }

    // Check for custom coupon
    if (couponCode && !selectedCoupon) {
      if (couponCode === "SPECIAL30") {
        discount = 30;
      } else {
        alert("Invalid coupon code.");
        return;
      }
    }

    if (priceSummary) {
      setPriceSummary({
        ...priceSummary,
        couponDiscount: discount, 
        totalAmount:
          priceSummary.totalPrice + priceSummary.shippingCharges - discount,
      });
    }
  };

  return (
    <div className="flex flex-col px-10 bg-[#F5F5F5] max-w-[30rem] shadow-md w-full pt-10 pb-12">
      <h1 className="font-Poppins text-center text-xl font-medium">
        Order Summary
      </h1>
      <div className="flex flex-col gap-y-8 mt-8">
        {products &&
          products.map((product: any, index: number) => (
            <SummaryCard key={index} product={product} />
          ))}
      </div>


      


      <div className="flex flex-col gap-y-4 mt-12">
        <OrderRow
          title={"Sub total"}
          titleStyles="text-black"
          price={priceSummary && `$${priceSummary.totalPrice}`}
        />
        <OrderRow
          title={"Shipping charges"}
          titleStyles="text-black"
          price={priceSummary && `$${priceSummary.shippingCharges}`}
        />


        <div className="flex flex-col gap-y-4 ">
        <h2 className="font-poppins text-black text-base font-normal leading-normal ">Apply Coupon</h2>
        <select
          className="p-2 border border-gray-300 rounded"
          value={selectedCoupon || ""}
          onChange={(e) => {
            setSelectedCoupon(e.target.value);
            setCouponCode(""); // Clear custom input if selecting a company coupon
          }}
        >
          <option value="">Select a coupon</option>
          {companyCoupons.map((coupon) => (
            <option key={coupon.code} value={coupon.code}>
              {coupon.code} - {coupon.discount}% off
            </option>
          ))}
        </select>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => {
              setCouponCode(e.target.value);
              setSelectedCoupon(null); 
            }}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button
          onClick={handleApplyCoupon}
          className="bg-[#7AA262] text-white p-2  mt-2 rounded-full"
        >
           <span className="text-[#F3F3F3] font-poppins custom-font-size font-semibold leading-normal">
           Apply Coupon
</span>
        </button>
      </div>
        <OrderRow
          title={"Coupon Discount"}
          titleStyles="text-black"
          price={
            priceSummary?.couponDiscount > 0
              ? `-$${priceSummary.couponDiscount}` 
              : `$0` 
          }
        />
        <div className="bg-black h-[0.05838rem] w-full"></div>
        <OrderRow
          title={"Grand Total"}
          titleStyles="text-black font-semibold"
          priceStyles="font-semibold"
          price={priceSummary && `$${priceSummary.totalAmount}`}
        />
      </div>
    </div>
  );
}
