import React from 'react';
import { Header } from 'semantic-ui-react';
import ProjectTable from './ProjectTable';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        { _id: 3, name: 'Project3', description: 'This is the third project' }
      ]
    };
  }

  render() {
    const { projects } = this.state;

    return (
      <div>
        <Header as="h1">Projects</Header>
        <ProjectTable projects={projects} />
      </div>
    );
  }
}

export default Projects;
