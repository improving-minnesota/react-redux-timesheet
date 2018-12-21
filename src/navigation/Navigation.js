import React from 'react';
import PropTypes from 'prop-types';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  logout = () => {
    this.props.onLogout();
  };

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Timesheetz
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
          <NavItem><NavLink to="/employees">Employees</NavLink></NavItem>
          <NavItem><NavLink to="/timesheets">Timesheets</NavLink></NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem>
            <Button onClick={this.logout}>Logout</Button>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  onLogout: PropTypes.func
};

export default Navigation;
