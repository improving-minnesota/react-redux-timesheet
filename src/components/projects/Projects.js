import React, { Component } from 'react';

import ProjectTable from './ProjectTable';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProjectActions from '../../actions/ProjectActionCreator';

class Projects extends Component {

  constructor(props) {
    super(props);
    props.actions.listProjects();
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