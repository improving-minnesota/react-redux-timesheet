import * as React from 'react';
import PropTypes from 'prop-types';
import * as EmployeeActionCreators from '../actions/EmployeeActionCreator';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class EmployeeDetail extends React.Component {
  handleSave = (values) => {

  };

  render() {
    return (
      <div>
          TODO
      </div>
    );
  }
}

EmployeeDetail.propTypes = {
};

EmployeeDetail.defaultProps = {
};

export default EmployeeDetail;
