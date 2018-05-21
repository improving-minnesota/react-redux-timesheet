import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, FormGroup, ControlLabel, FormControl, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: { value: null, valid: null },
      email: { value: null, valid: null },
      firstName: { value: null, valid: null },
      lastName: { value: null, valid: null },
      admin: { value: false, valid: null }
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.getUsernameValidationState = this.getUsernameValidationState.bind(this);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.getEmailValidationState = this.getEmailValidationState.bind(this);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.getFirstNameValidationState = this.getFirstNameValidationState.bind(this);

    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.getLastNameValidationState = this.getLastNameValidationState.bind(this);

    this.handleAdminChange = this.handleAdminChange.bind(this);
    this.getAdminValidationState = this.getAdminValidationState.bind(this);

    this.validateAll = this.validateAll.bind(this);

    this.handleSave = this.handleSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      username: { value: nextProps.employee.username, valid: null },
      email: { value: nextProps.employee.email, valid: null },
      firstName: { value: nextProps.employee.firstName, valid: null },
      lastName: { value: nextProps.employee.lastName, valid: null },
      admin: { value: nextProps.employee.admin, valid: null }
    };
  }

  handleSave() {
    if (this.validateAll()) {
      this.props.handleSave({
        username: this.state.username.value,
        email: this.state.email.value,
        firstName: this.state.firstName.value,
        lastName: this.state.lastName.value,
        admin: this.state.admin.value,
        _id: this.props.employee._id
      });
    }
  }

  getAdminValidationState() {
    if (!this.state) return;
    if (this.state.admin.valid === true) return 'success';
    else if (this.state.admin.valid === false) return 'error';
  }

  handleAdminChange(value) {
    let isValid = false;
    if (value !== null) {
      isValid = true;
    }
    return this.setState({ admin: { value: value, valid: isValid } });
  }

  getUsernameValidationState() {
    if (!this.state) return;
    if (this.state.username.valid === true) return 'success';
    else if (this.state.username.valid === false) return 'error';
  }

  handleUsernameChange(value) {
    let isValid = false;
    if (value) {
      isValid = true;
    }
    return this.setState({ username: { value: value, valid: isValid } });
  }

  getEmailValidationState() {
    if (!this.state) return;
    if (this.state.email.valid === true) return 'success';
    else if (this.state.email.valid === false) return 'error';
  }

  handleEmailChange(value) {
    let isValid = false;
    if (value) {
      isValid = true;
    }
    return this.setState({ email: { value: value, valid: isValid } });
  }

  getFirstNameValidationState() {
    if (!this.state) return;
    if (this.state.firstName.valid === true) return 'success';
    else if (this.state.firstName.valid === false) return 'error';
  }

  handleFirstNameChange(value) {
    let isValid = false;
    if (value) {
      isValid = true;
    }
    return this.setState({ firstName: { value: value, valid: isValid } });
  }

  getLastNameValidationState() {
    if (!this.state) return;
    if (this.state.lastName.valid === true) return 'success';
    else if (this.state.lastName.valid === false) return 'error';
  }

  handleLastNameChange(value) {
    let isValid = false;
    if (value) {
      isValid = true;
    }
    return this.setState({ lastName: { value: value, valid: isValid } });
  }

  validateAll() {
    return (
      this.state.username.value &&
      this.state.email.value &&
      this.state.firstName.value &&
      this.state.lastName.value &&
      this.state.admin.value !== null
    );
  }

  render() {
    return (
      <form>
        <FormGroup controlId="username" validationState={this.getUsernameValidationState()}>
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            value={this.state.username.value}
            placeholder="Enter username"
            onChange={e => this.handleUsernameChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="email" validationState={this.getEmailValidationState()}>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            value={this.state.email.value}
            placeholder="Enter email"
            onChange={e => this.handleEmailChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="firstName" validationState={this.getFirstNameValidationState()}>
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.firstName.value}
            placeholder="Enter firstName"
            onChange={e => this.handleFirstNameChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="lastName" validationState={this.getLastNameValidationState()}>
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.lastName.value}
            placeholder="Enter lastName"
            onChange={e => this.handleLastNameChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="admin" validationState={this.getAdminValidationState()}>
          <ControlLabel>Admin</ControlLabel>
          <div>
            <ButtonGroup>
              <Button
                onClick={() => {
                  this.handleAdminChange(true);
                }}
                bsStyle={this.state.admin.value === true ? 'success' : 'default'}
              >
                Yes
              </Button>
              <Button
                onClick={() => {
                  this.handleAdminChange(false);
                }}
                bsStyle={this.state.admin.value === false ? 'danger' : ''}
              >
                No
              </Button>
            </ButtonGroup>
          </div>
          <FormControl.Feedback />
        </FormGroup>
        <Button bsStyle="success" onClick={this.handleSave} disabled={!this.validateAll()}>
          {' '}
          Save{' '}
        </Button>&nbsp;
        <LinkContainer to="/employees">
          <Button bsStyle="danger"> Cancel </Button>
        </LinkContainer>
      </form>
    );
  }
}

EmployeeForm.defaultProps = {
  employee: {}
};

EmployeeForm.propTypes = {
  employee: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired,
  history: PropTypes.object
};

export default withRouter(EmployeeForm);
