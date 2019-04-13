import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Projects from "./projects/Projects";
import Employees from './employees/Employees';
import Timesheets from './timesheets/Timesheets';
import Navigation from './nav/Navigation';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
          <Navigation />
            <Switch>
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/employees' component={Employees} />
              <Route exact path='/timesheets' component={Timesheets} />
              <Redirect to='/employees' />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
