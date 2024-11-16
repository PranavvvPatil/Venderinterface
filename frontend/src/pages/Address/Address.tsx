import { useState } from "react";
import AddressCard from "../../components/Address/AddressCard";
import AddressForm from "../../components/Address/AddressForm";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
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

  return (
    <div>
      <div>
        <div className="flex flex-col max-w-[50rem] gap-y-4 w-full border-none">
          <div className="flex gap-x-3 overflow-scroll no-scrollbar">
            {addressList?.map((address, index) => (
              <AddressCard
                key={address.id}
                address={address}
                setSelectAdd={setSelectAdd}
                flag={index == selectAdd ? true : false}
                index={index}
                handleEdit={handleEdit}
              />
            ))}
            <div className="flex justify-center items-center">
              <button
                className="flex justify-center items-center"
                onClick={handleAdd}
              >
                <PlusIcon size={"48"} />
              </button>
            </div>
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
