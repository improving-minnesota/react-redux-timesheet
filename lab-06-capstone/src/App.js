import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects/Projects';
import ProjectsDetail from './components/projects/ProjectsDetail';
import ProjectsCreate from './components/projects/ProjectsCreate';
import Employees from './components/employees/Employees';
import EmployeesDetail from './components/employees/EmployeesDetail';
import EmployeesCreate from './components/employees/EmployeesCreate';
import Timesheets from './components/timesheets/Timesheets';
import TimesheetsDetail from './components/timesheets/TimesheetsDetail';
import TimesheetsCreate from './components/timesheets/TimesheetsCreate';
import TimeunitsCreate from './components/timeunits/TimeunitsCreate';
import TimeunitsDetail from './components/timeunits/TimeunitsDetail';
import Navigation from './components/nav/Navigation';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from "./components/login/Login";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as AuthActions from "./actions/AuthActionCreator";

class App extends Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return <LoginForm />
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Navigation onLogout={this.props.authActions.logout}/>
          <Switch>
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/detail/:_id" component={ProjectsDetail} />
            <Route path="/projects/create" component={ProjectsCreate} />

            <Route exact path="/employees" component={Employees} />
            <Route path="/employees/detail/:_id" component={EmployeesDetail} />
            <Route path="/employees/create" component={EmployeesCreate} />

            <Route exact path="/employees/:user_id/timesheets" component={Timesheets} />
            <Route
              exact
              path="/employees/:user_id/timesheets/detail/:_id"
              component={TimesheetsDetail}
            />

            <Route path="/timesheets/create" component={TimesheetsCreate} />

            <Route
              path="/employees/:user_id/timesheets/detail/:timesheet_id/timeunits/create"
              component={TimeunitsCreate}
            />
            <Route
              path="/employees/:user_id/timesheets/detail/:timesheet_id/timeunits/detail/:_id"
              component={TimeunitsDetail}
            />

            <Redirect to="/employees" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(AuthActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
