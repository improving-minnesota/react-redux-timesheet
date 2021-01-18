import React from 'react';
import ProjectTable from './ProjectTable';

class Projects extends React.Component {
  state = {
    projects: [
      {
        _id: '1a',
        name: 'Project1',
        description: 'Makin bacon pancakes'
      },
      {
        _id: '2b',
        name: 'Project2',
        description: 'Booping the cat'
      },
      {
        _id: '3e',
        name: 'Project3',
        description: 'Actual work'
      }
    ]
  };
  render() {
    const { projects } = this.state;
    return (
      <div>
        <h1>Projects</h1>
        <ProjectTable projects={projects} />
      </div>
    );
  }
}

export default Projects;
