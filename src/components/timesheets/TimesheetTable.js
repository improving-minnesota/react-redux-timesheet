import React, { Component } from 'react';
import TimesheetRow from './TimesheetRow';
import {Table} from 'react-bootstrap';

class TimesheetTable extends Component {
  render() {
    let key = 1;

    const actions = this.props.actions;

    let timesheetRows = this.props.timesheets.map(function (timesheet) {
      return (
        <TimesheetRow timesheet={timesheet} key={++key} actions={actions}/>
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
          <th>Delete</th>
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
  timesheets: new Array()
};

TimesheetTable.propTypes = {
  timesheets: React.PropTypes.array.isRequired
};

export default TimesheetTable;
