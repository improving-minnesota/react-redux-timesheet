import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import * as AuthActions from "../../actions/AuthActionCreator";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { _id: 'all' }
    };
  }

  logout = () => {
    this.props.authActions.logout();
  };

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
        <Nav pullRight>
          <LinkContainer to="/logout">
            <NavItem eventKey={4} onClick={this.logout}>Logout</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(AuthActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
