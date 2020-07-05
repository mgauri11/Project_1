import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'


render(
  <Router basename='/'>
    <App />
  </Router>,

  document.getElementById('root')
)


