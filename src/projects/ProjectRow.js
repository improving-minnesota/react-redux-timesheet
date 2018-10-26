import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

class ProjectRow extends React.Component {
  render() {
    const { project } = this.props;

    return (
      <Table.Row>
        <Table.Cell>{project.name}</Table.Cell>
        <Table.Cell>{project.description}</Table.Cell>
      </Table.Row>
    );
  }
}

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectRow;
