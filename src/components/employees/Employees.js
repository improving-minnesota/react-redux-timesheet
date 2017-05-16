import React, { Component } from 'react';

class Employees extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageConfig: {
        data: [
          {
            "_id": 1,
            "username": "admin",
            "email": "admin@mixtape.com",
            "password": "password",
            "admin": true,
            "firstName": "Admin",
            "lastName": "User"
          },
          {
            "_id": 2,
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