import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component', () => {
  it('renders without exploding', () => {
    expect(shallow(<App />)).toHaveLength(1);
  });

  it('renders with our expected text', () => {
    const result = shallow(<App />);

    expect(result.find('Route').at(1)).toHaveProp('path', '/projects/detail/:_id');
  });
});
