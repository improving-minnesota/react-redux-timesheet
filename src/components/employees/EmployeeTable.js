import React, { Component } from 'react';
import EmployeeRow from './EmployeeRow';
import {Table} from 'react-bootstrap';

class EmployeeTable extends Component {

  // TODO - actually implement this for realz
  render() {return (<div />);}
}

EmployeeTable.defaultProps = {
  employees: new Array()
};

EmployeeTable.propTypes = {
  employees: React.PropTypes.array.isRequired
};

export default EmployeeTable;
