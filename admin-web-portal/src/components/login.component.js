import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class login extends Component{
    
constructor(props){
    super(props);
    
}

    render() {
        return (
            <div className="Login">
              <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button block size="lg" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          );
    }
}

