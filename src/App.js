import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/forms/Register";
import Login from "./pages/forms/Login";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/auth/login' exact component={Login}/>
          <Route path='/auth/register' exact component={Register}/>
          <Route path='/dashboard' exact component={Dashboard}/>
        </Switch>
      </div>
    );
  }
}

export default App;
