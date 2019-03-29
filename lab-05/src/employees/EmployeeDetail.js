import * as React from 'react';
import PropTypes from 'prop-types';
import EmployeeForm from './EmployeeForm';
import { withRouter } from 'react-router';
import Axios from 'axios';

const apiUrl = '/api/users';

const url = employeeId => {
  if (employeeId) {
    return `${apiUrl}/${employeeId}`;
  }
  return apiUrl;
};

class EmployeeDetail extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    employee: null
  };

  async componentDidMount() {
    const { match } = this.props;
    const { _id } = match.params;
    const { data: employee } = await Axios.get(url(_id));
    this.setState({ employee });
  }

  onUpdate = async employee => {};

  onCreate = async employee => {};

  handleSave = values => {};

  render() {
    const { employee } = this.state;

    if (!employee) {
      return <div>Loading...</div>;
    }

    return <div>TODO</div>;
  }
}

export default withRouter(EmployeeDetail);
