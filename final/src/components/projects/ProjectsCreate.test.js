import React from 'react';
import ProjectsCreate from './ProjectsCreate';
import { mount } from 'enzyme';
import configureStore from '../../store/configure-store';
import { BrowserRouter } from 'react-router-dom';

import * as ProjectActions from '../../actions/ProjectActionCreator';

describe('Projects Create Component: ', () => {
  let projects;
  const mockStore = configureStore();

  beforeEach(() => {
    //Mock out the server call in the constructor
    ProjectActions.listProjects = () => {
      return dispatch => {};
    };

    projects = mount(
      <BrowserRouter>
        <ProjectsCreate store={mockStore} />
      </BrowserRouter>
    );
  });

  it('should instantiate the Projects Create Component', () => {
    expect(projects).toHaveLength(1);
  });
});
