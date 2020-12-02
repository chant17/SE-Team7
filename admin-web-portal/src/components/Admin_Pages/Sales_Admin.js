import React from "react";
import Button from 'react-bootstrap/Button';
import Sales_page from "./Sales_Outline";

function Sales() {
  return (
      
    <div className="container-fluid d flex justify-content-center">
      <h1>Sales Admin Page</h1>

                <div className="row">
                    <div className = "col-md-4">
                        <Sales_page title="Sales Reports"/>
                    </div>
                    <div className = "col-md-4">
                        <Sales_page title="Sales Leads"/>
                    </div>
                    <div className = "col-md-4">
                        <Sales_page title="Sales Demo"/>
                    </div>
                </div>
                <br></br>
                <div className="navbar-item d-flex justify-content-center">
                  
                    <Button variant="outline-light" onClick={event => window.location.href="/login"}>Logout</Button>{' '}
                </div>
            </div>
  );
}
export default Sales;
