import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { FieldWrapper } from '../form/FieldWrapper';
import { Button, Container } from 'semantic-ui-react';

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
    return (
      <Container>
        <Formik
          validate={this.validate}
          onSubmit={this.login}
          initialValues={{
            username: '',
            password: ''
          }}>
          {({ isValid, errors }) => (
            <Form className="ui form">
              <FieldWrapper type="text" name="username" label="Username" invalid={errors.username}/>
              <FieldWrapper type="password" name="password" label="Password" invalid={errors.email}/>

              <Button type="submit" disabled={!isValid} primary>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func
};

export default LoginForm;
