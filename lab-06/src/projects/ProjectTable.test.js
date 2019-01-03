import React from 'react';
import { shallow } from 'enzyme';

import ProjectTable from './ProjectTable';
import ProjectRow from './ProjectRow';

describe('<ProjectTable />', () => {
  let wrapper;

  beforeEach(() => {
    const projects = [{}, {}];
    wrapper = shallow(<ProjectTable projects={projects} />);
  });

  it('should instantiate the Project Table Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render a row for each project', () => {
    expect(wrapper.find(ProjectRow)).toHaveLength(2);
  });
});
