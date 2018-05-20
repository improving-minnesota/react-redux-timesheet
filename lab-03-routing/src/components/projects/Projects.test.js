import React from 'react';
import { shallow } from 'enzyme';

import Projects from './Projects';

describe('Projects Component: ', () => {
  let projects;

  beforeEach(() => {
    projects = shallow(<Projects />);
  });

  it('should instantiate the Project Component', () => {
    expect(projects).toHaveLength(1);
  });
});
