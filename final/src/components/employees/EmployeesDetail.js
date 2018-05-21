import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmployeeForm from './EmployeeForm';
import { PageHeader, Grid, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';
import { withRouter } from 'react-router';

class EmployeesDetail extends Component {
  constructor(props) {
    super(props);

    const id = props.match.params._id;
    props.actions.getEmployee(id);

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(employee) {
    this.props.actions.updateEmployee(employee).then(() => {
      this.props.history.push('/employees');
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Employees Detail</PageHeader>
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

EmployeesDetail.defaultProps = {
  employee: {}
};

EmployeesDetail.propTypes = {
  employee: PropTypes.object.isRequired,
  history: PropTypes.object
};

const mapStateToProps = state => {
  return {
    employee: state.employees.employee
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(EmployeeActions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeesDetail));
