import React, { Component } from 'react';
import TimesheetForm from './TimesheetForm';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProjectActions from '../../actions/ProjectActionCreator';
import { withRouter } from 'react-router';

class TimesheetsCreate extends Component {

  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(project){
    // this.props.actions.createProject(project).then(() => {
    //   this.props.history.push('/projects');
    // });
  }

  // project={this.props.project} actions={this.props.actions} handleSave={this.handleSave}

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Timesheet Create</PageHeader>
        </Row>
        <Row>
          <TimesheetForm/>
        </Row>
      </Grid>
    );
  }
}

TimesheetsCreate.propTypes = {
  project: React.PropTypes.object.isRequired,
  history: React.PropTypes.object
};

TimesheetsCreate.defaultProps = {
  project: {}
};

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ProjectActions, dispatch)
  };
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TimesheetsCreate));