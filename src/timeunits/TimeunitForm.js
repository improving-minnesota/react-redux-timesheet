import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { StyledField } from '../form/StyledField';
import { Button } from 'semantic-ui-react';
import { FieldError } from '../form/FieldError';

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
        {({ isSubmitting, isValid }) => (
          <Form>
            <StyledField type="select" name="project" label="Project">
              {projects.map(project => (
                <option key={project._id} value={project._id}>{project.name}</option>
              ))}
            </StyledField>
            <FieldError name="project" />

            <StyledField type="date" name="dateWorked" placeholder="YYYY-MM-DD" label="Date Worked" />
            <FieldError name="dateWorked" />

            <StyledField type="number" name="hoursWorked" label="Hours Worked" />
            <FieldError name="hoursWorked" />

            <Button type="submit" disabled={isSubmitting || !isValid}>
              Save
            </Button>
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
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  timesheet: PropTypes.object.isRequired,
  timeunit: PropTypes.object,
  handleSave: PropTypes.func.isRequired
};

export default TimeunitForm;
