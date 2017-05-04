import React, { Component } from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class TimesheetForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: {value: null, valid: null},
      description: {value: null, valid: null},
      beginDate: {value: null, valid: null},
      endDate: {value: null, valid: null}
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.getNameValidationState = this.getNameValidationState.bind(this);

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.getDescriptionValidationState = this.getDescriptionValidationState.bind(this);

    this.handleBeginDateChange = this.handleBeginDateChange.bind(this);
    this.getBeginDateValidationState = this.getBeginDateValidationState.bind(this);

    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.getEndDateValidationState = this.getEndDateValidationState.bind(this);

    this.validateAll = this.validateAll.bind(this);

    this.handleSave = this.handleSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      name: {value: nextProps.project.name, valid: null},
      description: {value: nextProps.project.description, valid: null},
      beginDate: {value: nextProps.project.beginDate, valid: null},
      endDate: {value: nextProps.project.endDate, valid: null}
    };
  }

  handleSave(){
    if(this.validateAll()) {
      this.props.handleSave({
        name: this.state.name.value,
        description: this.state.description.value,
        beginDate: this.state.beginDate.value,
        endDate: this.state.endDate.value,
        _id: this.props.project._id
      });
    }
  }

  getDescriptionValidationState() {
    if (!this.state) return;
    if (this.state.description.valid === true) return 'success';
    else if (this.state.description.valid === false) return 'error';
  }

  handleDescriptionChange(value) {
    let isValid = false;
    if(value){
      isValid = true;
    }
    return this.setState({ description: {value: value, valid: isValid }});
  }

  getNameValidationState() {
    if (!this.state) return;
    if (this.state.name.valid === true) return 'success';
    else if (this.state.name.valid === false) return 'error';
  }

  handleNameChange(value) {
    let isValid = false;
    if(value){
      isValid = true;
    }
    return this.setState({ name: {value: value, valid: isValid }});
  }

  getBeginDateValidationState() {
    if (!this.state) return;
    if (this.state.beginDate.valid === true) return 'success';
    else if (this.state.beginDate.valid === false) return 'error';
  }

  handleBeginDateChange(value) {
    let isValid = false;
    if(value){
      isValid = true;
    }
    return this.setState({ beginDate: {value: value, valid: isValid }});
  }

  getEndDateValidationState() {
    if (!this.state) return;
    if (this.state.endDate.valid === true) return 'success';
    else if (this.state.endDate.valid === false) return 'error';
  }

  handleEndDateChange(value) {
    let isValid = false;
    if(value){
      isValid = true;
    }
    return this.setState({ endDate: {value: value, valid: isValid }});
  }

  validateAll(){
    return (
      this.state.name.value
      && this.state.description.value
      && this.state.beginDate.value
      && this.state.endDate.value
    );
  }

  render () {
    return (
      <form>
        <FormGroup
          controlId="name"
          validationState={this.getNameValidationState()}
        >
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.name.value}
            placeholder="Enter name"
            onChange={(e) => this.handleNameChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="description"
          validationState={this.getDescriptionValidationState()}
        >
          <ControlLabel>Description</ControlLabel>
          <FormControl
            type="text"
            value={this.state.description.value}
            placeholder="Enter description"
            onChange={(e) => this.handleDescriptionChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="beginDate"
          validationState={this.getBeginDateValidationState()}
        >
          <ControlLabel>Begin Date</ControlLabel>
          <FormControl
            type="text"
            value={this.state.beginDate.value}
            placeholder="MM/DD/YYYY"
            onChange={(e) => this.handleBeginDateChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="endDate"
          validationState={this.getEndDateValidationState()}
        >
          <ControlLabel>End Date</ControlLabel>
          <FormControl
            type="text"
            value={this.state.endDate.value}
            placeholder="MM/DD/YYYY"
            onChange={(e) => this.handleEndDateChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <Button bsStyle="success" onClick={this.handleSave} disabled={!this.validateAll()}> Save </Button>&nbsp;
        <LinkContainer to="/employees/all/timesheets">
          <Button bsStyle="danger"> Cancel </Button>
        </LinkContainer>
      </form>
    );
  }
}

TimesheetForm.defaultProps = {
  timesheet: {}
};

TimesheetForm.propTypes = {
  timesheet: React.PropTypes.object.isRequired,
  handleSave: React.PropTypes.func.isRequired
};

export default TimesheetForm;
