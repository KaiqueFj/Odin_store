
import React from 'react';
import HomePage from './components/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'
import './styles/global/App.css'


const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)
function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>

    </div>
  );
}

export default App;

//route create the path 
// switch get the path and just render whats in the path
