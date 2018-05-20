import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProjectRow from './ProjectRow';
import { Table } from 'react-bootstrap';

class ProjectTable extends Component {
  render() {
    let key = 1;

    let projectRows = this.props.projects.map(function(project) {
      return <ProjectRow project={project} key={++key} />;
    });

    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{projectRows}</tbody>
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
