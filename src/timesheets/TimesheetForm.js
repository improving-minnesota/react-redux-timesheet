import * as React from 'react';
import PropTypes from 'prop-types';

class TimesheetForm extends React.Component {

  handleSave = (values) => {
    if (this.validate()) {
      this.props.handleSave({
        name: values.name,
        description: values.description,
        beginDate: values.beginDate,
        endDate: values.endDate,
        user_id: values.user_id,
        _id: this.props.timesheet._id
      });
    }
  };

  validate = (values) => {
    return (
      values.name &&
      values.description &&
      values.beginDate &&
      /^\d{4}-\d{1,2}-\d{1,2}$/.test(values.beginDate) &&
      values.endDate &&
      /^\d{4}-\d{1,2}-\d{1,2}$/.test(values.endDate)
    );
  };

  render() {
    return (
      <form>
        <FormGroup controlId="name" validationState={this.getNameValidationState()}>
          {!this.props.timesheet._id && (
            <div>
              <ControlLabel>Username</ControlLabel>
              <FormControl
                componentClass="select"
                onChange={e => this.handleEmployeeChange(e.target.value)}
              >
                <option value="" disabled selected>
                  Select an employee
                </option>
                {this.props.employees.map(employee => {
                  return <option value={employee._id}>{employee.username}</option>;
                })}
              </FormControl>
            </div>
          )}
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
        <FormGroup controlId="beginDate" validationState={this.getBeginDateValidationState()}>
          <ControlLabel>Begin Date</ControlLabel>
          <FormControl
            type="text"
            value={this.state.beginDate.value}
            placeholder="YYYY-MM-DD"
            onChange={e => this.handleBeginDateChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="endDate" validationState={this.getEndDateValidationState()}>
          <ControlLabel>End Date</ControlLabel>
          <FormControl
            type="text"
            value={this.state.endDate.value}
            placeholder="YYYY-MM-DD"
            onChange={e => this.handleEndDateChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button bsStyle="success" onClick={this.handleSave} disabled={!this.validateAll()}>
          {' '}
          Save{' '}
        </Button>&nbsp;
        <LinkContainer to="/employees/all/timesheets">
          <Button bsStyle="danger"> Cancel </Button>
        </LinkContainer>
      </form>
    );
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
