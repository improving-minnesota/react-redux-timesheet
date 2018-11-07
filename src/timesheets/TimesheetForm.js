import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';

class TimesheetForm extends React.Component {

  handleSave = (values) => {
    if (this.validate()) {
      this.props.handleSave({
        name: values.name,
        description: values.description,
        startDate: values.startDate,
        endDate: values.endDate,
        _id: values._id
      });
    }
  };

  validate = (values) => {
    return !!values.employee && !!values.name && !!values.description && !!values.startDate && !!values.endDate;
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
            <Field type="select" name="employee" options={employees} />
            <ErrorMessage name="employee" component="div" />
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <Field type="text" name="description" />
            <ErrorMessage name="password" component="div" />
            <Field type="date" name="startDate" placeholder="YYYY-MM-DD" />
            <ErrorMessage name="startDate" component="div" />
            <Field type="date" name="endDate" placeholder="YYYY-MM-DD" />
            <ErrorMessage name="endDate" component="div" />
            <button type="submit" disabled={isSubmitting || !isValid}>
              Save
            </button>
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
