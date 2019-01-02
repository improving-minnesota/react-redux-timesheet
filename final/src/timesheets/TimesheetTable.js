import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import TimesheetRow from './TimesheetRow';

class TimesheetTable extends React.Component {
  render() {
    const { onDelete, onRestore, timesheets } = this.props;

    return (
      <Table bordered striped hover>
        <thead>
          <tr>
            <th>Begin Date</th>
            <th>End Date</th>
            <th>Name</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {timesheets.map((timesheet) => (
            <TimesheetRow timesheet={ timesheet } key={ timesheet._id } onDelete={onDelete} onRestore={onRestore} />
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
  onDelete: PropTypes.func,
  onRestore: PropTypes.func,
  timesheets: PropTypes.array.isRequired
};

export default TimesheetTable;
