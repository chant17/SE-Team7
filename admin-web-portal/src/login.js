import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import login from './components/login.component';

function App() {
  return (
    <Router>
      <div className="container">
      
      <Route path="/login" component={login} />
      {/* <Route
              exact
              path="/admin"
              component={admin} //TODO: add component
              //TODO: transfer data
              ///render={(props) => (
              ///  <Question1 userId={this.state.id} {...props} />
              ///)}
            /> */}
      </div>
    </Router>
  );
}

export default App;