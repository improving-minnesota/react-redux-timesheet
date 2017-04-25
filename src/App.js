import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects/Projects';
import Employees from './components/employees/Employees';
import Timesheets from './components/timesheets/Timesheets';
import Navigation from './components/nav/Navigation';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <Route path={"/"}>
            <Switch>
              <Route path="/projects" component={Projects}/>
              <Route exact path="/employees" component={Employees}/>
              <Route path="/employees/:user_id/timesheets" component={Timesheets}/>
              <Redirect to="/employees"/>
            </Switch>
          </Route>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;