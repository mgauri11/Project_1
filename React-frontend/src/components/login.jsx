import React, { useState } from 'react'
import axios from 'axios'
import './style.css';
import { Button, Card,FormGroup, InputGroup } from "@blueprintjs/core";



const Login = () => {

    /*const [values, setValues] = useState({filename: "" , description: ""});

    const handleSubmit = async event => {
        try {
          event.preventDefault();
    
          const data = new FormData()
          data.append('filename', values.filename)
          data.append('description', values.description)
          
          //const token = localStorage.getItem('jwt')
          
          const response = await axios({
            method: 'post',
            url: '/login',
            data,
            })
          console.log(response);
          //setVideoId(response.data.video._id);
          alert('User added')
        } catch(error) {
          console.log(error);
          alert('Failed adding user')
        }
      }

      const handleChange = (name) => (event) => {
        const {value} = event.target
        setValues ({
          ...values, 
          [name] :value
        });
      } */
    
    


    return (
      <div>
        <h1>Working</h1>
      </div>
      /*
      <div className="app">
        <Card>
          <form>
            <FormGroup
            label="Enter Username"
            labelFor="text-input"
            labelInfo="(required)">
              <InputGroup id="text-input"
              placeholder='Username'
              value={values.filename}
              onChange={handleChange('filename')}
              />
            </FormGroup>
            <FormGroup 
            label="Password"
            labelFor="text-input"
            labelInfo="(required)">
              <InputGroup id="text-input"
                placeholder='Password'
                value={values.description}
                onChange={handleChange('description')}  
  
                />
            </FormGroup>
            <Button className="bp3-intent-primary" onChange={handleSubmit}>Submit</Button>

          </form>
            
        </Card>
      </div>*/

       
    )

}

export default Login


