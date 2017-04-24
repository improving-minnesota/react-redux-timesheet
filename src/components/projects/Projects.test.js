import React from 'react';
import Projects from './Projects';
import ReactTestUtils from 'react-dom/test-utils';


describe('Projects Component: ', function () {

  let projects;

  beforeEach(() =>{
    projects = ReactTestUtils.renderIntoDocument(<Projects/>);
  });

  it('should instantiate the Project Component', function () {
    expect(ReactTestUtils.isCompositeComponent(projects)).toBe(true);
  });

});
