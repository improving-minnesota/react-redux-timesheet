import React from 'react';
import { Message } from 'semantic-ui-react';
import { ErrorMessage } from 'formik';

const FieldError = ({ name }) => (
  <ErrorMessage
    name={ name }
    render={ (message) => (
      <Message error visible compact size="mini">{ message }</Message>
    ) }
  />
);

export {
  FieldError
}