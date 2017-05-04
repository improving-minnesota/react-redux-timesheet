import React from 'react';
import Projects from './Projects';
import ReactTestUtils from 'react-dom/test-utils';
import configureStore from '../../store/configure-store';
import {BrowserRouter} from 'react-router-dom';

describe('Projects Component: ', function () {

  let projects;
  const mockStore = configureStore();

  beforeEach(() =>{
    projects = ReactTestUtils.renderIntoDocument(<BrowserRouter><Projects store={mockStore}/></BrowserRouter>);
  });

  it('should instantiate the Project Component', function () {
    expect(ReactTestUtils.isCompositeComponent(projects)).toBe(true);
  });

});
