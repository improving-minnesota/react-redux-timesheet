import React, { Component } from 'react';
import ProjectRow from './ProjectRow';
import {Table} from 'react-bootstrap';

class ProjectTable extends Component {
  render() {
    let key = 1;

    const actions = this.props.actions;

    let projectRows = this.props.projects.map(function (project) {
      return (
        <ProjectRow project={project} key={++key} actions={actions}/>
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
  projects: new Array(),
  actions: {}
};

ProjectTable.propTypes = {
  projects: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

export default ProjectTable;
