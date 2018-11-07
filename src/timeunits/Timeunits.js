import React, { Component } from 'react';
import TimeunitTable from './TimeunitTable';
import { connect } from 'react-redux';
import * as TimeunitActions from '../actions/TimeunitActionCreator';
import { Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Timeunits extends Component {
  componentDidMount() {
    const { listTimeunits, timesheet } = this.props;
    listTimeunits(timesheet._id);
  }

  render() {
    const { timesheet, timeunits, deleteTimeunit, restoreTimeunit } = this.props;
    return (
      <div>
        <Header as="h1">
          Timeunits
          <Button floated="right" primary inverted>
            <Link to="/timeunits/details">New Timeunit</Link>
          </Button>
        </Header>
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
  deleteTimeunit: TimeunitActions.removeTimeunit,
  restoreTimeunit: TimeunitActions.restoreTimeunit
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeunits);
