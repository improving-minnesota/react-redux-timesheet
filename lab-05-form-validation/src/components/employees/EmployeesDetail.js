import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmployeeForm from './EmployeeForm';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';
import { withRouter } from 'react-router';

class EmployeesDetail extends Component {

  // TODO - implement me

  render() {
    return (
      <div/>
    );
  }
}

EmployeesDetail.defaultProps = {
  employee: {}
};

EmployeesDetail.propTypes = {

  //TODO: require the employee object here

  history: PropTypes.object
};


const mapStateToProps = (state) => {
  return {
    //TODO: map the redux store state to the component props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //TODO: bind the action creators here
  };
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesDetail));
