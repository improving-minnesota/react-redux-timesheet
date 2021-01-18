import React from 'react';
import PropTypes from 'prop-types';

function ProjectRow({ project }) {
  return (
    <tr>
      <td>{project.name}</td>
      <td>{project.description}</td>
    </tr>
  );
}

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired
};
export default ProjectRow;
