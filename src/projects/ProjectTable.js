import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import ProjectRow from './ProjectRow';

class ProjectTable extends Component {
  render() {
    const projectRows = this.props.projects.map(project => (
      <ProjectRow project={ project } key={ project._id }/>
    ));

    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <th>Name</th>
            <th>Description</th>
          </Table.Row>
        </Table.Header>
        < Table.Body>
          { projectRows }
        </Table.Body>
      </Table>
    );
  }
}

ProjectTable.defaultProps = {
  projects: []
};

ProjectTable.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectTable;
