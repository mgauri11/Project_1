import React from 'react';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Todo from './components/todo'
import Contact from "./components/Contact"
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";


const App = () => {
  
       
  return (
    
      <Router>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login"  component={Login} />
            <Route path="/todo"  component={Todo} />
            <Route path="/Contact-us" component={Contact} />
          </Switch>
          
        </main>
      </Router>
     
    
);
}

export default App;
