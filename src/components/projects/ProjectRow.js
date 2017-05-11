import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  project: PropTypes.object.isRequired
};

export default ProjectRow;
