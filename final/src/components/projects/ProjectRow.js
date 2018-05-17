import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router';

class ProjectRow extends Component {

  handleClick(project) {
    if(project.deleted){
      project.deleted = false;
      this.props.actions.restoreProject(project).then(this.props.actions.listProjects);
    }
    else{
      project.deleted = true;
      this.props.actions.removeProject(project).then(this.props.actions.listProjects);
    }
  }

  showDetail(project) {
    if(project.deleted) {
      console.log('You cannot edit a deleted project.');
      return;
    }

    this.props.history.push('/projects/detail/' + project._id);
  }

  render() {
    let rowClass = "";
    if(this.props.project.deleted){
      rowClass = "faded";
    }

    const button = (
      <Button
        onClick={(e) => {this.handleClick(this.props.project); e.stopPropagation();}}
        bsStyle={this.props.project.deleted ? 'success' : 'danger'}
      >
        {this.props.project.deleted ? 'Restore' : 'Delete'}
      </Button>);

    return (
      <tr className={rowClass} onClick={() => {this.showDetail(this.props.project)}}>
        <td>{this.props.project.name}</td>
        <td>{this.props.project.description}</td>
        <td>{button}</td>
      </tr>
    );
  }
}

ProjectRow.defaultProps = {
  project: {}
};

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired,
  history: PropTypes.object
};

export default withRouter(ProjectRow);
