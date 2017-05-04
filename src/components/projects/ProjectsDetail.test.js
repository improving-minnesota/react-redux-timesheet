import React from 'react';
import ProjectsDetail from './ProjectsDetail';
import ReactTestUtils from 'react-dom/test-utils';
import configureStore from '../../store/configure-store';
import {BrowserRouter} from 'react-router-dom';

describe('Projects Detail Component: ', function () {

  let projects;
  const mockStore = configureStore();
  const mockMatch = {params: {_id: 1}};

  beforeEach(() =>{
    projects = ReactTestUtils.renderIntoDocument(<BrowserRouter><ProjectsDetail store={mockStore} match={mockMatch}/></BrowserRouter>);
  });

  it('should instantiate the Projects Detail Component', function () {
    expect(ReactTestUtils.isCompositeComponent(projects)).toBe(true);
  });

});
