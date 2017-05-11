import React from 'react';
import ProjectTable from './ProjectTable';
import ReactTestUtils from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router-dom';

describe('Project Table Component: ', function () {

  let projectTable;

  beforeEach(() =>{
    const projects = [{}, {}];
    projectTable = ReactTestUtils.renderIntoDocument(<MemoryRouter><ProjectTable projects={projects} /></MemoryRouter>);
  });

  it('should instantiate the Project Component', function () {
    expect(ReactTestUtils.isCompositeComponent(projectTable)).toBe(true);
  });

});
