import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import Header from './components/header/header.component'
import SingIn_SingUp from './components/SingIn-SingUp/SingIn-SingUp.components'
import HomePage from './components/homepage/homepage.component';
import ShopPage from './components/shop/shop.component.jsx'
import { auth, createUser } from './firebase/fireabase.utils'
import { currentUser } from './redux/user/user.actions'

import './styles/global/App.css'



class App extends React.Component {

  //life cycle of functions where the user can login and logout, explained

  unsubscribeFromAuth = null

  componentDidMount() {
    const { currentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUser(userAuth);

        userRef.onSnapshot(snapShot => {
          currentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      currentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {

    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/singin' component={SingIn_SingUp} />

        </Switch>

      </div>
    );

  }

}

// dispatch is a way to redux know that 
//every object you pass is going to be an actionable
//object that is going to pass to every reducer
const mapDispatchToProps = dispatch => ({
  currentUser: user => dispatch(currentUser(user))
});

export default connect(null, mapDispatchToProps)(App);

//route create the path 
// switch get the path and just render whats in the path
