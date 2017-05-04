import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';

class EmployeesDetail extends Component {

  constructor(props) {
    super(props);

    const id = props.match.params._id;
    props.actions.getEmployee(id);

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(employee){
    this.props.actions.updateEmployee(employee).then(() => {
      this.context.router.history.push('/employees');
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Employees Detail</PageHeader>
        </Row>
        <Row>
          <EmployeeForm employee={this.props.employee} actions={this.props.actions} handleSave={this.handleSave}/>
        </Row>
      </Grid>
    );
  }
}

EmployeesDetail.contextTypes = {
  router: React.PropTypes.object
};


function mapStateToProps(state) {
  return {
    employee: state.employees.employee
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
)(EmployeesDetail);