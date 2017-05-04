import React from 'react';
import ProjectsCreate from './ProjectsCreate';
import ReactTestUtils from 'react-dom/test-utils';
import configureStore from '../../store/configure-store';
import {BrowserRouter} from 'react-router-dom';

describe('Projects Create Component: ', function () {

  let projects;
  const mockStore = configureStore();

  beforeEach(() =>{
    projects = ReactTestUtils.renderIntoDocument(<BrowserRouter><ProjectsCreate store={mockStore}/></BrowserRouter>);
  });

  it('should instantiate the Projects Create Component', function () {
    expect(ReactTestUtils.isCompositeComponent(projects)).toBe(true);
  });

});
