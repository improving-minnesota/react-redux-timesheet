import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import ProjectRow from './ProjectRow';

class ProjectTable extends React.Component {
  propTypes = {
    projects: PropTypes.array.isRequired
  }

  // TODO Implement
  render() {
    const {projects} = this.props;
    return(
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 &&
            projects.map(project => <ProjectRow key={project._id} project={project} />)}
        </tbody>
      </Table>
    )
  }
}

export default ProjectTable;
