import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TimeunitRow from './TimeunitRow';
import { Table } from 'semantic-ui-react';

class TimeunitTable extends Component {
  render() {
    const { timesheet, timeunits, onDelete, onRestore } = this.props;

    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Project</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Hours</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {timeunits.map((timeunit) => {
            return (
              <TimeunitRow
                timeunit={timeunit}
                timesheet={timesheet}
                key={timeunit._id}
                onRestore={onRestore}
                onDelete={onDelete}
              />
            );
          })}
        </Table.Body>
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
  timesheet: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired
};

export default TimeunitTable;
