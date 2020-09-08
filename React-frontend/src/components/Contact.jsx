import React, { useState } from "react";
import '../components/Nav/contact.css'
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";

//import { useHistory } from 'react-router-dom';

const Contact = () => {
   
    return (
      <div class="wrapper">
        <div class="box header">
         
         
        </div>
        <div class="box sidebar">

          <Link>Home</Link> 
          <Link>Login</Link> 
        </div>
        <div class="box sidebar2">Sidebar 2</div>
        <div class="box content">
          <img src={require('../components/todo.jpg')} alt='cool image coming soon!!!! ;)'></img>
          
        </div>
        <div class="box footer">Footer</div>
      </div>
    );
}

export default Contact;