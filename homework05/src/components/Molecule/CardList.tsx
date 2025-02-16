import Card from '@/components/Atom/Card';
import data from '@/data/data.json';

function CardList() {
  return (
    <div className="grid grid-rows-2 grid-cols-3 w-full h-full gap-10 mt-10">
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            type={
              item.type as
                | '불꽃'
                | '물'
                | '풀'
                | '전기'
                | '에스퍼'
                | '노말'
                | '악'
            }
            name={item.name}
          ></Card>
        );
      })}
    </div>
  );
}

export default CardList;
