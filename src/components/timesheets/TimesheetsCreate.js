import React, { Component } from 'react';
import TimesheetForm from './TimesheetForm';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProjectActions from '../../actions/ProjectActionCreator';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';
import { withRouter } from 'react-router';

class TimesheetsCreate extends Component {

  constructor(props) {
    super(props);
    this.props.employeeActions.listEmployees();
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(project){
    // this.props.actions.createProject(project).then(() => {
    //   this.props.history.push('/projects');
    // });
  }

  // project={this.props.project} actions={this.props.actions} handleSave={this.handleSave}

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Timesheet Create</PageHeader>
        </Row>
        <Row>
          <TimesheetForm employees={this.props.employees}/>
        </Row>
      </Grid>
    );
  }
}

TimesheetsCreate.propTypes = {
  employees: React.PropTypes.array
};

TimesheetsCreate.defaultProps = {
  employees: []
};

function mapStateToProps(state) {
  return {
      employees: state.employees.employees
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ProjectActions, dispatch),
    employeeActions: bindActionCreators(EmployeeActions, dispatch)
  };
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TimesheetsCreate));