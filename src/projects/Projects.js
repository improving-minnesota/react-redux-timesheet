import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ProjectTable from './ProjectTable';
import { Link } from 'react-router-dom';
import * as ProjectActionCreators from '../actions/ProjectActionCreator';
import connect from 'react-redux/es/connect/connect';

class Projects extends React.Component {
  componentDidMount() {
    const { listProjects } = this.props;
    listProjects();
  }

  render() {
    const { projects } = this.props;

    return (
      <div>
        <Header as="h1">
          Projects
          <Link to="/projects/detail">
            <Button floated="right" primary>
              New Project
            </Button>
          </Link>
        </Header>
        <ProjectTable projects={projects} />
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
  listProjects: PropTypes.func,
  deleteEmployee: PropTypes.func,
  restoreEmployee: PropTypes.func
};

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
  };
};

const mapDispatchToProps = {
  listProjects: ProjectActionCreators.listProjects,
  deleteEmployee: ProjectActionCreators.removeProject,
  restoreEmployee: ProjectActionCreators.restoreProject
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
