import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import ProjectRow from './ProjectRow';

class ProjectTable extends React.Component {
  // TODO Implement
  render(){
    const { projects } = this.props;
    
    return (
      <Table bordered striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          projects.map(eachProject => 
            (<ProjectRow project= {eachProject} key= {eachProject._id}/>)
            )
        }
      </tbody>
      </Table>
    )

  }
}

ProjectTable.defaultProps = {
  projects: []
};

ProjectTable.propTypes = {
  projects: PropTypes.array
};

export default ProjectTable;
