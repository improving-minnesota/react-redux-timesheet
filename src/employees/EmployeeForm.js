import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { FieldWrapper } from '../form/FieldWrapper';
import { Button } from 'react-bootstrap';

class EmployeeForm extends React.Component {

  handleSave = (values) => {
    this.props.handleSave(values);
  };

  validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }

    return errors;
  };

  render() {
    const { employee } = this.props;

    return (
      <Formik
        initialValues={ {
          username: employee.username || '',
          email: employee.email || '',
          firstName: employee.firstName || '',
          lastName: employee.lastName || '',
          admin: employee.admin || '',
          _id: employee._id
        } }
        validate={ this.validate }
        onSubmit={ this.handleSave }
      >
        { ({ isSubmitting, isValid, errors }) => (
          <Form className="ui form">
            <FieldWrapper type="text" name="username" label="Username" invalid={ errors.username }/>
            <FieldWrapper type="text" name="email" label="Email" invalid={ errors.email }/>
            <FieldWrapper type="text" name="firstName" label="First Name" invalid={ errors.firstName }/>
            <FieldWrapper type="text" name="lastName" label="Last Name" invalid={ errors.lastName }/>
            <FieldWrapper type="checkbox" name="admin" label="Admin" invalid={ errors.admin }/>

            <Button type="submit" disabled={ isSubmitting || !isValid } primary>
              Save
            </Button>
          </Form>
        ) }
      </Formik>
    );
  }
}

EmployeeForm.defaultProps = {
  employee: {}
};

EmployeeForm.propTypes = {
  employee: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired
};

export default EmployeeForm;
