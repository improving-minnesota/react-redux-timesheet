import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';

class Employees extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageConfig: {
        data: [
          {
            "username": "admin",
            "email": "admin@mixtape.com",
            "password": "password",
            "admin": true,
            "firstName": "Admin",
            "lastName": "User"
          },
          {
            "username": "user",
            "email": "user@mixtape.com",
            "password": "password",
            "admin": false,
            "firstName": "Normal",
            "lastName": "User"
          }
        ]
      }
    };
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Employees</PageHeader>
        </Row>
        <Row>
          <EmployeeTable employees={this.state.pageConfig.data}/>
        </Row>
      </Grid>
    );
  }
}

export default Employees;