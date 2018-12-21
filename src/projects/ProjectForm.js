import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { FieldWrapper } from '../form/FieldWrapper';
import { Button } from 'react-bootstrap';

class ProjectForm extends React.Component {

  handleSave = (values) => {
    this.props.handleSave(values);
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
        initialValues={ {
          name: project.name || '',
          description: project.description || '',
          _id: project._id
        } }
        validate={ this.validate }
        onSubmit={ this.handleSave }
      >
        { ({ isSubmitting, isValid, errors }) => (
          <Form className="ui form">
            <FieldWrapper type="text" name="name" label="Name" invalid={ errors.name }/>
            <FieldWrapper type="text" name="description" label="Description" invalid={ errors.description }/>

            <Button type="submit" disabled={ isSubmitting || !isValid } primary>
              Save
            </Button>
          </Form>
        ) }
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
