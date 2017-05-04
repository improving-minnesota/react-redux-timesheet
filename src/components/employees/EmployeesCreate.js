import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';

class EmployeesCreate extends Component {

  constructor(props) {
    super(props);
    props.actions.listEmployees();

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(employee){
    this.props.actions.createEmployee(employee).then(() => {
      this.context.router.history.push('/employees');
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Employees Create</PageHeader>
        </Row>
        <Row>
          <EmployeeForm employee={this.props.employee} actions={this.props.actions} handleSave={this.handleSave}/>
        </Row>
      </Grid>
    );
  }
}

EmployeesCreate.defaultProps = {
  employee: {}
};

EmployeesCreate.contextTypes = {
  router: React.PropTypes.object
};


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(EmployeeActions, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesCreate);