import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { StyledField } from '../form/StyledField';
import { FieldError } from '../form/FieldError';
import { Button } from 'semantic-ui-react';

class TimesheetForm extends React.Component {

  handleSave = (values) => {
    this.props.handleSave(values);
  };

  validate = (values) => {
    const errors = {};

    if (!values.employee) {
      errors.employee = 'Required';
    }
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    if (!values.startDate) {
      errors.startDate = 'Required';
    }
    if (!values.endDate) {
      errors.endDate = 'Required';
    }

    return errors;
  };

  render() {
    const { employees, timesheet } = this.props;

    return (
      <Formik
        initialValues={{
          name: timesheet.name,
          description: timesheet.description,
          employee: timesheet.employee,
          startDate: timesheet.startDate,
          endDate: timesheet.endDate,
          _id: timesheet._id
        }}
        validate={this.validate}
        onSubmit={this.handleSave}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <StyledField type="select" name="employee" label="Employee">
              {employees.map(employee => (
                <option key={employee._id} value={employee._id}>{`${employee.firstName} ${employee.lastName}`}</option>
              ))}
            </StyledField>
            <FieldError name="employee" />

            <StyledField type="text" name="name" label="Name" />
            <FieldError name="name" />

            <StyledField type="text" name="description" label="Description" />
            <FieldError name="description" />

            <StyledField type="date" name="startDate" placeholder="YYYY-MM-DD" label="Start Date" />
            <FieldError name="startDate" />

            <StyledField type="date" name="endDate" placeholder="YYYY-MM-DD" label="End Date" />
            <FieldError name="endDate" />

            <Button type="submit" disabled={isSubmitting || !isValid} primary inverted>
              Save
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

TimesheetForm.defaultProps = {
  employees: [],
  timesheet: {}
};

TimesheetForm.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object).isRequired,
  timesheet: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired
};

export default TimesheetForm;
