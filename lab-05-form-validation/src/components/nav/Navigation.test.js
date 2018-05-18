import React from 'react';
import { mount } from 'enzyme';

import Navigation from './Navigation';

import {BrowserRouter} from 'react-router-dom';

describe('Navigation Component: ', () =>  {

  let nav;

  beforeEach(() =>{
    nav = mount(<BrowserRouter><Navigation /></BrowserRouter>);
  });

  it('should instantiate the Navigation Component', () =>  {
    expect(nav).toHaveLength(1);
  });

});
