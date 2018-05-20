import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonGroup
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);

    //This is the form initial state
    this.state = {
      username: { value: null, valid: null },
      email: { value: null, valid: null },
      firstName: { value: null, valid: null },
      lastName: { value: null, valid: null },
      admin: { value: false, valid: null }
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.getUsernameValidationState = this.getUsernameValidationState.bind(
      this
    );

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.getEmailValidationState = this.getEmailValidationState.bind(this);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.getFirstNameValidationState = this.getFirstNameValidationState.bind(
      this
    );

    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.getLastNameValidationState = this.getLastNameValidationState.bind(
      this
    );

    this.handleAdminChange = this.handleAdminChange.bind(this);
    this.getAdminValidationState = this.getAdminValidationState.bind(this);

    this.validateAll = this.validateAll.bind(this);

    this.handleSave = this.handleSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // TODO - implement me to handle changes from form field props
  }

  handleSave() {
    //TODO: implement handleSave() method here
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
      //TODO: check all validation values here, instead of just returning true
      true
    );
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="username"
          validationState={this.getUsernameValidationState()}
        >
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            value={this.state.username.value}
            placeholder="Enter username"
            onChange={e => this.handleUsernameChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>

        {/*TODO: Implement email form control here*/}

        {/*TODO: Implement firstName form control here*/}

        <FormGroup
          controlId="lastName"
          validationState={this.getLastNameValidationState()}
        >
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.lastName.value}
            placeholder="Enter lastName"
            onChange={e => this.handleLastNameChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="admin"
          validationState={this.getAdminValidationState()}
        >
          <ControlLabel>Admin</ControlLabel>
          <div>
            <ButtonGroup>
              <Button
                onClick={() => {
                  this.handleAdminChange(true);
                }}
                bsStyle={this.state.admin.value === true ? 'success' : ''}
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

        {/* TODO: Implement Save and Cancel buttons here */}
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
