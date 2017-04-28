import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class ProjectRow extends Component {

  handleClick(project) {
    if(project.deleted){
      project.deleted = false;
      this.props.actions.restore(project);
    }
    else{
      project.deleted = true;
      this.props.actions.remove(project);
    }
  }

  render() {
    let rowClass = "";
    if(this.props.project.deleted){
      rowClass = "faded";
    }

    const button = (
      <Button
        onClick={() => {this.handleClick(this.props.project)}}
        bsStyle={this.props.project.deleted ? 'success' : 'danger'}
      >
        {this.props.project.deleted ? 'Restore' : 'Delete'}
      </Button>);

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
  project: React.PropTypes.object.isRequired
};

export default ProjectRow;
