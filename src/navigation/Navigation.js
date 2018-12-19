import React from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { _id: 'all' }
    };
  }

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
      </Menu>
    );
  }
}

export default Navigation;
