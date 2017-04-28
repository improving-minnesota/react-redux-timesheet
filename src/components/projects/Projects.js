import React, { Component } from 'react';
import ProjectTable from './ProjectTable';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProjectActions from '../../actions/ProjectActionCreator';

class Projects extends Component {

  constructor(props) {
    super(props);

    const projects = [
      {"id": 1, "name": "Project1", "description": "This is your first project", deleted: true},
      {"id": 2, "name": "Project2", "description": "This is your second project"},
      {"id": 3, "name": "Project3", "description": "This is the third project"}
    ];

    props.actions.fetchProjects();
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Projects</PageHeader>
        </Row>
        <Row>
          <ProjectTable projects={this.props.projects} actions={this.props.actions}/>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ProjectActions, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);