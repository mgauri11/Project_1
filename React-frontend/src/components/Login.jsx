import React, { useState } from "react";
import axios from "axios";
import Todo from './todo'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    
    const handleSubmit = (event) => {
        history.push("/todo");
        event.preventDefault();
        
        const userData = {
            email,
            password
        }
        axios.post("/api/auth/register_login", userData)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
            console.log(err.response);
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input 
                type="text" 
                name="email"   
                onChange= {event => {
                    setEmail(event.target.value);
                }} />
            </label>
            <label>
                Password:
                <input 
                type="text" 
                name="password"   
                onChange={event => setPassword(event.target.value)} />
            </label>
            <button type="submit" value="Submit" >Submit</button>
           
        </form>
    );
};
export default Login;