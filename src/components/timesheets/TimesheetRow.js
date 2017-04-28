import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class TimesheetRow extends Component {

  handleClick(timesheet) {
    if(timesheet.deleted){
      timesheet.deleted = false;
      this.props.actions.restoreTimesheet(timesheet).then(this.props.actions.listTimesheets);
    }
    else{
      timesheet.deleted = true;
      this.props.actions.removeTimesheet(timesheet).then(this.props.actions.listTimesheets);
    }
  }

  render() {
    let rowClass = "";
    if(this.props.timesheet.deleted){
      rowClass = "faded";
    }

    const button = (
      <Button
        onClick={() => {this.handleClick(this.props.timesheet)}}
        bsStyle={this.props.timesheet.deleted ? 'success' : 'danger'}
      >
        {this.props.timesheet.deleted ? 'Restore' : 'Delete'}
      </Button>);

    return (
      <tr className={rowClass}>
        <td>{this.props.timesheet.beginDate}</td>
        <td>{this.props.timesheet.endDate}</td>
        <td>{this.props.timesheet.name}</td>
        <td>{this.props.timesheet.description}</td>
        <td>{button}</td>
      </tr>
    );
  }
}

TimesheetRow.propTypes = {
  timesheet: React.PropTypes.object.isRequired
};

export default TimesheetRow;
