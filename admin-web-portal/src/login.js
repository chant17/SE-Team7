import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import login from './components/login.component';

function App() {
  return (
    <Router>
      <div className="container">
      

      <Route path="/" exact component={login} />
      
      </div>
    </Router>
  );
}

export default App;