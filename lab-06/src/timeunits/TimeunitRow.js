import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';

class TimeunitRow extends React.Component {
  handleClick = (event) => {
    const { onDelete, onRestore, timesheet, timeunit } = this.props;

    if (timeunit.deleted) {
      onRestore(timesheet._id, timeunit);
    } else {
      onDelete(timesheet._id, timeunit);
    }

    event.stopPropagation();
  };

  showDetail = () => {
    const { history, timesheet, timeunit } = this.props;

    if (timeunit.deleted) {
      console.log('You cannot edit a deleted timeunit.');
      return;
    }

    history.push(`/timesheets/detail/${timesheet._id}/timeunits/detail/${timeunit._id}`);
  };

  render() {
    const { timesheet, timeunit } = this.props;

    return (
      <tr
        className={timeunit.deleted ? 'deleted' : ''}
        onClick={() => {
          this.showDetail(timesheet, timeunit);
        }}
      >
        <td>{timeunit.project}</td>
        <td>{timeunit.dateWorked}</td>
        <td>{timeunit.hoursWorked}</td>
        <td>
          <Button onClick={this.handleClick} bsStyle={timeunit.deleted ? 'success' : 'danger'}>
            {timeunit.deleted ? 'Restore' : 'Delete'}
          </Button>
        </td>
      </tr>
    );
  }
}

TimeunitRow.propTypes = {
  timeunit: PropTypes.object.isRequired,
  timesheet: PropTypes.object.isRequired,
  history: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired
};

export default withRouter(TimeunitRow);
