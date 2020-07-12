import React from 'react';
import todo from '../src/components/todo.jpg';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <div className="App">
        
        <Container>
          <img src={todo} className="App-logo" alt="logo" />
          <Route exact path="/home">
              <Home />
            </Route>
          <Route exact path="/login">
            <Login />
          </Route>

        </Container>
          
         
      </div>
    </Router>
);
}

export default App;
