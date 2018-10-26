import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

class TimesheetRow extends React.Component {
  render() {
    const { timesheet } = this.props;

    return (
      <Table.Row>
        <Table.Cell>{timesheet.beginDate}</Table.Cell>
        <Table.Cell>{timesheet.endDate}</Table.Cell>
        <Table.Cell>{timesheet.name}</Table.Cell>
        <Table.Cell>{timesheet.description}</Table.Cell>
      </Table.Row>
    );
  }
}

TimesheetRow.propTypes = {
  timesheet: PropTypes.object.isRequired
};

export default TimesheetRow;
