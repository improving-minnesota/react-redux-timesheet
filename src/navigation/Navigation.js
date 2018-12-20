import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  logout = () => {
    this.props.onLogout();
  };

  render() {
    return (
      <Menu pointing secondary>
        <Menu.Item>
          <Header as="h2">Timesheetz</Header>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/projects">Projects</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/employees" exact>Employees</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/timesheets">Timesheets</NavLink>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item onClick={this.logout}>
            <Button>Logout</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

Navigation.propTypes = {
  onLogout: PropTypes.func
};

export default Navigation;
