import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import ProjectRow from './ProjectRow';

class ProjectTable extends Component {
  render() {
    const { projects } = this.props;

    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        < Table.Body>
          {projects.map(project => (
            <ProjectRow project={ project } key={ project._id }/>
          ))}
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
