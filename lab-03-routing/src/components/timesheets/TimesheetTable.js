import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TimesheetRow from './TimesheetRow';
import { Table } from 'react-bootstrap';

class TimesheetTable extends Component {
  render() {
    let timesheetRows = this.props.timesheets.map(function(timesheet) {
      return <TimesheetRow timesheet={timesheet} key={timesheet._id} />;
    });

    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Begin Date</th>
            <th>End Date</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{timesheetRows}</tbody>
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
