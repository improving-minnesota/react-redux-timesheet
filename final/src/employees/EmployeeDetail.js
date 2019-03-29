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
  static propTypes = {
    history: PropTypes.object
  };

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

  onUpdate = async employee => {
    const response = await Axios.put(url(employee._id), employee);
    return response.data;
  };

  onCreate = async employee => {
    const response = await Axios.post(url(employee._id), employee);
    return response.data;
  };

  handleSave = values => {
    const { history } = this.props;

    const result = values._id ? this.onUpdate(values) : this.onCreate(values);
    result.then(() => {
      history.push('/employees');
    });
  };

  render() {
    const { employee } = this.state;

    if (!employee) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>Employee Detail</h1>
        <EmployeeForm employee={employee} handleSave={this.handleSave} />
      </div>
    );
  }
}

export default withRouter(EmployeeDetail);
