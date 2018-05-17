import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component', () => {
  it('renders without exploding', () => {
    expect(shallow(<App />)).toHaveLength(1);
  });
});
