import React, { Component } from 'react';
import TimesheetTable from './TimesheetTable';
import { PageHeader, Grid, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimesheetActions from '../../actions/TimesheetActionCreator';

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
          <TimesheetTable
            timesheets={this.props.timesheets}
            actions={this.props.actions}
          />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    timesheets: state.timesheets.timesheets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(TimesheetActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timesheets);
