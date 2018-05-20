import React, { Component } from 'react';
import TimesheetTable from './TimesheetTable';
import { PageHeader, Grid, Row, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimesheetActions from '../../actions/TimesheetActionCreator';
import { LinkContainer } from 'react-router-bootstrap';

class Timesheets extends Component {
  constructor(props) {
    super(props);
    props.actions.listTimesheets();
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Timesheets</PageHeader>
        </Row>
        <Row>
          <div className="pull-right">
            <LinkContainer to="/timesheets/create">
              <Button bsStyle="primary">Create Timesheet</Button>
            </LinkContainer>
          </div>
        </Row>
        <Row>
          <TimesheetTable
            timesheets={this.props.timesheets}
            actions={this.props.actions}
          />
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    timesheets: state.timesheets.timesheets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TimesheetActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timesheets);
