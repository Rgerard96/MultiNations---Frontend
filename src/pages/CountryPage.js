import React from 'react';
import './CountryPage.css';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY } from '../util/graphql';
import { convert_accented_characters } from '../util/characterConvert';
import CountryBorders from '../components/CountryBorders'
import CountryCurrencies from '../components/CountryCurrencies';
import CountryLanguages from '../components/CountryLanguages';

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

function CountryPage(props) {
  const countryName = convert_accented_characters(
    props.match.params.countryName
  );

  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: {
      countryName
    },
    fetchPolicy: 'no-cache'
  });

  if (loading)
    return <div className='loader' style={props.dark ? loader2 : loader1}></div>;
  if (error) return <h2 style={{ marginTop: '100px' }}>No Country Found</h2>;

  return data.country.map((country, index) => (
    <div
      key={index}
      className='country container animate__animated animate__zoomIn'
    >
      <Link
        className='back-btn'
        style={props.dark ? variant2 : variant1}
        to='/'
      >
        <i className='fas fa-arrow-left'></i> Back
      </Link>
      <div className='country-container'>
        <div style={props.dark ? variant2 : variant1}>
          <img src={country.flag} alt='Country Flag' />
        </div>
        <div>
          <h1>{country.name}</h1>
          <div className='country-info'>
            <div className='info-1'>
              <p>
                <span>Native Name:</span>{' '}
                {country.nativeName ? country.nativeName : 'N/A'}
              </p>
              <p>
                <span>Population:</span>{' '}
                {country.population ? formatNumber(country.population) : 'N/A'}
              </p>
              <p>
                <span>Region:</span> {country.region ? country.region : 'N/A'}
              </p>
              <p>
                <span>Sub Region:</span>{' '}
                {country.subregion ? country.subregion : 'N/A'}
              </p>
              <p>
                <span>Capital:</span>{' '}
                {country.capital ? country.capital : 'N/A'}
              </p>
            </div>
            <div className='info-2'>
              {country.topLevelDomain
                ? country.topLevelDomain.map((item, index) => (
                    <p key={index}>
                      <span>Top Level Domain:</span>{' '}
                      {country.topLevelDomain ? item : 'N/A'}
                    </p>
                  ))
                : 'N/A'}
              <CountryCurrencies countryName={country.name}/>
              <CountryLanguages countryName={country.name}/>
            </div>
          </div>
          <div className='border-countries'>
            <h2>Border Countries</h2>
            <div className='border-countries-items'>
              <CountryBorders countries={country.borders} dark={props.dark} v1={variant1} v2={variant2}/>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default CountryPage;
