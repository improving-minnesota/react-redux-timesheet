import React, { Component } from 'react';
import ProjectTable from './ProjectTable';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProjectActions from '../../actions/ProjectActionCreator';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageConfig: {
        data: [
          {"name": "Project1", "description": "This is your first project"},
          {"name": "Project2", "description": "This is your second project"},
          {"name": "Project3", "description": "This is the third project"}
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
          <ProjectTable projects={this.state.pageConfig.data}/>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
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