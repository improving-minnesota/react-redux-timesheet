import React from 'react';
import PropTypes from 'prop-types';

class ProjectRow extends React.Component {
  // TODO Implement
  propTypes = {
    project: PropTypes.object.isRequired
  };

  render() {
    const { project } = this.props;
    return (
      <tr>
          <td>
            {project.name}
          </td>
          <td>
            {project.description}
          </td>
      </tr>
    )
  }
}

export default ProjectRow;
