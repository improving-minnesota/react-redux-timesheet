import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';

const FormControls = ({ allowSubmit, onSubmit, onReset }) => (
  <ButtonToolbar>
    <Button type="button" onClick={onSubmit} disabled={!allowSubmit} bsStyle="primary">
      Save
    </Button>
    <Button type="button" onClick={onReset}>
      Reset
    </Button>
  </ButtonToolbar>
);

FormControls.propTypes = {
  allowSubmit: PropTypes.bool,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func
};

export default FormControls;
