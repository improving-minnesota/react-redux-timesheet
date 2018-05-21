import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

class TimesheetRow extends Component {
  handleClick(timesheet) {
    if (timesheet.deleted) {
      timesheet.deleted = false;
      this.props.actions.restoreTimesheet(timesheet).then(this.props.actions.listTimesheets);
    } else {
      timesheet.deleted = true;
      this.props.actions.removeTimesheet(timesheet).then(this.props.actions.listTimesheets);
    }
  }

  showDetail(timesheet) {
    if (timesheet.deleted) {
      console.log('You cannot edit a deleted timesheet.');
      return;
    }

    this.props.history.push(
      `/employees/${timesheet.user_id}/timesheets/detail/${timesheet._id}`
    );
  }

  render() {
    let rowClass = '';
    if (this.props.timesheet.deleted) {
      rowClass = 'faded';
    }

    const button = (
      <Button
        onClick={e => {
          this.handleClick(this.props.timesheet);
          e.stopPropagation();
        }}
        bsStyle={this.props.timesheet.deleted ? 'success' : 'danger'}
      >
        {this.props.timesheet.deleted ? 'Restore' : 'Delete'}
      </Button>
    );

    return (
      <tr
        className={rowClass}
        onClick={() => {
          this.showDetail(this.props.timesheet);
        }}
      >
        <td>{this.props.timesheet.beginDate}</td>
        <td>{this.props.timesheet.endDate}</td>
        <td>{this.props.timesheet.name}</td>
        <td>{this.props.timesheet.description}</td>
        <td>{button}</td>
      </tr>
    );
  }
}

TimesheetRow.defaultProps = {
  timesheet: {}
};

TimesheetRow.propTypes = {
  timesheet: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object
};

export default withRouter(TimesheetRow);
