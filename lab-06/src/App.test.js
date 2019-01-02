import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('adds "app" CSS class', () => {
    expect(wrapper.find('div').at(0).hasClass('App')).toBe(true);
  });
});
