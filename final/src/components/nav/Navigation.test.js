import React from 'react';
import { mount } from 'enzyme';

import Navigation from './Navigation';

import {BrowserRouter} from 'react-router-dom';

describe('Navigation Component: ', function () {

  let nav;

  beforeEach(() =>{
    nav = mount(<BrowserRouter><Navigation /></BrowserRouter>);
  });

  it('should instantiate the Navigation Component', function () {
    expect(nav).toHaveLength(1);
  });

});
