import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='page'>
        
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route path='/signin' component={ SignInAndSignUpPage } />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
