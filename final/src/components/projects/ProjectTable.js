import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProjectRow from './ProjectRow';
import {Table} from 'react-bootstrap';

class ProjectTable extends Component {
  render() {

    const actions = this.props.actions;

    const projectRows = this.props.projects.map(project => {
      return (
        <ProjectRow project={project} key={project._id} actions={actions}/>
      );
    });

    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {projectRows}
        </tbody>
      </Table>
    );
  }
}

ProjectTable.defaultProps = {
  projects: [],
  actions: {}
};

ProjectTable.propTypes = {
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default ProjectTable;
