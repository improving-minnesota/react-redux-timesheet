import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { _id: 'all' }
    };
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Timesheetz</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/projects">
            <NavItem eventKey={1}>Projects</NavItem>
          </LinkContainer>
          <LinkContainer exact to="/employees">
            <NavItem eventKey={3}>Employees</NavItem>
          </LinkContainer>
          <LinkContainer to={`/employees/${this.state.user._id}/timesheets`}>
            <NavItem eventKey={2}>Timesheets</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
