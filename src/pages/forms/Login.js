import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
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
    this.setState({ errors: errors });
  };
  validate = ({ email, password }) => {
    const errors = {};
    if (!Validator.isEmail(email)) errors.mailError = "Invalid email";
    if (!password) errors.passError = "Password cannot be blank";
    return errors;
  };
  render() {
    const { data: user, errors } = this.state;
    return (
      <form onSubmit={this.handleLogin}>
        <div className="col-lg-6 col-lg-offset-3 col-lg-offset-3">
          {errors.global && (
            <div className="alert alert-danger">{errors.global}</div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.handleStringChange}
              value={user.email}
              className={
                errors.mailError ? "form-control is-invalid" : "form-control"
              }
            />
            <div className="invalid-feedback">{errors.mailError}</div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleStringChange}
              value={user.password}
              className={
                errors.passError ? "form-control is-invalid" : "form-control"
              }
            />
            <div className="invalid-feedback">{errors.passError}</div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
          <small className="form-text text-center">
            Already Registered? <Link to="/auth/login">Login</Link>
          </small>
        </div>
      </form>
    );
  }
}
