import { useState } from 'react';

interface CountButtonProps {
  max: number;
  changeCount: (count: number) => void;
  price: number;
}

function CountButton({ max, changeCount, price }: CountButtonProps) {
  const [count, setCount] = useState(1);

  const plus = () => {
    if (count < max) {
      setCount(count + 1);
      changeCount(price);
    }
  };

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
      changeCount(-price);
    }
  };

  return (
    <div className="count-button border border-gray-300 inline-flex bg-gray-100 rounded-full text-gray-700 min-w-20 h-10 justify-evenly">
      <button
        onClick={plus}
        disabled={count === max ? true : false}
        className="font-bold"
      >
        +
      </button>
      <span>{count}</span>
      <button onClick={minus} className="font-bold">
        -
      </button>
    </div>
  );
}

export default CountButton;
