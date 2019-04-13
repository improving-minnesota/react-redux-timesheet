import React from 'react';
import { shallow } from 'enzyme';

import Projects from './Projects';
import ProjectTable from './ProjectTable';

describe('<Projects />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Projects />)
  });
  // TODO Add tests
  it('should initiate and render something', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should return a table with two sections', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
  it('should pass props to projects', () => {
    wrapper.setState({
      projects: [{}, {}, {}]
    });
    expect(wrapper.find(ProjectTable).prop('projects')).toHaveLength(3);
  })
});
