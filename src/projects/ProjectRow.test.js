import React from 'react';
import ProjectRow from './ProjectTable';
import ReactTestUtils from 'react-dom/test-utils';


describe('Project Row Component: ', function () {

  let projectRow;

  beforeEach(() =>{
    const project = {};
    projectRow = ReactTestUtils.renderIntoDocument(<ProjectRow project={project} />);
  });

  it('should instantiate the Project Component', function () {
    expect(ReactTestUtils.isCompositeComponent(projectRow)).toBe(true);
  });

});
