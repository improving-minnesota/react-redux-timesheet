import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { bindActionCreators } from "redux";
import * as AuthActions from "../../actions/AuthActionCreator";
import connect from "react-redux/es/connect/connect";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: { value: '', valid: null },
      password: { value: '', valid: null }
    };
  }

  handleSubmit = () => {
    if (this.validateAll()) {
      this.props.authActions.login({
        username: this.state.username.value,
        password: this.state.password.value
      });
    }
  };

  getUsernameValidationState = () => {
    if (!this.state) return;
    if (this.state.username.valid === true) return 'success';
    else if (this.state.username.valid === false) return 'error';
  };

  handleUsernameChange = (value) => {
    let isValid = false;
    if (value) {
      isValid = true;
    }
    return this.setState({ username: { value: value, valid: isValid } });
  };

  getPasswordValidationState = () => {
    if (!this.state) return;
    if (this.state.password.valid === true) return 'success';
    else if (this.state.password.valid === false) return 'error';
  };

  handlePasswordChange = (value) => {
    let isValid = false;
    if (value) {
      isValid = true;
    }
    return this.setState({ password: { value: value, valid: isValid } });
  };

  validateAll = () => {
    return (
      this.state.username.value &&
      this.state.password.value !== null
    );
  };

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
        <FormGroup controlId="password" validationState={this.getPasswordValidationState()}>
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="password"
            value={this.state.password.value}
            placeholder="Enter username"
            onChange={e => this.handlePasswordChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button bsStyle="success" onClick={this.handleSubmit} disabled={!this.validateAll()}>
          Login
        </Button>&nbsp;
        {this.props.error && <strong>{this.props.error}</strong>}
      </form>
    );
  }
}

LoginForm.defaultProps = {
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    error: state.auth.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(AuthActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);