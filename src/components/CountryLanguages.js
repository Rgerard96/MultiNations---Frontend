import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LANGUAGE } from '../util/graphql';
import { convert_accented_characters } from '../util/characterConvert';

function CountryLanguages(props) {
  const countryName = convert_accented_characters(props.countryName);
  const { loading, error, data } = useQuery(GET_LANGUAGE, {
    variables: {
      countryName
    }
  });

  if (loading) return <p></p>;
  if (error) return <p></p>;

  const language = data.getLanguage[0].name;

  return (
    <p>
      <span>Language:</span> {language ? language : 'N/A'}
    </p>
  );
}

export default CountryLanguages;
