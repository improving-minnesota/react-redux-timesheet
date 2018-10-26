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
            <Table.HeaderCell>Begin Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
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
