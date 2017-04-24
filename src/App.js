import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects/Projects';
import Employees from './components/employees/Employees';
import Timesheets from './components/timesheets/Timesheets';
import Navigation from './components/nav/Navigation';
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
              <Route path={"/projects"} component={Projects}/>
              <Route path={"/employees"} component={Employees}/>
              <Route path={"/timesheets"} component={Timesheets}/>
            </div>
          </Route>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
