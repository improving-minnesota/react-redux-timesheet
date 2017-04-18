import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleContainer from './components/PeopleContainer';
import {BrowserRouter, Route, Link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <Link to="/"> Home</Link>
            <Link to="/people"> People</Link>
            <Route exact={true} path={"/"} render={() => (
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            )}/>
            <Route path={"/people"} component={PeopleContainer}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
