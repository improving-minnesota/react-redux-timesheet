import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';

class ProjectForm extends Component {

  handleSave = (values) => {
    if (this.validate()) {
      this.props.handleSave({
        name: values.name,
        description: values.description,
        _id: values._id
      });
    }
  };

  validate = (values) => {
    return values.name && values.description;
  };

  render() {
    return (
      <form>
        <FormGroup controlId="name" validationState={this.getNameValidationState()}>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.name.value}
            placeholder="Enter name"
            onChange={e => this.handleNameChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="description" validationState={this.getDescriptionValidationState()}>
          <ControlLabel>Description</ControlLabel>
          <FormControl
            type="text"
            value={this.state.description.value}
            placeholder="Enter description"
            onChange={e => this.handleDescriptionChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button bsStyle="success" onClick={this.handleSave} disabled={!this.validateAll()}>
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
