import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import FieldWrapper from '../form/FieldWrapper';
import FormControls from '../form/FormControls';

class EmployeeForm extends React.Component {

  validate = (values) => {
  };

  handleSave = (values) => {
  };

  render() {
  }
}

EmployeeForm.propTypes = {
  employee: PropTypes.object,
  handleSave: PropTypes.func
};

export default EmployeeForm;
