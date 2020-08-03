import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'
import SearchForm from './components/SearchForm/SearchForm';

//Pages
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <>
      <Router>
        <div className="container-global">
          <Header />
          <SearchForm />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search/:q" component={SearchPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
