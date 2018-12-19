import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { withRouter } from 'react-router';

class TimesheetRow extends React.Component {
  showDetail = () => {
    const { history, timesheet } = this.props;

    if (timesheet.timesheet) {
      console.log('You cannot edit a deleted timesheet.');
      return;
    }

    history.push(`/timesheets/detail/${timesheet._id}`);
  };

  render() {
    const { timesheet } = this.props;

    return (
      <Table.Row onClick={this.showDetail}>
        <Table.Cell>{timesheet.beginDate}</Table.Cell>
        <Table.Cell>{timesheet.endDate}</Table.Cell>
        <Table.Cell>{timesheet.name}</Table.Cell>
        <Table.Cell>{timesheet.description}</Table.Cell>
      </Table.Row>
    );
  }
}

TimesheetRow.propTypes = {
  onSelect: PropTypes.func,
  timesheet: PropTypes.object.isRequired
};

export default withRouter(TimesheetRow);
