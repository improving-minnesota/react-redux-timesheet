import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';

class TimesheetRow extends React.Component {
  handleClick = () => {
    const { timesheet, onDelete, onRestore } = this.props;

    if (timesheet.deleted) {
      onRestore(timesheet);
    } else {
      onDelete(timesheet);
    }
  };

  showDetail = () => {
    const { history, timesheet } = this.props;

    if (timesheet.deleted) {
      console.log('You cannot edit a deleted timesheet.');
      return;
    }

    history.push(`/timesheets/detail/${timesheet._id}`);
  };

  render() {
    const { timesheet } = this.props;

    return (
      <tr className={timesheet.deleted ? 'deleted' : ''} onClick={this.showDetail}>
        <td>{timesheet.beginDate}</td>
        <td>{timesheet.endDate}</td>
        <td>{timesheet.name}</td>
        <td>{timesheet.description}</td>
        <td>
          <Button onClick={this.handleClick} bsStyle={timesheet.deleted ? 'success' : 'danger'}>
            {timesheet.deleted ? 'Restore' : 'Delete'}
          </Button>
        </td>
      </tr>
    );
  }
}

TimesheetRow.propTypes = {
  onDelete: PropTypes.func,
  onRestore: PropTypes.func,
  timesheet: PropTypes.object.isRequired
};

export default withRouter(TimesheetRow);
