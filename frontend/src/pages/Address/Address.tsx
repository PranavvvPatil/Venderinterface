import { useState,useRef } from "react";
import AddressCard from "../../components/Address/AddressCard";
import AddressForm from "../../components/Address/AddressForm";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useLocation, useNavigate } from "react-router-dom";
import PlusIcon from "../../svgIcons/PlusIcon";
import { addressList as addressArray } from "../../constants/addressList";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export default function Address({ flag }: any) {
  console.log(API_BASE_URL);
  const location = useLocation();
  const products =
    location.state &&
    JSON.parse(location.state.products).filter(
      (product: any) => product.count != 0
    );
  const priceSummary =
    location.state && JSON.parse(location.state.priceSummary);
  const navigate = useNavigate();
  const [addressList, setAddressList] = useState(addressArray);
  const [selectAdd, setSelectAdd] = useState(0);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const handleEdit = (index: number) => {
    setEdit(true);
    setEditData(addressList[index]);
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const handleAdd = () => {
    setEdit(false);
  };
  const makePayment = async () => {
    const body = {
      products: products,
      shippingCharges: priceSummary.shippingCharges,
    };
    const headers = {
      "content-Type": "application/json",
    };
    const res = await fetch(
      `${API_BASE_URL}/api/payments/create-checkout-session`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const resBody = await res.json();
    window.location.href = resBody.url;
  };

  const scrollContainer = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div>
        <div className="flex flex-col max-w-[50rem] gap-y-4 w-full border-none">

          <div className="relative flex items-center">
            <button
              onClick={() => scrollContainer("left")}
              className="absolute left-0 z-10 bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300"
            >
              <ChevronLeftIcon className="text-gray-700" />
            </button>
          
            <div
              ref={containerRef}
              className="flex gap-x-3 overflow-x-auto no-scrollbar px-8 w-full"
            >
              {addressList?.map((address, index) => (
                <AddressCard
                  key={address.id}
                  address={address}
                  setSelectAdd={setSelectAdd}
                  flag={index === selectAdd}
                  index={index}
                  handleEdit={handleEdit}
                />
              ))}
            </div>
          
            <button
              onClick={() => scrollContainer("right")}
              className="absolute right-0 z-10 bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300"
            >
              <ChevronRightIcon className="text-gray-700" />
            </button>
          </div>

          <div>
            <AddressForm
              setAddressList={setAddressList}
              setSelectAdd={setSelectAdd}
              index={addressList.length}
              edit={edit}
              editData={editData}
              handleAdd={handleAdd}
            />
          </div>
        </div>
        {!flag && (
          <div className="mt-3 flex gap-x-8 justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="flex justify-center items-center"
            >
              <ChevronLeftIcon />
              Back
            </button>
            <button
              onClick={() =>
                navigate("/checkout", {
                  state: {
                    products: JSON.stringify(products),
                    priceSummary: JSON.stringify(priceSummary),
                    selectedAddress: JSON.stringify(addressList[selectAdd])
                  },
                })
              }
              //onClick={makePayment}
              // onClick={() =>
              //   navigate("/orderplaced", {
              //     state: {
              //       products: JSON.stringify(products),
              //       priceSummary: JSON.stringify(priceSummary),
              //     },
              //   })
              // }
              className="bg-[#7AA262] w-full py-2 rounded-full text-[#F3F3F3] font-medium font-Poppins text-center max-w-[20rem]"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
