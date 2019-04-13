import React from 'react';
import { shallow } from 'enzyme';

import ProjectRow from './ProjectRow';

describe('<ProjectRow />', () => {
  // TODO Add tests
  let wrapper;

  beforeEach(() => {
    const project = {
      name: 'Name',
      description: 'Description'
    };
    wrapper = shallow(<ProjectRow project={project} />)
  })

  it('should instantiate the Project Row Component', () => {
    expect(wrapper).toHaveLength(1);
  })

  it('should have 2 cells, render values into expected cells', () => {
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('Name');
    expect(wrapper.find('td').at(1).text()).toEqual('Description');
  })
});
