import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects/Projects';
import ProjectsDetail from './components/projects/ProjectsDetail';
import ProjectsCreate from './components/projects/ProjectsCreate';
import Employees from './components/employees/Employees';
import Timesheets from './components/timesheets/Timesheets';
import TimesheetsDetail from './components/timesheets/TimesheetsDetail';
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
              <Route exact path="/projects" component={Projects}/>
              <Route path='/projects/detail/:_id'  component={ProjectsDetail} />
              <Route path='/projects/create'       component={ProjectsCreate} />

              <Route exact path="/employees" component={Employees}/>

              <Route exact path="/employees/:user_id/timesheets" component={Timesheets}/>
              <Route path='/employees/:user_id/timesheets/detail/:_id' component={TimesheetsDetail} />

              <Redirect to="/employees"/>
            </Switch>
          </Route>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
