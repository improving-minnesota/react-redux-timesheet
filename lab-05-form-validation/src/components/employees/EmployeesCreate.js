import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmployeeForm from './EmployeeForm';
import { PageHeader, Grid, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';
import { withRouter } from 'react-router';

class EmployeesCreate extends Component {
  constructor(props) {
    super(props);
    props.actions.listEmployees();

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(employee) {
    this.props.actions.createEmployee(employee).then(() => {
      this.props.history.push('/employees');
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Employees Create</PageHeader>
        </Row>
        <Row>
          <EmployeeForm
            employee={this.props.employee}
            actions={this.props.actions}
            handleSave={this.handleSave}
          />
        </Row>
      </Grid>
    );
  }
}

EmployeesCreate.defaultProps = {
  employee: {}
};

EmployeesCreate.propTypes = {
  employee: PropTypes.object.isRequired,
  history: PropTypes.object
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(EmployeeActions, dispatch)
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EmployeesCreate)
);
