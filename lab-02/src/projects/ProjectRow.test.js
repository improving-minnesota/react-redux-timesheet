import React from 'react';
import { shallow } from 'enzyme';

import ProjectRow from './ProjectRow';

describe('<ProjectRow />', () => {
  // TODO Add tests
  let wrapper;
  // shallow render is called before each test, but runs very fast and has benefit later when tests become more complicated
  beforeEach(() => {
    const project = {
      name: 'NAME',
      description: 'DESCRIPTION',
      _id: 'ID',
    };
    wrapper = shallow(<ProjectRow project={project} />);
  })
  //snapshot allows comparison between previos version of components/logic to see if anything actually changed
  it('should render to match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should instantiate Project Row Component', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should render expected values into cells', () => {
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('NAME');
    expect(wrapper.find('td').at(1).text()).toEqual('DESCRIPTION');
  });
});
