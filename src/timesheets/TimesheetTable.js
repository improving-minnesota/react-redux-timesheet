import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import TimesheetRow from './TimesheetRow';

class TimesheetTable extends React.Component {
  render() {
    const timesheetRows = this.props.timesheets.map((timesheet) => (
      <TimesheetRow timesheet={ timesheet } key={ timesheet._id }/>
    ));

    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.Cell>Begin Date</Table.Cell>
            <Table.Cell>End Date</Table.Cell>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Description</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { timesheetRows }
        </Table.Body>
      </Table>
    );
  }
}

TimesheetTable.defaultProps = {
  timesheets: []
};

TimesheetTable.propTypes = {
  timesheets: PropTypes.array.isRequired
};

export default TimesheetTable;
