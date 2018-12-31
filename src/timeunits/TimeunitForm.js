import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import FieldWrapper from '../form/FieldWrapper';
import FormControls from '../form/FormControls';

class TimeunitForm extends React.Component {

  handleSave = (values) => {
    this.props.handleSave(values);
  };

  validate = (values) => {
    const errors = {};

    if (!values.project) {
      errors.project = 'Required';
    }
    if (!values.dateWorked) {
      errors.project = 'Required';
    }
    if (!values.hoursWorked) {
      errors.project = 'Required';
    }

    return errors;
  };

  render() {
    const { projects, timeunit } = this.props;

    return (
      <Formik
        initialValues={{
          project: timeunit.project || '',
          dateWorked: timeunit.dateWorked || '',
          hoursWorked: timeunit.hoursWorked || '',
          _id: timeunit._id || ''
        }}
        validate={this.validate}
        onSubmit={this.handleSave}
      >
        {({ isValid, errors, touched, handleReset, handleSubmit }) => (
          <Form>
            <FieldWrapper component="select" name="project" label="Project" invalid={errors.project} touched={touched.project} >
              {projects.map(project => (
                <option key={project._id} value={project._id}>{project.name}</option>
              ))}
            </FieldWrapper>

            <FieldWrapper type="date" name="dateWorked" placeholder="YYYY-MM-DD" label="Date Worked" invalid={errors.dateWorked} touched={touched.dateWorked} />
            <FieldWrapper type="number" name="hoursWorked" label="Hours Worked" invalid={errors.hoursWorked} touched={touched.hoursWorked} />

            <FormControls
              allowSubmit={isValid}
              onSubmit={handleSubmit}
              onReset={handleReset}
            />
          </Form>
        )}
      </Formik>
    );
  }
}

TimeunitForm.defaultProps = {
  projects: [],
  timeunit: {}
};

TimeunitForm.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  timesheet: PropTypes.object.isRequired,
  timeunit: PropTypes.object,
  handleSave: PropTypes.func.isRequired
};

export default TimeunitForm;
