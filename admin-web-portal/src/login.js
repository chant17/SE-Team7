import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import login from './components/login.component';
import Support from "./components/Admin_Pages/Support_Admin";
import Finance from "./components/Admin_Pages/Finance_Admin.js";
import Sales from "./components/Admin_Pages/Sales_Admin";
import HR from "./components/Admin_Pages/HR";

function App() {
  return (
    <Router>
      <div className="container">
      <Route path="/" exact component={login} />
      <Route path="/HR" component={HR} />
      <Route path="/SupportAdmin" component={Support} />
      <Route path="/Finance" component={Finance} />
      <Route path="/Sales" component={Sales} />
      </div>
    </Router>
  );
}

export default App;