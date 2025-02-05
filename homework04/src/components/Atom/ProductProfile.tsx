interface ProductProfileProps {
  title: string;
  price: number;
  image: string;
}

function ProductProfile({ title, price, image }: ProductProfileProps) {
  return (
    <div className="inline-flex items-center">
      <img src={image} alt={title} className="rounded-full w-24" />
      <div className="flex flex-col m-4 truncate ">
        <h2 className="">{title}</h2>
        <p className="font-bold">{price} 원 </p>
      </div>
    </div>
  );
}

export default ProductProfile;
