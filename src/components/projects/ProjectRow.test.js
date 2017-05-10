import React from 'react';
import ProjectRow from './ProjectRow';
import ReactTestUtils from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router-dom';

describe('Project Row Component: ', function () {

  let projectRow;

  beforeEach(() =>{
    const project = {};
    projectRow = ReactTestUtils.renderIntoDocument(<MemoryRouter><ProjectRow project={project} /></MemoryRouter>);
  });

  it('should instantiate the Project Row Component', function () {
    expect(ReactTestUtils.isCompositeComponent(projectRow)).toBe(true);
  });

});
