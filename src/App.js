
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import SingIn_SingUp from './components/SingIn-SingUp/SingIn-SingUp.components'
import HomePage from './components/homepage/homepage.component';
import ShopPage from './components/shop/shop.component.jsx'

import './styles/global/App.css'



function App() {
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

export default App;

//route create the path 
// switch get the path and just render whats in the path
