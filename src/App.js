import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        {/* <Route path='/shop' component={ ShopPage } />
        <Route path='/signin' component={ SignInAndSignUpPage } /> */}
      </Switch>
    </div>
  );
};

export default App;
