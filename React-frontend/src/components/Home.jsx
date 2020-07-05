import React from 'react'
import axios from 'axios'

const Home = () => {

    const testing = () => {
        axios.get(`https://localhost:3000/home`)
          .then(res => {
            console.log(res);
            console.log("Success")
          })
          .catch((error) => {
            console.log(error)
            console.log("failed")
            })
    } 


    return(
        <div>
            <h1>Home page!!!!</h1>
        </div>
    )
}

export default Home