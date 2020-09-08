import React from 'react'
import './home.css'
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/login");
    }

    const handleContact = () => {
        history.push("/Contact-us");
    }

    return (
        <div class="grid-container">
            <div className='item1'>
                <h1 >Todo-List Application</h1>
            </div>
            <div className='item2'>
                <img src={require('../components/todo.jpg')} alt='cool image coming soon!!!! ;)' ></img>
            </div>
            <div className="button">
                <button type="button" onClick={handleClick}>
                    Login
                </button>
            </div>
            <div className="button">
                <button type="button" onClick={handleContact}>
                    Contact-Us
                </button>
            </div>
    
        </div>
    ) 
}

export default Home;