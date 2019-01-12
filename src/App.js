import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          {/* TD : Use Same Spinner Effect for our application logo 
          Just change the src binding here with the image that 
          we want as the logo. */}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React 16.7 Alpha Skeleton 
          </p>
          <p className="App-link">
            This is the Boilerplate for React Applications.
          </p>
        </header>
      </div>;
  }
}

export default App;
