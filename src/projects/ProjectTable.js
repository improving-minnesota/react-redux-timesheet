import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import ProjectRow from './ProjectRow';

class ProjectTable extends Component {
  render() {
    const { projects } = this.props;

    return (
      <Table bordered striped hover>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <ProjectRow project={ project } key={ project._id } />
          ))}
        </tbody>
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
