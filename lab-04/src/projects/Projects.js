import React from 'react';
import PropTypes from 'prop-types';
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
        <h1>Projects</h1>
        <ProjectTable projects={projects} />
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object)
};

export default Projects;
