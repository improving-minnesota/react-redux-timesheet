import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Timesheetz
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/projects">
            <NavItem eventKey={1}>Projects</NavItem>
          </LinkContainer>
          <LinkContainer to="/employees">
            <NavItem eventKey={2}>Employees</NavItem>
          </LinkContainer>
          <LinkContainer to="/timesheets">
            <NavItem eventKey={3}>Timesheets</NavItem>
          </LinkContainer>

        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
