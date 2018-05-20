import React from 'react';
import { mount } from 'enzyme';

import Projects from './Projects';
import configureStore from '../../store/configure-store';
import { BrowserRouter } from 'react-router-dom';

describe('Projects Component: ', () => {
  let projects;
  const mockStore = configureStore();

  beforeEach(() => {
    projects = mount(
      <BrowserRouter>
        <Projects store={mockStore} />
      </BrowserRouter>
    );
  });

  it('should instantiate the Project Component', () => {
    expect(projects).toHaveLength(1);
  });
});
