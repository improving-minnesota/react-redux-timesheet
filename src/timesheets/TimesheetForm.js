import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { FieldWrapper } from '../form/FieldWrapper';
import FormControls from '../form/FormControls';

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
    if (!values.beginDate) {
      errors.beginDate = 'Required';
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
        initialValues={ {
          name: timesheet.name,
          description: timesheet.description,
          employee: timesheet.employee,
          beginDate: timesheet.beginDate,
          endDate: timesheet.endDate,
          _id: timesheet._id
        } }
        validate={ this.validate }
        onSubmit={ this.handleSave }
      >
        { ({ isValid, errors, handleReset, handleSubmit }) => (
          <Form>
            <FieldWrapper component="select" name="employee" label="Employee" invalid={ errors.employee }>
              { employees.map(employee => (
                <option key={ employee._id }
                        value={ employee._id }>{ `${employee.firstName} ${employee.lastName}` }</option>
              )) }
            </FieldWrapper>

            <FieldWrapper type="text" name="name" label="Name" invalid={ errors.name }/>
            <FieldWrapper type="text" name="description" label="Description" invalid={ errors.description }/>
            <FieldWrapper type="date" name="beginDate" placeholder="YYYY-MM-DD" label="Start Date"
                         invalid={ errors.beginDate }/>
            <FieldWrapper type="date" name="endDate" placeholder="YYYY-MM-DD" label="End Date"
                         invalid={ errors.endDate }/>

            <FormControls
              allowSubmit={isValid}
              onSubmit={handleSubmit}
              onReset={handleReset}
            />
          </Form>
        ) }
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
