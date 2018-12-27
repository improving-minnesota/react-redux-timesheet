import React from 'react';
import PropTypes from 'prop-types';
import ProjectTable from './ProjectTable';
import { Link } from 'react-router-dom';
import * as ProjectActionCreators from '../actions/ProjectActionCreator';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Projects extends React.Component {
  componentDidMount() {
    const { listProjects } = this.props;
    listProjects();
  }

  render() {
    const { projects } = this.props;

    return (
      <div>
        <h1>Projects</h1>
        <Link to="/projects/detail">
          <Button bsStyle="primary">
            New Project
          </Button>
        </Link>
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
