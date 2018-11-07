import React from 'react';
import { Field } from 'formik';

const StyledField = ({ label, ...rest }) => (
  <div className="field">
    {label && <label>{label}</label>}
    <Field {...rest}/>
  </div>
);

export {
  StyledField
}