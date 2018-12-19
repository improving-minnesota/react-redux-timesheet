import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Button, Table } from 'semantic-ui-react';

class TimeunitRow extends React.Component {
  handleClick = () => {
    const { onDelete, onRestore, timesheet, timeunit } = this.props;

    if (timeunit.deleted) {
      onRestore(timesheet._id, timeunit);
    } else {
      onDelete(timesheet._id, timeunit);
    }
  };

  showDetail = () => {
    const { history, timesheet, timeunit } = this.props;

    if (timeunit.deleted) {
      console.log('You cannot edit a deleted timeunit.');
      return;
    }

    history.push(`/timesheets/detail/${timesheet._id}/timeunits/detail/${timeunit._id}`);
  };

  render() {
    const { timeunit } = this.props;

    return (
      <Table.Row
        negative={timeunit.deleted}
        onClick={this.showDetail}
      >
        <Table.Cell>{timeunit.project}</Table.Cell>
        <Table.Cell>{timeunit.dateWorked}</Table.Cell>
        <Table.Cell>{timeunit.hoursWorked}</Table.Cell>
        <Table.Cell>
          <Button onClick={this.handleClick}>
            {timeunit.deleted ? 'Restore' : 'Delete'}
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

TimeunitRow.propTypes = {
  timeunit: PropTypes.object.isRequired,
  timesheet: PropTypes.object.isRequired,
  history: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired
};

export default withRouter(TimeunitRow);
