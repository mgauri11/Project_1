import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/Home';

const App = () => {

  
  
  return (
    <div>
      <Switch>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/' component={Home}></Route>

      </Switch>
    </div>
  );
}

export default App;
