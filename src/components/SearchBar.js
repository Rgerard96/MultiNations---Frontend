import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  
function onChange(e) {
    props.onSearch(e.target.value);
  }

  return (
    <div className='searchbar' style={props.dark ? variant2 : variant1}>
      <i className='fas fa-search'></i>
      <input
        type='text'
        placeholder='Search for a country...'
        className={props.dark ? 'colorVariant2' : 'colorVariant1'}
        onChange={onChange}
      />
    </div>
  );
}

const variant1 = {
  backgroundColor: '#f9fcfd',
  boxShadow: '0 0 8px rgb(155, 164, 180, 0.3)'
};
const variant2 = {
  backgroundColor: '#394867',
  boxShadow: '0 0 8px rgba(89, 113, 161, 0.3)'
};

export default SearchBar;
