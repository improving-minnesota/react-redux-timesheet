import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timeunits from '../timeunits/Timeunits'

class TimesheetDetail extends Component {

  saveTimesheet() {
    //TODO
  }

  render() {
    return (
      <Grid>
        <Row>
          {/*TODO: timesheetForm goes here*/}
        </Row>
        <Row>
          <Timeunits timesheet={this.props.timesheet} actions={this.props.actions}/>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    timesheet: state.timesheets.timesheet
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TimesheetActions, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimesheetDetail);
