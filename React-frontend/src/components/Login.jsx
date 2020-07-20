
import React, { useState } from "react";
import { Form, Col, Row, FormGroup,Button } from "react-bootstrap";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = e => {
        e.preventDefault();

        const userData = {
            email,
            password
        };
        axios
            .post("/api/auth/register_login", userData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    };

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Row>
                        <Col xs="10" sm="11">
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={e => {
                                    setEmail(e.target.value);
                                    console.log(email);
                                }}
                                required
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Row>
                        
                        <Col xs="10" sm="11">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>
                
                <FormGroup>
                    <Button type="submit">Submit</Button>
                </FormGroup>
            </Form>

        </div>
      
    );
};

export default Login;