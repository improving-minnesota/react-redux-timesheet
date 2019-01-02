import React from 'react';
import PropTypes from 'prop-types';

class TimesheetRow extends React.Component {
  render() {
    const { timesheet } = this.props;

    return (
      <tr>
        <td>{timesheet.beginDate}</td>
        <td>{timesheet.endDate}</td>
        <td>{timesheet.name}</td>
        <td>{timesheet.description}</td>
      </tr>
    );
  }
}

TimesheetRow.propTypes = {
  timesheet: PropTypes.object.isRequired
};

export default TimesheetRow;
