import React, { Component } from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class TimeunitForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      project: {value: null, valid: null},
      dateWorked: {value: null, valid: null},
      hoursWorked: {value: null, valid: null}
    };

    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.getProjectValidationState = this.getProjectValidationState.bind(this);

    this.handleDateWorkedChange = this.handleDateWorkedChange.bind(this);
    this.getDateWorkedValidationState = this.getDateWorkedValidationState.bind(this);

    this.handleHoursWorkedChange = this.handleHoursWorkedChange.bind(this);
    this.getHoursWorkedValidationState = this.getHoursWorkedValidationState.bind(this);

    this.validateAll = this.validateAll.bind(this);

    this.handleSave = this.handleSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      project: {value: nextProps.timeunit.project, valid: null},
      dateWorked: {value: nextProps.timeunit.dateWorked, valid: null},
      hoursWorked: {value: nextProps.timeunit.hoursWorked, valid: null}
    };
  }

  handleSave(){
    if(this.validateAll()) {
      this.props.handleSave({
        project: this.state.project.value,
        dateWorked: this.state.dateWorked.value,
        hoursWorked: this.state.hoursWorked.value,
        timesheet_id: this.props.timesheetId,
        _id: this.props.timeunit._id
      });
    }
  }

  getProjectValidationState() {
    if (!this.state) return;
    if (this.state.project.valid === true) return 'success';
    else if (this.state.project.valid === false) return 'error';
  }

  handleProjectChange(value) {
    let isValid = false;
    if(value){
      isValid = true;
    }
    return this.setState({ project: {value: value, valid: isValid }});
  }

  getDateWorkedValidationState() {
    if (!this.state) return;
    if (this.state.dateWorked.valid === true) return 'success';
    else if (this.state.dateWorked.valid === false) return 'error';
  }

  handleDateWorkedChange(value) {
    let isValid = false;
    if(value){
      isValid = true;
    }
    return this.setState({ dateWorked: {value: value, valid: isValid }});
  }

  getHoursWorkedValidationState() {
    if (!this.state) return;
    if (this.state.hoursWorked.valid === true) return 'success';
    else if (this.state.hoursWorked.valid === false) return 'error';
  }

  handleHoursWorkedChange(value) {
    let isValid = false;
    if(value){
      isValid = true;
    }
    return this.setState({ hoursWorked: {value: value, valid: isValid }});
  }

  validateAll(){
    return (
      this.state.project.value
      && this.state.dateWorked.value
      && this.state.hoursWorked.value
    );
  }

  render () {
    return (
      <form>
        <FormGroup
          controlId="project"
          validationState={this.getProjectValidationState()}
        >
          <ControlLabel>Project</ControlLabel>
          <FormControl
            type="text"
            value={this.state.project.value}
            placeholder="Project1"
            onChange={(e) => this.handleProjectChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="dateWorked"
          validationState={this.getDateWorkedValidationState()}
        >
          <ControlLabel>Date Worked</ControlLabel>
          <FormControl
            type="text"
            value={this.state.dateWorked.value}
            placeholder="YYYY-MM-DD"
            onChange={(e) => this.handleDateWorkedChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="hoursWorked"
          validationState={this.getHoursWorkedValidationState()}
        >
          <ControlLabel>Hours Worked</ControlLabel>
          <FormControl
            type="text"
            value={this.state.hoursWorked.value}
            placeholder="Number of hours worked"
            onChange={(e) => this.handleHoursWorkedChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <Button bsStyle="success" onClick={this.handleSave} disabled={!this.validateAll()}> Save </Button>&nbsp;
        <LinkContainer to={'/employees/' + this.props.userId + '/timesheets/detail/' + this.props.timesheetId}>
          <Button bsStyle="danger"> Cancel </Button>
        </LinkContainer>
      </form>
    );
  }
}

TimeunitForm.defaultProps = {
  timeunit: {}
};

TimeunitForm.propTypes = {
  timesheetId: React.PropTypes.string.isRequired,
  userId: React.PropTypes.string.isRequired,
  timeunit: React.PropTypes.object.isRequired,
  handleSave: React.PropTypes.func.isRequired
};

export default TimeunitForm;
