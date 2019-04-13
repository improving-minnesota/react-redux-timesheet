import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import PropTypes from 'prop-types';

class Navigation extends React.Component {
  propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Timesheetz
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <NavItem>
            <NavLink to='/employees'>Employees</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/projects'>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/timesheets'>Timesheets</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Navigation;