import React, { Component } from 'react';
import ProjectForm from './ProjectForm';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProjectActions from '../../actions/ProjectActionCreator';

class ProjectsDetail extends Component {

  constructor(props) {
    super(props);

    const id = props.match.params._id;
    props.actions.getProject(id);

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(project){
    this.props.actions.updateProject(project).then(() => {
      this.context.router.history.push('/projects');
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Projects Detail</PageHeader>
        </Row>
        <Row>
          <ProjectForm project={this.props.project} actions={this.props.actions} handleSave={this.handleSave}/>
        </Row>
      </Grid>
    );
  }
}

ProjectsDetail.contextTypes = {
  router: React.PropTypes.object
};


function mapStateToProps(state) {
  return {
    project: state.projects.project
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
)(ProjectsDetail);