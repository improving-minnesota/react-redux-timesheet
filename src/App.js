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
import TimeunitsDetail from './timeunits/TimeunitsDetail';
import { connect } from 'react-redux';
import * as AuthActions from './actions/AuthActionCreator';
import LoginForm from './login/LoginForm';

class App extends React.Component {
  render() {
    const { user, login, logout } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <Navigation onLogout={logout} />
          <div className="container">
            {!user ? (
              <LoginForm onLogin={login} />
            ) : (
              <Switch>
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/detail/:_id?" component={ProjectsDetail} />

                <Route exact path="/employees" component={Employees} />
                <Route exact path="/employees/detail/:_id?" component={EmployeeDetail} />

                <Route exact path="/timesheets" component={Timesheets} />
                <Route exact path="/timesheets/detail/:_id?" component={TimesheetsDetail} />

                <Route
                  exact
                  path="/timesheets/detail/:timesheet_id/timeunits/detail/:_id?"
                  component={TimeunitsDetail}
                />

                <Redirect to="/employees" />
              </Switch>
            )}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = {
  login: AuthActions.login,
  logout: AuthActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
