import React from 'react';
import { Field } from 'formik';
import { FormControl, FormGroup } from 'react-bootstrap';
import ControlLabel from 'react-bootstrap/es/ControlLabel';

const FieldWrapper = ({ name, label, invalid, children, component, ...rest }) => (
  <div className="field">
    {label && <ControlLabel>{label}</ControlLabel>}
    <Field
      name={name}
      render={({ field  }) => (
        <FormGroup validationState={invalid ? 'error' : null}>
          <FormControl {...field} componentClass={component} >
            {children}
          </FormControl>
        </FormGroup>
      )}
    />
    {invalid && (
      <small style={{ color: 'red' }}>{invalid}</small>
    )}
  </div>
);

export {
  FieldWrapper
}