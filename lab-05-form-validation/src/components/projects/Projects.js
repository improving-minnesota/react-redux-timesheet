import React, { Component } from 'react';

import ProjectTable from './ProjectTable';
import { PageHeader, Grid, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProjectActions from '../../actions/ProjectActionCreator';

class Projects extends Component {
  constructor(props) {
    super(props);
    props.actions.listProjects();

    this.createProject = this.createProject.bind(this);
  }

  createProject() {}

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Projects</PageHeader>
        </Row>
        <Row>
          <div className="pull-right">
            <LinkContainer to="/projects/create">
              <Button bsStyle="primary">Create Project</Button>
            </LinkContainer>
          </div>
        </Row>
        <Row>
          <ProjectTable
            projects={this.props.projects}
            actions={this.props.actions}
          />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(ProjectActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
