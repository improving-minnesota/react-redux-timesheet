import React from 'react';
import ProjectTable from './ProjectTable';
import ReactTestUtils from 'react-dom/test-utils';


describe('Project Table Component: ', function () {

  let projectTable;

  beforeEach(() =>{
    const projects = [{}, {}];
    projectTable = ReactTestUtils.renderIntoDocument(<ProjectTable projects={projects} />);
  });

  it('should instantiate the Project Component', function () {
    expect(ReactTestUtils.isCompositeComponent(projectTable)).toBe(true);
  });

});
