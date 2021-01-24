import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import './HomePage.css';
import CountryCard from '../components/CountryCard';

function HomePage(props) {
  const [countryChar, setCountryChar] = useState('');
  const [region, setRegion] = useState('All');

  function onSearch(data) {
    setCountryChar(data);
    setRegion('All')
  }
  function getRegion(data) {
    setRegion(data);
    setCountryChar('')
  }

  return (
    <div className='home-page container'>
      <div className='home-bar'>
        <SearchBar dark={props.dark} onSearch={onSearch} />
        <FilterBar dark={props.dark} getRegion={getRegion} />
      </div>
      <div className='countries-container'>
        <CountryCard
          dark={props.dark}
          region={region}
          countryChar={countryChar}
        />
      </div>
    </div>
  );
}

// const variant1 = {
//   backgroundColor: '#f9fcfd',
//   boxShadow: '0 0 8px rgb(155, 164, 180, 0.3)'
// };
// const variant2 = {
//   backgroundColor: '#394867',
//   boxShadow: '0 0 8px rgba(89, 113, 161, 0.3)'
// };


export default HomePage;
