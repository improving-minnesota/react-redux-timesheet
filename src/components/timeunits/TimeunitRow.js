import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class TimeunitRow extends Component {

  //TODO: Jeff add the showDetail piece

  handleClick(timesheet, timeunit) {
    if(timeunit.deleted){
      timeunit.deleted = false;
      this.props.actions.restoreTimeunit(timesheet._id, timeunit).then(this.props.actions.listTimeunits);
    }
    else{
      timeunit.deleted = true;
      this.props.actions.removeTimeunit(timesheet._id, timeunit).then(this.props.actions.listTimeunits);
    }
  }

  render() {
    let rowClass = "";
    if(this.props.timeunit.deleted){
      rowClass = "faded";
    }

    const button = (
      <Button
        onClick={() => {this.handleClick(this.props.timesheet, this.props.timeunit)}}
        bsStyle={this.props.timeunit.deleted ? 'success' : 'danger'}
      >
        {this.props.timeunit.deleted ? 'Restore' : 'Delete'}
      </Button>);

    return (
      <tr className={rowClass}>
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
  timesheet: React.PropTypes.object.isRequired
};

export default TimeunitRow;
