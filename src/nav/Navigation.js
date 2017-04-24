import React, { Component } from 'react';
import * as BS from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <BS.Navbar>
        <BS.Navbar.Header>
          <BS.Navbar.Brand>
            <a href="#">Timesheetz</a>
          </BS.Navbar.Brand>
        </BS.Navbar.Header>
        <BS.Nav>
          <LinkContainer to="/home">
            <BS.NavItem eventKey={1}>Home</BS.NavItem>
          </LinkContainer>
          <LinkContainer to="/book">
            <BS.NavItem eventKey={2}>Book Inv</BS.NavItem>
          </LinkContainer>
          <LinkContainer to="/book">
            <BS.NavItem eventKey={2}>Book Inv</BS.NavItem>
          </LinkContainer>

        </BS.Nav>
      </BS.Navbar>
    );
  }
}

export default NavBar;
