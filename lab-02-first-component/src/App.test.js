import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import Hello from './hello/Hello';

describe('App Component', () => {
  it('renders without exploding', () => {
    expect(shallow(<App />)).toHaveLength(1);
  });

  it('passes our expected prop to Hello component', () => {
    const component = shallow(<App />);
    expect(component.find(Hello)).toHaveProp('friend', 'WoooHooo!');
  });

  describe('Int Test both App and Hello component rendering', () => {
    it('renders with our expected text', () => {
      expect(mount(<App />)).toIncludeText('Congratulations!');
    });
  });
});
