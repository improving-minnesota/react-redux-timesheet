import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ProjectRow extends React.Component {
  showDetail = () => {
    const { history, project } = this.props;

    if (project.deleted) {
      console.log('You cannot edit a deleted project.');
      return;
    }

    history.push(`/projects/detail/${project._id}`);
  };

  render() {
    const { project } = this.props;

    return (
      <tr className={project.deleted ? 'deleted' : ''} onClick={this.showDetail}>
        <td>{project.name}</td>
        <td>{project.description}</td>
      </tr>
    );
  }
}

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default withRouter(ProjectRow);
