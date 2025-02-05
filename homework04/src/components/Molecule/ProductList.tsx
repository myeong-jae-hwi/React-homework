import ProductProfile from '@/components/Atom/ProductProfile';
import CountButton from '@/components/Atom/CountButton';
import Footer from '../Atom/Footer';
import data from '@/data.json';
import { useState } from 'react';

function ProductList() {
  const [totalPrice, setTotalPrice] = useState(0);

  // 함수 반환ㄴ하는 함수
  const handleClick = (price: number) => {
    setTotalPrice((prev) => prev + price);
    console.log(totalPrice);
  };

  return (
    <>
      <ul>
        {data.map((item, idx) => {
          return (
            <li key={idx} className="flex justify-between items-center m-6">
              <ProductProfile
                title={item.title}
                price={item.price}
                image={item.image}
              ></ProductProfile>
              <CountButton
                price={item.price}
                max={item.count}
                changeCount={handleClick}
              ></CountButton>
            </li>
          );
        })}
      </ul>
      <Footer price={totalPrice}></Footer>
    </>
  );
}

export default ProductList;
