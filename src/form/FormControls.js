import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';

const FormControls = ({ action, allowSubmit, onSubmit, onReset }) => (
  <ButtonToolbar>
    <Button type="button" onClick={onSubmit} disabled={!allowSubmit} bsStyle="primary">
      {action}
    </Button>
    <Button type="button" onClick={onReset} bsStyle="danger">
      Reset
    </Button>
  </ButtonToolbar>
);

FormControls.propTypes = {
  action: PropTypes.string,
  allowSubmit: PropTypes.bool,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func
};

FormControls.defaultProps = {
  action: 'Save',
  allowSubmit: true,
  onSubmit: () => {},
  onReset: () => {}
};

export default FormControls;
