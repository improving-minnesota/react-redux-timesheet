import React, { Component } from 'react';
import './App.css';
import Hello from './hello/Hello';
import Navigation from './nav/Navigation';
import {BrowserRouter} from 'react-router-dom';
import {Route, IndexRoute} from 'react-router';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <Route path={"/"}>
            <div>
              <Route path={"/projects"} component={Hello}/>
              <Route path={"/employees"} component={Hello}/>
              <Route path={"/timesheets"} render={() => (
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
              )}/>
            </div>
          </Route>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
