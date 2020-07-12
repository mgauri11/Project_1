import React from 'react';
//import todo from '../src/components/todo.jpg';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
//import Nav from "../src/components/Nav/Nav";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/home">
            <Home />
          </Route>
        <Route exact path="/login">
          <Login />
        </Route>   
      </div>
    </Router>
);
}

export default App;
