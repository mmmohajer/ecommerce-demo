import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/pages/auth/Login/Login';
import Register from './components/pages/auth/Register/Register';
import Home from './components/pages/Home/Home';

const App = () => {
  return(
    <Switch>
      <Route exact path = "/" component = { Home } />
      <Route exact path = "/login" component = { Login } />
      <Route exact path = "/register" component = { Register } />
    </Switch>
  )
}


export default App;
