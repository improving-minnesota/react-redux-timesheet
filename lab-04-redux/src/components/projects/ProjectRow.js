import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class ProjectRow extends Component {
  handleClick(project) {
    if (project.deleted) {
      project.deleted = false;
      this.props.actions
        .restoreProject(project)
        .then(this.props.actions.listProjects);
    } else {
      project.deleted = true;
      this.props.actions
        .removeProject(project)
        .then(this.props.actions.listProjects);
    }
  }

  render() {
    let rowClass = '';
    if (this.props.project.deleted) {
      rowClass = 'faded';
    }

    const button = (
      <Button
        onClick={() => {
          this.handleClick(this.props.project);
        }}
        bsStyle={this.props.project.deleted ? 'success' : 'danger'}
      >
        {this.props.project.deleted ? 'Restore' : 'Delete'}
      </Button>
    );

    return (
      <tr className={rowClass}>
        <td>{this.props.project.name}</td>
        <td>{this.props.project.description}</td>
        <td>{button}</td>
      </tr>
    );
  }
}

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectRow;
