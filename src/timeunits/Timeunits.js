import React, { Component } from 'react';
import TimeunitTable from './TimeunitTable';
import { Button, Grid, PageHeader, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as TimeunitActions from '../actions/TimeunitActionCreator';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

class Timeunits extends Component {
  componentDidMount() {
    const { listTimeunits, timesheet } = this.props;
    listTimeunits(timesheet._id);
  }

  render() {
    const { timesheet, timeunits, deleteTimeunit, restoreTimeunit } = this.props;
    const timeunitsCreateLink = timesheet
      ? `/employees/${timesheet.user_id}/timesheets/detail/${timesheet._id}/timeunits/create`
      : '';
    return (
      <div>
        <Header as="h1">Timeunits</Header>
        <div className="pull-right">
          <Link to={ timeunitsCreateLink }>
            <Button bsStyle="primary">Create Timeunit</Button>
          </Link>
        </div>
        <TimeunitTable
          timeunits={ timeunits }
          timesheet={ timesheet }
          onDelete={ deleteTimeunit }
          onRestore={ restoreTimeunit }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    timeunits: state.timeunits.timeunits
  };
};

const mapDispatchToProps = {
  listTimeunits: TimeunitActions.listTimeunits,
  deleteTimeunit: TimeunitActions.deleteTimeunit,
  restoreTimeunit: TimeunitActions.restoreTimeunit
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeunits);
