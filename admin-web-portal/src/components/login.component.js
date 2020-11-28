import React, { Component } from "react";
import axios from 'axios';

export default class login extends Component{
  constructor(props){
      super(props);

      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        username: '',
        password: '',
        success: false,
        redirectUrl: '',
        error: ""
      } 
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password

    }

    axios.post('http://localhost:5000/users/', user) //This is where it post to the endpoint
      .then(res =>
        this.setState({
          success: res.data.success,
          redirectUrl: res.data.redirectUrl
        })
      )
      .catch(err => this.setState(this.error));
    

    this.setState({ //were sending the username //maybe change later
      username: '',
      password: ''
    })
    
    if(this.state.success){
      this.props.history.push({
        pathname: this.state.redirectUrl,
        state: {username: this.state.username}
      })
    }
    
  }


  render() {
    
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                name = "username"
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group"> 
            <label>Password: </label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.password}
                name = "password"
                onChange={this.onChangePassword}
                />
          </div>
          <br></br>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>

        <p>
          {this.state.success}
        </p> 
      </div>
    )
  }
}

