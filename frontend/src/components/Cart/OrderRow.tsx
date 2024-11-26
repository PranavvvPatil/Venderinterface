type propType = {
  title: string;
  price?: number;
  titleStyles?: string;
  priceStyles?: string;
  qty?: number;
};
export default function OrderRow({
  title,
  price,
  titleStyles,
  priceStyles,
  qty,
}: propType) {
  return (
    <div className="flex justify-between">
      <div className={`text-[#515151] font-Poppins ${titleStyles}`}>
        {title}
      </div>
      <div className={`${priceStyles}`}>
        {price == 0 && `${price}`}
        {price ? `${price}` : qty}
      </div>
    </div>
  );
}
