import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { URI } from './uri';

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache()
});

function App() {
  const [dark, setDark] = useState(false);

  function darkMode() {
    setDark(!dark);
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App' style={dark ? variant2 : variant1}>
          <NavBar darkMode={darkMode} dark={dark} />
          <Route exact path='/' render={() => <HomePage dark={dark} />} />
          <Route
            exact
            path='/:countryName'
            render={(props) => <CountryPage {...props} dark={dark} />}
          />
        </div>
      </Router>
    </ApolloProvider>
  );
}

const variant1 = {
  backgroundColor: '#f1f6f9',
  color: '#14274e'
};
const variant2 = {
  backgroundColor: '#14274e',
  color: '#f1f6f9'
};

export default App;
