import React, { Component } from 'react';
import HR from "./HR_outline";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

class HR_admin extends Component{
    render(){
        return(
            <div className="container-fluid d flex justify-content-center">
                <div className = "Title"> HR Admin Page</div>
                <div className="row">
                    <div className = "col-md-4">
                        <HR title="New Hire On-boarding"/>
                    </div>
                    <div className = "col-md-4">
                        <HR title="Benefits"/>
                    </div>
                    <div className = "col-md-4">
                        <HR title="Payroll"/>
                    </div>
                    <div className = "col-md-4">
                        <HR title="Off-boarding"/>
                    </div>
                    <div className = "col-md-4">
                        <HR title="HR Reports"/>
                    </div>
                </div>
                <div className="navbar-item d-flex justify-content-center">
                    <Button variant="outline-light" onClick={event => window.location.href="/login"}>Logout</Button>{' '}
                </div>
            </div>
        )
    }
}
export default HR_admin;