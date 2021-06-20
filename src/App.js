import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

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
        console.log('x');
      })
    }, []
  );

  return (
    <div className='app'>
      <Header currentUser={ currentUser } />
      <div className='page'>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route exact path='/signin'
            render={ () => currentUser ? (
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

export default App;
