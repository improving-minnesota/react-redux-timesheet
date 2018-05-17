import React from 'react';
import { mount } from 'enzyme';

import ProjectRow from './ProjectRow';
import {MemoryRouter} from 'react-router-dom';

describe('Project Row Component: ', function () {

  let projectRow;

  beforeEach(() =>{
    const project = {};
    projectRow = mount(<MemoryRouter><ProjectRow project={project} /></MemoryRouter>);
  });

  it('should instantiate the Project Row Component', function () {
    expect(projectRow).toHaveLength(1);
  });

});
