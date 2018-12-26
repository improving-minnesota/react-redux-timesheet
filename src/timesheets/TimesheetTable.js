import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import TimesheetRow from './TimesheetRow';

class TimesheetTable extends React.Component {
  render() {
    const { timesheets } = this.props;

    return (
      <Table bordered striped>
        <thead>
          <tr>
            <th>Begin Date</th>
            <th>End Date</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {timesheets.map((timesheet) => (
            <TimesheetRow timesheet={ timesheet } key={ timesheet._id }/>
          ))}
        </tbody>
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
