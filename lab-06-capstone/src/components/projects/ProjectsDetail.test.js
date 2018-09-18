import React from 'react';
import ProjectsDetail from './ProjectsDetail';
import { mount } from 'enzyme';
import configureStore from '../../store/configure-store';
import { BrowserRouter } from 'react-router-dom';

import * as ProjectActions from '../../actions/ProjectActionCreator';

describe('Projects Detail Component: ', function() {
  let projects;
  const mockStore = configureStore();
  const mockMatch = { params: { _id: 1 } };

  beforeEach(() => {
    //Mock out the server call in the constructor
    ProjectActions.getProject = id => {
      return function(dispatch) {};
    };

    projects = mount(
      <BrowserRouter>
        <ProjectsDetail store={mockStore} match={mockMatch} />
      </BrowserRouter>
    );
  });

  it('should instantiate the Projects Detail Component', function() {
    expect(projects).toHaveLength(1);
  });
});
