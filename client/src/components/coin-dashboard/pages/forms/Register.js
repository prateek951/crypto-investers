import React, { Component } from "react";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
export default class Register extends Component {
  //state
  state = {
    data: {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    },
    errors: {}
  };
  handleStringChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  handleRegister = e => {
    e.preventDefault();
    //tap the creds
    const { data: creds } = this.state;
    const errors = this.validate(creds);
    if (Object.keys(errors).length === 0) {
      //reach out to server to register the user
      //axios async call
    }
    this.setState({ errors: errors });
  };
  validate = data => {
    const errors = {};

    //Add more validations if required or outsource the validation functionality
    //to add more validations
    if (!isEmail(data.email)) errors.emailError = "Invalid E-mail";
    if (!data.username) errors.usernameError = "Username cannot be blank";
    if (!data.password) errors.passwordError = "Password cannot be blank";
    if (!data.confirmPassword)
      errors.confirmPasswordError = "Confirm Password cannot be blank";
    return errors;
  };

  render() {
    //Pull from state
    const { data: user, errors } = this.state;
    return (
      <form onSubmit={this.handleRegister}>
        <div className="col-lg-6 col-lg-offset-3">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.handleStringChange}
              value={user.email}
              className={
                errors.emailError ? "form-control is-invalid" : "form-control"
              }
            />
            <div className="invalid-feedback">{errors.emailError}</div>
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={this.handleStringChange}
              value={user.username}
              className={
                errors.usernameError
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            <div className="invalid-feedback">{errors.usernameError}</div>
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
                errors.passwordError
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            <div className="invalid-feedback">{errors.passwordError}</div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={this.handleStringChange}
              value={user.confirmPassword}
              className={
                errors.confirmPasswordError
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            <div className="invalid-feedback">
              {errors.confirmPasswordError}
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>

          <small className="form-text text-center">
            Already Registered? <Link to="/auth/login">Login</Link>
          </small>
        </div>
      </form>
    );
  }
}
