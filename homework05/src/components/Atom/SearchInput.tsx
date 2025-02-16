import { useEffect, useRef, useState } from 'react';
import { Search } from '@mynaui/icons-react';
import throttle from '@/utils/throttle';

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
}

function SearchInput({ query, setQuery }: SearchInputProps) {
  const [inputData, setInputData] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  useEffect(() => {
    handleFocus();
  }, []);

  const handleSubmit = () => {
    console.log('검색어:', query);
    setQuery(query);
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setQuery(target.value);
    // console.log('query : ', query);
  };

  const handleThrottle = throttle(handleChange, 300);
  return (
    <>
      <form action="" className=" flex justify-center items-center w-full h-20">
        <div className="relative">
          <label className="sr-only">Search</label>
          <input
            ref={searchInputRef}
            type="text"
            className=" border-2 rounded-full border-green-500 w-2xl p-2 pl-6"
            defaultValue={query[0]}
            onChange={handleThrottle}
          ></input>
          <button
            type="submit"
            className=" bg-emerald-600  text-white rounded-full absolute right-1.5 p-2 top-1.5"
            onClick={handleSubmit}
          >
            <Search size={20}></Search>
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchInput;
