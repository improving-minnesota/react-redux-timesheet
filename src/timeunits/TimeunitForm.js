import * as React from 'react';
import PropTypes from 'prop-types';

import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class TimeunitForm extends React.Component {

  handleSave = values => {
    if (this.validate()) {
      this.props.handleSave({
        project: values.project,
        dateWorked: values.dateWorked,
        hoursWorked: values.hoursWorked,
        timesheet_id: values.timesheetId,
        _id: values._id
      });
    }
  };

  validate = (values) => {
    return values.project && values.dateWorked && values.hoursWorked;
  };

  render() {
    return (
      <form>
        <FormGroup controlId="project" validationState={this.getProjectValidationState()}>
          <ControlLabel>Project</ControlLabel>
          <FormControl
            value={this.state.project.value}
            placeholder="Project1"
            componentClass="select"
            onChange={e => this.handleProjectChange(e.target.value)}
          >
            <option value="" disabled selected>
              Select a project
            </option>
            {this.props.projects.map(project => {
              return <option value={project.name}>{project.name}</option>;
            })}
          </FormControl>
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="dateWorked" validationState={this.getDateWorkedValidationState()}>
          <ControlLabel>Date Worked</ControlLabel>
          <FormControl
            type="text"
            value={this.state.dateWorked.value}
            placeholder="YYYY-MM-DD"
            onChange={e => this.handleDateWorkedChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="hoursWorked" validationState={this.getHoursWorkedValidationState()}>
          <ControlLabel>Hours Worked</ControlLabel>
          <FormControl
            type="text"
            value={this.state.hoursWorked.value}
            placeholder="Number of hours worked"
            onChange={e => this.handleHoursWorkedChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button bsStyle="success" onClick={this.handleSave} disabled={!this.validateAll()}>
          {' '}
          Save{' '}
        </Button>&nbsp;
        <LinkContainer
          to={'/employees/' + this.props.userId + '/timesheets/detail/' + this.props.timesheetId}
        >
          <Button bsStyle="danger"> Cancel </Button>
        </LinkContainer>
      </form>
    );
  }
}

TimeunitForm.defaultProps = {
  timeunit: {},
  projects: []
};

TimeunitForm.propTypes = {
  timesheetId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  timeunit: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired
};

export default TimeunitForm;
