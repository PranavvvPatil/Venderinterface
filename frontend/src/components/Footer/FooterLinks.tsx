import { footerDetailsProps } from "../../constants/footerDetails";

type propsType = {
  data: footerDetailsProps;
};

export default function FooterLinks({ data }: propsType) {
  return (
    <div className="flex flex-col gap-y-3  max-[550px]:text-center min-[550px]:w-fit text-nowrap ">
      <h2 className="font-Poppins font-semibold text-[#0A0A0A]-600 text-xl">
        {data.title}
      </h2>
      {data.items.map((item) => (
        <a
          href={item.link}
          key={item.id}
          className="text-gray-700 font-poppins text-base font-normal leading- tracking-tight"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}