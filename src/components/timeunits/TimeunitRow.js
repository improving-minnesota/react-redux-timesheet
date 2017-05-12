import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router';

class TimeunitRow extends Component {

  handleClick(timesheet, timeunit) {
    if(timeunit.deleted){
      timeunit.deleted = false;
      this.props.actions.restoreTimeunit(timesheet._id, timeunit).then(()=>{
        this.props.actions.listTimeunits(timesheet._id);
      });
    }
    else{
      timeunit.deleted = true;
      this.props.actions.removeTimeunit(timesheet._id, timeunit).then(()=>{
        this.props.actions.listTimeunits(timesheet._id);
      });
    }
  }

  showDetail(timesheet, timeunit) {
    if(timeunit.deleted) {
      console.log('You cannot edit a deleted timeunit.');
      return;
    }

    this.props.history.push('/employees/' + timesheet.user_id + '/timesheets/detail/' + timesheet._id + '/timeunits/detail/' + timeunit._id);
  }

  render() {
    let rowClass = "";
    if(this.props.timeunit.deleted){
      rowClass = "faded";
    }

    const button = (
      <Button
        onClick={(e) => {this.handleClick(this.props.timesheet, this.props.timeunit); e.stopPropagation();}}
        bsStyle={this.props.timeunit.deleted ? 'success' : 'danger'}
      >
        {this.props.timeunit.deleted ? 'Restore' : 'Delete'}
      </Button>);

    return (
      <tr className={rowClass} onClick={() => {this.showDetail(this.props.timesheet, this.props.timeunit)}}>
        <td>{this.props.timeunit.project}</td>
        <td>{this.props.timeunit.dateWorked}</td>
        <td>{this.props.timeunit.hoursWorked}</td>
        <td>{button}</td>
      </tr>
    );
  }
}

TimeunitRow.propTypes = {
  timeunit: React.PropTypes.object.isRequired,
  timesheet: React.PropTypes.object.isRequired,
  history: React.PropTypes.object
};

export default withRouter(TimeunitRow);
