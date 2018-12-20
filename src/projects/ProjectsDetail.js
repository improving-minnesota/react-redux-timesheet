import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Header } from 'semantic-ui-react';
import ProjectForm from './ProjectForm';
import * as ProjectActions from '../actions/ProjectActionCreator';

class ProjectsDetail extends React.Component {
  componentDidMount(props) {
    const id = props.match.params._id;
    props.actions.getProject(id);
  }

  handleSave = (values) => {
    const { onCreate, onUpdate, history } = this.props;

    const result = values._id ? onUpdate(values) : onCreate(values);
    result.then(() => {
      history.push('/projects');
    });
  };

  render() {
    return (
      <div>
        <Header as="h1">Projects Detail</Header>
        <ProjectForm
          project={this.props.project}
          actions={this.props.actions}
          handleSave={this.handleSave}
        />
      </div>
    );
  }
}

ProjectsDetail.propTypes = {
  project: PropTypes.object.isRequired,
  history: PropTypes.object,
  onCreate: PropTypes.func,
  onUpdate: PropTypes.func,
  getProject: PropTypes.func
};

ProjectsDetail.defaultProps = {
  project: {}
};

const mapStateToProps = (state) => {
  return {
    project: state.projects.project
  };
};

const mapDispatchToProps = {
  onCreate: ProjectActions.updateProject,
  onUpdate: ProjectActions.createProject,
  getProject: ProjectActions.getProject
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsDetail));
