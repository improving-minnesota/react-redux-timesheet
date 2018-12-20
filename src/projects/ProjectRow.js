import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
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
      <Table.Row onClick={this.showDetail}>
        <Table.Cell>{project.name}</Table.Cell>
        <Table.Cell>{project.description}</Table.Cell>
      </Table.Row>
    );
  }
}

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default withRouter(ProjectRow);
