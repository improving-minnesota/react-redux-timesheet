import React, { Component } from 'react';

import ProjectTable from './ProjectTable';
import { PageHeader, Grid, Row } from 'react-bootstrap';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageConfig: {
        data: [
          {
            _id: 1,
            name: 'Project1',
            description: 'This is your first project'
          },
          {
            _id: 2,
            name: 'Project2',
            description: 'This is your second project'
          },
          { _id: 3, name: 'Project3', description: 'This is the third project' }
        ]
      }
    };
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Projects</PageHeader>
        </Row>
        <Row>
          <ProjectTable projects={this.state.pageConfig.data} />
        </Row>
      </Grid>
    );
  }
}

export default Projects;
