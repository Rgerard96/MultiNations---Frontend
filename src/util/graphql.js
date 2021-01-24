import { gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query CountriesQuery($countryChar: String, $region: String) {
    countries(countryChar: $countryChar, region: $region) {
      name
      population
      region
      capital
      flag
    }
  }
`;
const GET_COUNTRY = gql`
  query CountryQuery($countryName: String) {
    country(countryName: $countryName) {
      name
      population
      region
      capital
      flag
      subregion
      nativeName
      borders
      topLevelDomain
    }
  }
`;
const GET_BORDERS = gql`
  query BordersQuery($bordersName: String) {
    borders(bordersName: $bordersName) {
      name
    }
  }
`;
const GET_CURRENCY = gql`
  query CurrencyQuery($countryName: String) {
    getCurrency(countryName: $countryName) {
      name
    }
  }
`;
const GET_LANGUAGE = gql`
  query LanguageQuery($countryName: String) {
    getLanguage(countryName: $countryName) {
      name
    }
  }
`;

export { GET_COUNTRIES, GET_COUNTRY, GET_BORDERS, GET_CURRENCY, GET_LANGUAGE };
