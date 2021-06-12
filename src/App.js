
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import SingIn_SingUp from './components/SingIn-SingUp/SingIn-SingUp.components'
import HomePage from './components/homepage/homepage.component';
import ShopPage from './components/shop/shop.component.jsx'
import { auth, createUser } from './firebase/fireabase.utils'

import './styles/global/App.css'



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  //life cycle of functions where the user can login and logout, explained

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUser(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {

    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/singin' component={SingIn_SingUp} />

        </Switch>

      </div>
    );

  }

}

export default App;

//route create the path 
// switch get the path and just render whats in the path
