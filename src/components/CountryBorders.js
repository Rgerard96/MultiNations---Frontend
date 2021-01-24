import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_BORDERS } from '../util/graphql';

function CountryBorders({ countries, dark, v1, v2 }) {
  const x = countries.toString();
  const bordersName = x.replace(/,/g, ';');

  const { loading, error, data } = useQuery(GET_BORDERS, {
    variables: {
      bordersName
    }
  });

  if (loading) return <p></p>;
  if (error) return <p></p>;

  return data.borders.map((country, index) => (
    <Link key={index} style={dark ? v2 : v1} to={`/${country.name}`}>
      {country.name}
    </Link>
  ));
}

export default CountryBorders;
