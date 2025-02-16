import { useEffect, useState } from 'react';
import Badge from '@/components/Atom/Badge';

const END_POINT = 'https://pokeapi.co/api/v2/pokemon';

interface CardProps {
  type: '불꽃' | '물' | '풀' | '전기' | '에스퍼' | '노말' | '악';
  name: string;
  id: number;
}

function Card({ id, type, name }: CardProps) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${END_POINT}/${id}`);
        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          setImage(data.sprites.other['official-artwork'].front_default);
          // console.log(image);
        }
      } catch (error) {
        console.log('데이터를 불러오는데 실패했습니다');
      }
    }

    fetchData();
  }, []);

  return (
    <div className="inline-flex flex-col items-center border m-1 w-full h-full cursor-pointer bg-white/30 rounded-2xl shadow-lg backdrop-blur-[9.5px] border-white/60">
      <span className="text-2xl font-bold">{name}</span>
      {image ? (
        <img src={image} alt={name} className="w-32 h-32 mt-2" />
      ) : (
        <p>Loading...</p>
      )}
      <Badge type={type} />
    </div>
  );
}

export default Card;
