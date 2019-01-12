import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Validator from "validator";

export default class Login extends Component {
  // state
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };
  handleStringChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  handleLogin = e => {
    e.preventDefault();
    //validate the creds
    const { data: user } = this.state;
    const errors = this.validate(user);
    if (Object.keys(errors).length === 0) {
      //no errors perfect reach out to server and login
      //axios call will go here
    }
  };
  validate = ({ email, password }) => {
    const errors = {};
    if (!Validator.isEmail(email)) errors.mailError = "Invalid email";
    if (!password) errors.passError = "Cannot be blank";
    return errors;
  };
  render() {
      const { data, errors }  = this.state;
    return (
     <form onSubmit={this.handleLogin}>
            {errors.global && (
                <div className="alert alert-danger">{errors.global}</div>
            )}
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"
                onChange={this.handleStringChange}
                value={data.email}
                className={errors.email ? "form-control is-invalid" : "form-control"}
            />
            <div className="invalid-feedback">{errors.email}</div>
        </div> 
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"
                onChange={this.handleStringChange}
                value={data.password}
                className={errors.password ? "form-control is-invalid" : "form-control"}
            />
            <div className="invalid-feedback">{errors.password}</div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
            Login
        </button>
        <small className="form-text text-center">
            <Link to="/register">Register</Link> if you do not have an account <br/>
        </small>
     </form>   
    )
  }
}
