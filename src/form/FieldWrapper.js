import React from 'react';
import { Field } from 'formik';

const FieldWrapper = ({ label, invalid, children, component, ...rest }) => (
  <div className="field">
    {label && <label>{label}</label>}
    <Field {...rest} component={component} style={{ borderColor: invalid ? 'red' : undefined }} className={component === 'select' ? 'ui selection dropdown' : ''}>
      {children}
    </Field>
    {invalid && (
      <p style={{ color: 'red' }}>{invalid}</p>
    )}
  </div>
);

export {
  FieldWrapper
}