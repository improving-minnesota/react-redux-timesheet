import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TimesheetRow from './TimesheetRow';
import {Table} from 'react-bootstrap';

class TimesheetTable extends Component {
  render() {
    let key = 1;

    let timesheetRows = this.props.timesheets.map(function (timesheet) {
      return (
        <TimesheetRow timesheet={timesheet} key={++key} />
      );
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
        <tbody>
        {timesheetRows}
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
