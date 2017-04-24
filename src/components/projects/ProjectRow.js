import React, { Component } from 'react';

class ProjectRow extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.project.name}</td>
        <td>{this.props.project.description}</td>
      </tr>
    );
  }
}

ProjectRow.propTypes = {
  project: React.PropTypes.object.isRequired
};

export default ProjectRow;
