import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENCY } from '../util/graphql';
import { convert_accented_characters } from '../util/characterConvert';

function CountryCurrencies(props) {
  const countryName = convert_accented_characters(
    props.countryName
  );
  const { loading, error, data } = useQuery(GET_CURRENCY, {
    variables: {
      countryName
    }
  });

  if (loading) return <p></p>;
  if (error) return <p></p>;

  const currency = data.getCurrency[0].name;

  return (
    <p >
      <span>Currency:</span> {currency ? currency : 'N/A'}
    </p>
  );
}

export default CountryCurrencies;
