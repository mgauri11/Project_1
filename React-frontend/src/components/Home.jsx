import React from 'react'
import axios from 'axios'
import { Icon } from "@blueprintjs/core";
import {Carousel} from 'react-bootstrap'
import './home.css'
import '././believe.jpg'

const Home = () => {

 /* const testing = () => {
    axios.get(`https://localhost:3000/`)
    .then(res => {
      console.log(res);
      console.log("Success")
    })
    .catch((error) => {
      console.log(error)
      console.log("failed")
    })
  } */


    return(
      <div className='home-page'>
        <div>
          <img src='../../believe.jpg' alt='home icon' />
        </div>
        <div classname='header-home'>
          <h1>Login</h1>
          <Icon icon="person" iconSize={20} />
        </div>
        <div  classname='header-home'>
          <h1>Register</h1>
          <Icon icon="user" iconSize={20} />
        </div>
        <div  classname='header-home' >
          <h1>About-us</h1>
          <Icon icon="people" iconSize={20} />
        </div>
        


      </div>

       
    )
}

export default Home