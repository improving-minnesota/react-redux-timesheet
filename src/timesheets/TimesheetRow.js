import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'semantic-ui-react';
import { withRouter } from 'react-router';

class TimesheetRow extends React.Component {
  handleClick = () => {
    const { timesheet, onDelete, onRestore } = this.props;

    if (timesheet.deleted) {
      onRestore(timesheet);
    } else {
      onDelete(timesheet);
    }
  };

  showDetail = () => {
    const { history, timesheet } = this.props;

    if (timesheet.deleted) {
      console.log('You cannot edit a deleted timesheet.');
      return;
    }

    history.push(`/timesheets/detail/${timesheet._id}`);
  };

  render() {
    const { timesheet } = this.props;

    return (
      <Table.Row negative={timesheet.deleted} onClick={this.showDetail}>
        <Table.Cell>{timesheet.beginDate}</Table.Cell>
        <Table.Cell>{timesheet.endDate}</Table.Cell>
        <Table.Cell>{timesheet.name}</Table.Cell>
        <Table.Cell>{timesheet.description}</Table.Cell>
        <Table.Cell>
          <Button onClick={this.handleClick}>
            {timesheet.deleted ? 'Restore' : 'Delete'}
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

TimesheetRow.propTypes = {
  onDelete: PropTypes.func,
  onRestore: PropTypes.func,
  timesheet: PropTypes.object.isRequired
};

export default withRouter(TimesheetRow);
