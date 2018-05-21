import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable';
import { PageHeader, Grid, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';

class Employees extends Component {
  constructor(props) {
    super(props);

    //Replaces the previously hard-coded state assignment
    props.actions.listEmployees();
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Employees</PageHeader>
        </Row>
        <Row>{/* TODO - Add a button to open the create employee route */}</Row>
        <Row>
          <EmployeeTable employees={this.props.employees} actions={this.props.actions} />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees.employees
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(EmployeeActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
