import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import Projects from "./projects/Projects";
import Employees from './employees/Employees';
import Timesheets from './timesheets/Timesheets';
import Navigation from './navigation/Navigation';
import ProjectsDetail from './projects/ProjectsDetail';
import TimesheetsDetail from './timesheets/TimesheetsDetail';
import EmployeeDetail from './employees/EmployeeDetail';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/details" component={ProjectsDetail} />
            <Route exact path="/employees" component={Employees} />
            <Route exact path="/employees/details" component={EmployeeDetail} />
            <Route exact path="/employees/:user_id/timesheets" component={Timesheets} />
            <Route exact path="/employees/:user_id/timesheets/details" component={TimesheetsDetail} />
            <Redirect to="/employees" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
