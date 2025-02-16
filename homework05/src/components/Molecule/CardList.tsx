import Card from '@/components/Atom/Card';
import data from '@/data/data.json';

function CardList({ query }: { query: string }) {
  const words = query
    .split(' ')
    .filter(Boolean)
    .map((word) => word.toLowerCase().trim());

  const filteredList = data.filter((item) => {
    return words.every((word) => {
      if (item.name.includes(word) || item.type.includes(word)) {
        return true;
      } else {
        return false;
      }
    });
  });

  return (
    <div className="grid grid-rows-2 grid-cols-3 w-full h-full gap-10 mt-10">
      {filteredList.map((item) => {
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
