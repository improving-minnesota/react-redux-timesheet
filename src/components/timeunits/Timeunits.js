import React, { Component } from 'react';
import TimeunitTable from './TimeunitTable';
import {PageHeader, Grid, Row, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimeunitActions from '../../actions/TimeunitActionCreator';

class Timeunits extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    //Reload timeunits only when timesheet changes
    if (nextProps.timesheet && (!this.props.timesheet || nextProps.timesheet._id !== this.props.timesheet._id)) {
      this.props.actions.listTimeunits(nextProps.timesheet._id);
    }
  }

  render() {
    const timesheet = this.props.timesheet;
    const timeunitsCreateLink = timesheet ? `/employees/${timesheet.user_id}/timesheets/detail/${timesheet._id}/timeunits/create` : '';
    return (
      <Grid>
        <Row>
          <PageHeader>Timeunits</PageHeader>
        </Row>
        <Row>
          <div className="pull-right">
            <LinkContainer to={timeunitsCreateLink}>
              <Button bsStyle="primary">Create Timeunit</Button>
            </LinkContainer>
          </div>
        </Row>
        <Row>
          <TimeunitTable timeunits={this.props.timeunits} timesheet={this.props.timesheet} actions={this.props.actions}/>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    timeunits: state.timeunits.timeunits
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
