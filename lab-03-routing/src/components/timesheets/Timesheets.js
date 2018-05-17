import React, { Component } from 'react';
import TimesheetTable from './TimesheetTable';
import {PageHeader, Grid, Row} from 'react-bootstrap';

class Timesheets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageConfig: {
        data: [
          {
            "name": "UserOne",
            "beginDate": "2013-11-18T00:00:00.000Z",
            "endDate": "2013-11-24T00:00:00.000Z",
            "description": "Timesheet one for user",
            "timeunits": [
              {"dateWorked": "2013-11-18T00:00:00.000Z", "hoursWorked": 8, "project": "Project1"},
              {"dateWorked": "2013-11-19T00:00:00.000Z", "hoursWorked": 8, "project": "Project1"},
              {"dateWorked": "2013-11-20T00:00:00.000Z", "hoursWorked": 8, "project": "Project1"},
              {"dateWorked": "2013-11-21T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-11-22T00:00:00.000Z", "hoursWorked": 8, "project": "Project1"}
            ]
          },
          {
            "name": "UserTwo",
            "beginDate": "2013-11-25T00:00:00.000Z",
            "endDate": "2013-12-01T00:00:00.000Z",
            "description": "Timesheet two for user",
            "timeunits": [
              {"dateWorked": "2013-11-25T00:00:00.000Z", "hoursWorked": 8, "project": "Project1"},
              {"dateWorked": "2013-11-26T00:00:00.000Z", "hoursWorked": 8, "project": "Project1"},
              {"dateWorked": "2013-11-27T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-11-28T00:00:00.000Z", "hoursWorked": 8, "project": "Project1"},
              {"dateWorked": "2013-11-29T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"}
            ]
          },
          {
            "name": "UserThree",
            "beginDate": "2013-12-02T00:00:00.000Z",
            "endDate": "2013-12-08T00:00:00.000Z",
            "description": "Timesheet three for user",
            "timeunits": [
              {"dateWorked": "2013-12-02T00:00:00.000Z", "hoursWorked": 8, "project": "Project1"},
              {"dateWorked": "2013-12-03T00:00:00.000Z", "hoursWorked": 8, "project": "Project1"},
              {"dateWorked": "2013-12-04T00:00:00.000Z", "hoursWorked": 8, "project": "Project1"},
              {"dateWorked": "2013-12-05T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-06T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"}
            ]
          },
          {
            "name": "UserFour",
            "beginDate": "2013-12-09T00:00:00.000Z",
            "endDate": "2013-12-15T00:00:00.000Z",
            "description": "Timesheet four for user",
            "timeunits": [
              {"dateWorked": "2013-12-09T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-10T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-11T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-12T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-13T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"}
            ]
          },
          {
            "name": "UserFive",
            "beginDate": "2013-12-16T00:00:00.000Z",
            "endDate": "2013-12-22T00:00:00.000Z",
            "description": "Timesheet five for user",
            "timeunits": [
              {"dateWorked": "2013-12-16T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-17T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-18T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-19T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-20T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"}
            ]
          },
          {
            "name": "UserSix",
            "beginDate": "2013-12-23T00:00:00.000Z",
            "endDate": "2013-12-29T00:00:00.000Z",
            "description": "Timesheet six for user",
            "timeunits": [
              {"dateWorked": "2013-12-23T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-24T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-25T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-26T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"},
              {"dateWorked": "2013-12-27T00:00:00.000Z", "hoursWorked": 8, "project": "Project2"}
            ]
          },
          {
            "name": "UserSeven",
            "beginDate": "2013-12-30T00:00:00.000Z",
            "endDate": "2013-01-05T00:00:00.000Z",
            "description": "Timesheet seven for user",
            "timeunits": [
              {"dateWorked": "2013-12-30T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-12-31T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-01T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-02T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-03T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"}
            ]
          },
          {
            "name": "UserEight",
            "beginDate": "2013-01-06T00:00:00.000Z",
            "endDate": "2013-01-12T00:00:00.000Z",
            "description": "Timesheet eight for user",
            "timeunits": [
              {"dateWorked": "2013-01-06T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-07T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-08T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-09T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-10T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"}
            ]
          },
          {
            "name": "UserNine",
            "beginDate": "2013-01-13T00:00:00.000Z",
            "endDate": "2013-01-19T00:00:00.000Z",
            "description": "Timesheet nine for user",
            "timeunits": [
              {"dateWorked": "2013-01-13T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-14T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-15T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-16T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-17T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"}
            ]
          },
          {
            "name": "UserTen",
            "beginDate": "2013-01-20T00:00:00.000Z",
            "endDate": "2013-01-26T00:00:00.000Z",
            "description": "Timesheet ten for user",
            "timeunits": [
              {"dateWorked": "2013-01-20T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-21T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-22T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-23T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-24T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"}
            ]
          },
          {
            "name": "UserEleven",
            "beginDate": "2013-01-27T00:00:00.000Z",
            "endDate": "2013-02-02T00:00:00.000Z",
            "description": "Timesheet eleven for user",
            "timeunits": [
              {"dateWorked": "2013-01-27T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-28T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-29T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-30T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"},
              {"dateWorked": "2013-01-31T00:00:00.000Z", "hoursWorked": 8, "project": "Project3"}
            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Timesheets</PageHeader>
        </Row>
        <Row>
          <TimesheetTable timesheets={this.state.pageConfig.data}/>
        </Row>
      </Grid>
    );
  }
}

export default Timesheets;