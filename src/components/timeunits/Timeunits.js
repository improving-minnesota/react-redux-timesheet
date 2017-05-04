import React, { Component } from 'react';
import TimeunitTable from './TimeunitTable';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimeunitActions from '../../actions/TimeUnitActionCreator';

//TODO: Jeff left off here --- lots of work todo still

class Timeunits extends Component {

  constructor(props) {
    super(props);
    props.actions.listTimeunits();
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Timeunits</PageHeader>
        </Row>
        <Row>
          <TimeunitTable timeunits={this.props.timeunits} actions={this.props.actions}/>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    timeunits: state.timeunits.timeunits,
    timesheet: state.timeunits.timesheet
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TimeunitActions, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeunits);
