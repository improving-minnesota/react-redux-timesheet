import React from 'react';
import Navigation from './Navigation';

import {BrowserRouter} from 'react-router-dom';

describe('Navigation Component: ', function () {

  let nav;

  beforeEach(() =>{
    nav = ReactTestUtils.renderIntoDocument(<BrowserRouter><Navigation /></BrowserRouter>);
  });

  it('should instantiate the Navigation Component', function () {
    expect(ReactTestUtils.isCompositeComponent(nav)).toBe(true);
  });

});
