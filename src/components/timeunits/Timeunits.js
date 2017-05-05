import React, { Component } from 'react';
import TimeunitTable from './TimeunitTable';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimeunitActions from '../../actions/TimeUnitActionCreator';

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
        <div className="pull-right">
          {/*<LinkContainer to="/projects/create">
            <Button bsStyle="primary">Create Project</Button>
          </LinkContainer>*/}
        </div>
        <Row>
          <TimeunitTable timeunits={this.props.timeunits} timesheet={this.props.timesheet} actions={this.props.actions}/>
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
