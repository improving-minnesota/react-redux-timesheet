import React, { Component } from 'react';

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

  // TODO - actually implement this for realz
  render() {return (<div />);}
}

export default Employees;