import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProjectForm from './ProjectForm';
import { PageHeader, Grid, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProjectActions from '../../actions/ProjectActionCreator';
import { withRouter } from 'react-router';

class ProjectsCreate extends Component {
  constructor(props) {
    super(props);
    props.actions.listProjects();

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(project) {
    this.props.actions.createProject(project).then(() => {
      this.props.history.push('/projects');
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Projects Create</PageHeader>
        </Row>
        <Row>
          <ProjectForm
            project={this.props.project}
            actions={this.props.actions}
            handleSave={this.handleSave}
          />
        </Row>
      </Grid>
    );
  }
}

ProjectsCreate.propTypes = {
  project: PropTypes.object.isRequired,
  history: PropTypes.object
};

ProjectsCreate.defaultProps = {
  project: {}
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(ProjectActions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsCreate));
