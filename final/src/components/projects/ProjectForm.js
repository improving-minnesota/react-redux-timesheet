import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';

class ProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: { value: null, valid: null },
      description: { value: null, valid: null }
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.getNameValidationState = this.getNameValidationState.bind(this);

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.getDescriptionValidationState = this.getDescriptionValidationState.bind(
      this
    );

    this.validateAll = this.validateAll.bind(this);

    this.handleSave = this.handleSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: { value: nextProps.project.name, valid: null },
      description: { value: nextProps.project.description, valid: null }
    });
  }

  handleSave() {
    if (this.validateAll()) {
      this.props.handleSave({
        name: this.state.name.value,
        description: this.state.description.value,
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

  validateAll() {
    return this.state.name.value && this.state.description.value;
  }

  render() {
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
            onChange={e => this.handleNameChange(e.target.value)}
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
            onChange={e => this.handleDescriptionChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button
          bsStyle="success"
          onClick={this.handleSave}
          disabled={!this.validateAll()}
        >
          {' '}
          Save{' '}
        </Button>&nbsp;
        <LinkContainer to="/projects">
          <Button bsStyle="danger"> Cancel </Button>
        </LinkContainer>
      </form>
    );
  }
}

ProjectForm.defaultProps = {
  project: {}
};

ProjectForm.propTypes = {
  project: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired,
  history: PropTypes.object
};

export default withRouter(ProjectForm);
