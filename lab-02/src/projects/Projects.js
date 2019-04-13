import React from 'react';
import ProjectTable from './ProjectTable';

class Projects extends React.Component {
  state = {
    projects: [
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
      {
        _id: 3,
        name: 'Project3',
        description: 'This is the third project'
      }
    ]
  };
  render() {
    // TODO Implement
    return (
      <div>
        <h1>Projects</h1>
        <ProjectTable projects={this.state.projects} />
      </div>
    );
  }
}

export default Projects;
