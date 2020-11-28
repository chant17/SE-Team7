import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import RolesList from "./components/roles-list.component";
import EditRole from "./components/edit-role.component";
import CreateRole from "./components/create-role.component";
import CreateUser from "./components/create-user.component";
import NewRoleList from "./components/lists"

function Support() {
  return (
    <Router>
      <div className="container"> 
      <Navbar />
      <Route path="/" exact component={NewRoleList} />
      {/* <Route path="/" exact component={RolesList} /> */}
      <Route path="/edit/:id" component={EditRole} />
      <Route path="/create" component={CreateRole} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default Support;