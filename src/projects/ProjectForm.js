import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import { Button } from 'semantic-ui-react';
import { FieldError } from '../form/FieldError';
import { StyledField } from '../form/StyledField';

class ProjectForm extends React.Component {

  handleSave = (values) => {
    this.props.handleSave({
      name: values.name,
      description: values.description,
      _id: values._id
    });
  };

  validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 25) {
      errors.name = 'Max length 25';
    }

    if (!values.description) {
      errors.description = 'Required';
    }

    return errors;
  };

  render() {
    const { project } = this.props;

    return (
      <Formik
        initialValues={{
          name: project.name || '',
          description: project.description || '',
          _id: project._id
        }}
        validate={this.validate}
        onSubmit={this.handleSave}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="ui form">
            <StyledField type="text" name="name" label="Name" />
            <FieldError name="name" />

            <StyledField type="text" name="description" label="Description" />
            <FieldError name="description" />

            <Button type="submit" disabled={isSubmitting || !isValid} inverted primary>
              Save
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

ProjectForm.defaultProps = {
  project: {}
};

ProjectForm.propTypes = {
  project: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired
};

export default ProjectForm;
