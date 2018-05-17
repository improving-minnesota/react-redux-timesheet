import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmployeeForm from './EmployeeForm';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';
import { withRouter } from 'react-router';

class EmployeesCreate extends Component {

  // TODO - implement me

  render() {
    return (
      <div/>
    );
  }
}

EmployeesCreate.defaultProps = {
  employee: {}
};

EmployeesCreate.propTypes = {

  //TODO: Require the employee proptype

  history: PropTypes.object
};


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //TODO: bind the redux action creators to the component props here
    //actions: bindActionCreators(EmployeeActions, dispatch)
  };
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesCreate));
