import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    // if authenticated, redirect to the dashboard 
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="parent col-md-12 text-center">
                <h1 id="crypto__title"className="display-3 mb-4">
                  <span class="large__heading__shine">Crypto</span>Investors</h1>
                <h3 className="white">
                  {' '}
                  Cryptocurrency based blockchain system for understanding 
                  the market trends of the cryptocurrencies based on day,
                  week and month. 
                </h3>
                <hr />
                <Link to="/register" className="btn btn-lg btn-dark mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
