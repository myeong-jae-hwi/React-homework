import { useState } from 'react';
import SearchInput from '../Atom/SearchInput';
import CardList from '../Molecule/CardList';

function SearchPage() {
  const [searchData, setSearchData] = useState('');
  console.log(searchData);

  return (
    <div className="w-full h-full p-10">
      <SearchInput query={searchData} setQuery={setSearchData}></SearchInput>
      <CardList query={searchData}></CardList>
    </div>
  );
}

export default SearchPage;
