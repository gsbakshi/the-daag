import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {
  auth,
  createUserProfileDocument,
  // addCollectionsAndDocuments
} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

const App = ({
  setCurrentUser,
  currentUser,
  // collectionsArray
}) => {

  useEffect(
    () => {
      auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot(snapShot => setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }));
        }

        setCurrentUser(userAuth);
        // addCollectionsAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
      })
    }, [
    setCurrentUser,
    // collectionsArray
  ]
  );

  return (
    <div className='app'>
      <Header />
      <div className='page'>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route exact path='/checkout' component={ CheckoutPage } />
          <Route exact path='/signin'
            render={
              () => currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              ) }
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray : selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
