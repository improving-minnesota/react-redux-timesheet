import React from 'react';
import PropTypes from 'prop-types';
import TimeunitRow from './TimeunitRow';
import { Table } from 'react-bootstrap';

class TimeunitTable extends React.Component {
  render() {
    const { timesheet, timeunits, onDelete, onRestore } = this.props;

    return (
      <Table bordered striped hover>
        <thead>
          <tr>
            <td>Project</td>
            <td>Date</td>
            <td>Hours</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {timeunits.map((timeunit) => (
            <TimeunitRow
              timeunit={timeunit}
              timesheet={timesheet}
              key={timeunit._id}
              onRestore={onRestore}
              onDelete={onDelete}
            />
          ))}
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
  timesheet: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired
};

export default TimeunitTable;
