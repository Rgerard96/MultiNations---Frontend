import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(props) {
  return (
    <div className='navbar' style={props.dark ? variant2 : variant1}>
      <div className='container'>
        <Link to='/'>
          <h3>
            Multi<span className='gradient-text'>Nations</span>
          </h3>
        </Link>
        <div onClick={props.darkMode}>
          <i className={props.dark ? 'fas fa-moon' : 'far fa-moon'}></i>
          <p>{props.dark ? 'Light' : 'Dark'} Mode</p>
        </div>
      </div>
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

export default NavBar;
