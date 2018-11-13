import React from 'react';
import { Field } from 'formik';

const StyledField = ({ label, invalid, children, ...rest }) => (
  <div className="field">
    {label && <label>{label}</label>}
    <Field {...rest} style={{ borderColor: invalid ? 'red' : undefined }}>
      {children}
    </Field>
    {invalid && (
      <p style={{ color: 'red' }}>{invalid}</p>
    )}
  </div>
);

export {
  StyledField
}