import React from 'react';
import PropTypes from 'prop-types';
import * as TimeunitActions from '../actions/TimeunitActionCreator';
import TimeunitTable from './TimeunitTable';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Timeunits extends React.Component {
  componentDidMount() {
    const { listTimeunits, timesheet } = this.props;
    listTimeunits(timesheet._id);
  }

  render() {
    const { timesheet, timeunits, deleteTimeunit, restoreTimeunit } = this.props;

    return (
      <div>
        <h1>Timeunits</h1>
        <Link to={`/timesheets/detail/${timesheet._id}/timeunits/detail`}>
          <Button>Create Timeunit</Button>
        </Link>
        <TimeunitTable
          timeunits={timeunits}
          timesheet={timesheet}
          onDelete={deleteTimeunit}
          onRestore={restoreTimeunit}
        />
      </div>
    );
  }
}

Timeunits.propTypes = {
  timeunits: PropTypes.arrayOf(PropTypes.object),
  listTimeunits: PropTypes.func,
  deleteTimeunit: PropTypes.func,
  restoreTimeunit: PropTypes.func
};

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
