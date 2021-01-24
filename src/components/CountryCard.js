import React from 'react';
import './CountryCard.css';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../util/graphql';

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

function CountryCard({ dark, countryChar, region }) {
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    variables: {
      countryChar,
      region
    },
    fetchPolicy: 'no-cache'
  });

  if (loading)
    return <div className='loader' style={dark ? loader2 : loader1}></div>;
  if (error) return <h2>No Country Found</h2>;

  return data.countries.map((country, index) => (
    <Link
      key={index}
      className='country-card animate__animated animate__zoomIn'
      to={`/${country.name}`}
      style={dark ? variant2 : variant1}
    >
      <div>
        <img src={country.flag} alt='Country Flag' />
      </div>
      <div>
        <h3>{country.name}</h3>
        <p>
          <span>Population:</span>{' '}
          {country.population ? formatNumber(country.population) : 'N/A'}
        </p>
        <p>
          <span>Region:</span> {country.region ? country.region : 'N/A'}
        </p>
        <p>
          <span>Capital:</span> {country.capital ? country.capital : 'N/A'}
        </p>
      </div>
    </Link>
  ));
}

const variant1 = {
  backgroundColor: '#f9fcfd',
  boxShadow: '0 0 8px rgb(155, 164, 180, 0.3)'
};
const variant2 = {
  backgroundColor: '#394867',
  boxShadow: '0 0 8px rgba(89, 113, 161, 0.3)'
};

const loader1 = {
  border: '10px solid #f9fcfd',
  borderTop: '10px solid #394867',
  borderBottom: '10px solid #394867',
  margin: 'auto',
  marginTop: '100px'
};
const loader2 = {
  border: '10px solid #394867',
  borderTop: '10px solid #f9fcfd',
  borderBottom: '10px solid #f9fcfd',
  margin: 'auto',
  marginTop: '100px'
};

export default CountryCard;
