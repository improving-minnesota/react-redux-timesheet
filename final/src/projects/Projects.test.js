import React from 'react';
import { shallow } from 'enzyme';

import Projects from './Projects';

describe('<Projects />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Projects />);
  });

  it('should instantiate the Project Component', () => {
    expect(wrapper).toHaveLength(1);
  });
});
