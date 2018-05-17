import React from 'react';
import { shallow } from 'enzyme';

import Projects from './Projects';

describe('Projects Component: ', function () {

  let projects;

  beforeEach(() =>{
    projects = shallow(<Projects/>);
  });

  it('should instantiate the Project Component', function () {
    expect(projects).toHaveLength(1);
  });

});
