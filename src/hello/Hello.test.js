import React from 'react';
import Hello from './Hello';
import ReactTestUtils from 'react-dom/test-utils';


describe('Hello World:', function () {

  let hello;

  beforeEach(() =>{
    hello = ReactTestUtils.renderIntoDocument(<Hello/>);
  });

  it('should instantiate the Hello World', function () {
    expect(ReactTestUtils.isCompositeComponent(hello)).toBe(true);
  });

});


