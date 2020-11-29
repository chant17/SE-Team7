import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "../Support/navbar.component"
import EditRole from "../Support/edit-role.component";
import CreateUser from "../Support/create-user.component";
import NewRoleList from "../Support/lists"

function Support() {
  return (
    <Router>
      <div className="container"> 
      <Navbar />
      <Route path="/" exact component={NewRoleList} />
      {/* <Route path="/" exact component={RolesList} /> */}
      <Route path="/edit/:id" component={EditRole} />
      {/* <Route path="/create" component={CreateRole} /> */}
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default Support;