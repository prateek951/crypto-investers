import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import "./App.css";
import CryptoProvider from "./CryptoProvider";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
// import Register from "./pages/forms/Register";
// import Login from "./pages/forms/Login";
// import Dashboard from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <CryptoProvider>
            <Navbar/>
            <Settings/>
          </CryptoProvider>
        </Layout>
      </div>
    );
  }
}

export default App;
