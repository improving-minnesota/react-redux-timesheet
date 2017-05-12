import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TimeunitRow from './TimeunitRow';
import {Table} from 'react-bootstrap';

class TimeunitTable extends Component {
  render() {
    let key = 1;

    const actions = this.props.actions;

    const timesheet = this.props.timesheet;

    let timeunitRows = this.props.timeunits.map(function (timeunit) {
      return (
        <TimeunitRow timeunit={timeunit} timesheet={timesheet} key={++key} actions={actions}/>
      );
    });

    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Project</th>
          <th>Date</th>
          <th>Hours</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {timeunitRows}
        </tbody>
      </Table>
    );
  }
}

TimeunitTable.defaultProps = {
  timeunits: [],
  timesheet: {}
};

TimeunitTable.propTypes = {
  timeunits: PropTypes.array.isRequired,
  timesheet: PropTypes.object.isRequired
};

export default TimeunitTable;
