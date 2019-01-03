import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import Projects from "./projects/Projects";
import Employees from './employees/Employees';
import Timesheets from './timesheets/Timesheets';
import Navigation from './nav/Navigation';
import ProjectsDetail from './projects/ProjectsDetail';
import TimesheetsDetail from './timesheets/TimesheetsDetail';
import EmployeeDetail from './employees/EmployeeDetail';
import TimeunitsDetail from './timeunits/TimeunitsDetail';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <div className="container">
            <Switch>
              <Route exact path="/projects" component={Projects} />

              <Route exact path="/employees" component={Employees} />

              <Route exact path="/timesheets" component={Timesheets} />

              <Redirect to="/employees" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
