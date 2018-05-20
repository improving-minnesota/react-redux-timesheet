import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class TimesheetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: { value: null, valid: null },
      description: { value: null, valid: null },
      beginDate: { value: null, valid: null },
      endDate: { value: null, valid: null }
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.getNameValidationState = this.getNameValidationState.bind(this);

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.getDescriptionValidationState = this.getDescriptionValidationState.bind(
      this
    );

    this.handleBeginDateChange = this.handleBeginDateChange.bind(this);
    this.getBeginDateValidationState = this.getBeginDateValidationState.bind(
      this
    );

    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.getEndDateValidationState = this.getEndDateValidationState.bind(this);

    this.validateAll = this.validateAll.bind(this);

    this.handleEmployeeChange = this.handleEmployeeChange.bind(this);

    this.handleSave = this.handleSave.bind(this);
  }

  // TODO - implement me
  componentWillReceiveProps(nextProps) {}

  // TODO - implement me
  handleSave() {}

  getDescriptionValidationState() {
    if (!this.state) return;
    if (this.state.description.valid === true) return 'success';
    else if (this.state.description.valid === false) return 'error';
  }

  handleDescriptionChange(value) {
    let isValid = false;
    if (value) {
      isValid = true;
    }
    return this.setState({ description: { value: value, valid: isValid } });
  }

  getNameValidationState() {
    if (!this.state) return;
    if (this.state.name.valid === true) return 'success';
    else if (this.state.name.valid === false) return 'error';
  }

  handleNameChange(value) {
    let isValid = false;
    if (value) {
      isValid = true;
    }
    return this.setState({ name: { value: value, valid: isValid } });
  }

  getBeginDateValidationState() {
    if (!this.state) return;
    if (this.state.beginDate.valid === true) return 'success';
    else if (this.state.beginDate.valid === false) return 'error';
  }

  handleBeginDateChange(value) {
    let isValid = false,
      dateRegExp = /^\d{4}-\d{1,2}-\d{1,2}$/;
    if (dateRegExp.test(value)) {
      isValid = true;
    }
    return this.setState({ beginDate: { value: value, valid: isValid } });
  }

  getEndDateValidationState() {
    if (!this.state) return;
    if (this.state.endDate.valid === true) return 'success';
    else if (this.state.endDate.valid === false) return 'error';
  }

  handleEndDateChange(value) {
    let isValid = false,
      dateRegExp = /^\d{4}-\d{1,2}-\d{1,2}$/;
    if (dateRegExp.test(value)) {
      isValid = true;
    }
    return this.setState({ endDate: { value: value, valid: isValid } });
  }

  validateAll() {
    return (
      this.state.name.value &&
      this.state.description.value &&
      this.state.beginDate.value &&
      this.state.endDate.value
    );
  }

  handleEmployeeChange(value) {
    let isValid = false;
    if (value) {
      isValid = true;
    }
    return this.setState({ user_id: { value: value, valid: isValid } });
  }

  // TODO - implement me
  render() {
    return <div />;
  }
}

TimesheetForm.defaultProps = {
  timesheet: {},
  employees: []
};

TimesheetForm.propTypes = {
  timesheet: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired
};

export default TimesheetForm;
