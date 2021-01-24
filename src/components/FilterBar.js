import React, { useState } from 'react';
import './FilterBar.css';

function FilterBar(props) {
  const [menu, setMenu] = useState(false);

  function openFilter() {
    setMenu(!menu);
  }

  function onFilter(e) {
    props.getRegion(e.target.innerText);
    setMenu(!menu);
  }

  const lightDarkMode = {
    backgroundColor: props.dark ? '#394867' : '#f9fcfd',
    boxShadow: props.dark
      ? '0 0 8px rgba(89, 113, 161, 0.3)'
      : '0 0 8px rgb(155, 164, 180, 0.3)'
  };

  const turnArrow = {
    transform: menu ? 'rotate(-180deg)' : 'initial'
  };

  const openMenu = {
    // height: menu ? 'max-content' : '0',
    top: menu ? '58px' : '30px',
    opacity: menu ? '1' : '0'
  };
  return (
    <div className='filterbar' style={lightDarkMode}>
      <div className='filter' onClick={openFilter}>
        <p>Filter by Region</p>
        <i className='fas fa-chevron-up' style={turnArrow}></i>
      </div>
      <div className='filter-menu' style={{ ...lightDarkMode, ...openMenu }}>
        <ul>
          <li onClick={onFilter}>All</li>
          <li onClick={onFilter}>Africa</li>
          <li onClick={onFilter}>Americas</li>
          <li onClick={onFilter}>Asia</li>
          <li onClick={onFilter}>Europe</li>
          <li onClick={onFilter}>Oceania</li>
        </ul>
      </div>
    </div>
  );
}

export default FilterBar;
