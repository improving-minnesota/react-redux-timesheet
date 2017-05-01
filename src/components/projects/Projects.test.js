import React from 'react';
import Projects from './Projects';
import ReactTestUtils from 'react-dom/test-utils';
import configureStore from '../../store/configure-store';

describe('Projects Component: ', function () {

  let projects;
  const mockStore = configureStore();

  beforeEach(() =>{
    projects = ReactTestUtils.renderIntoDocument(<Projects store={mockStore}/>);
  });

  it('should instantiate the Project Component', function () {
    expect(ReactTestUtils.isCompositeComponent(projects)).toBe(true);
  });

});
