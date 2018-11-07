import React from 'react';
import { Field } from 'formik';

const StyledField = ({ label, children, ...rest }) => (
  <div className="field">
    {label && <label>{label}</label>}
    <Field {...rest}>
      {children}
    </Field>
  </div>
);

export {
  StyledField
}