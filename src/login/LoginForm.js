import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import FieldWrapper from '../form/FieldWrapper';
import FormControls from '../form/FormControls';

class LoginForm extends React.Component {

  validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  };

  login = (values) => {
    this.props.onLogin({
      username: values.username,
      password: values.password
    });
  };

  render() {
    const { loginError } = this.props;

    return (
      <div>
        <Formik
          validate={this.validate}
          onSubmit={this.login}
          initialValues={{
            username: '',
            password: ''
          }}>
          {({ isValid, errors, handleSubmit, handleReset }) => (
            <Form>
              <FieldWrapper type="text" name="username" label="Username" invalid={errors.username}/>
              <FieldWrapper type="password" name="password" label="Password" invalid={errors.email}/>

              <FormControls
                action="Login"
                allowSubmit={isValid}
                onSubmit={handleSubmit}
                onReset={handleReset}
              />
            </Form>
          )}
        </Formik>
        {loginError && (
          <p style={{ color: 'red' }}>{loginError}</p>
        )}
      </div>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  loginError: PropTypes.string
};

export default LoginForm;
