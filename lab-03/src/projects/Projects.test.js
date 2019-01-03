import React from 'react';
import { shallow } from 'enzyme';

import Projects from './Projects';
import ProjectTable from './ProjectTable';

describe('<Projects />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Projects />);
  });

  it('should instantiate the Project Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should pass projects down to table', () => {
    wrapper.setState({
      projects: [{}, {}, {}, {}]
    });
    expect(wrapper.find(ProjectTable).prop('projects')).toHaveLength(4);
  });
});
