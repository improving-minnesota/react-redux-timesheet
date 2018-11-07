import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';

class TimeunitForm extends React.Component {

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
    return !!values.name && !!values.description;
  };

  render() {
    const { projects, timeunit } = this.props;

    return (
      <Formik
        initialValues={{
          name: project.name,
          description: project.description,
          _id: project._id
        }}
        validate={this.validate}
        onSubmit={this.handleSave}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field type="select" name="project" options={projects} />
            <ErrorMessage name="project" component="div" />
            <Field type="date" name="dateWorked" />
            <ErrorMessage name="dateWorked" component="div" />
            <Field type="number" name="hoursWorked" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting || !isValid}>
              Save
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

ProjectForm.defaultProps = {
  projects: [],
  timeunit: {}
};

ProjectForm.propTypes = {
  project: PropTypes.arrayOf(PropTypes.object).isRequired,
  timesheet: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired
};

export default TimeunitForm;
