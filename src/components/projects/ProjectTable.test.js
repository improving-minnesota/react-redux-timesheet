import React from 'react';
import { mount } from 'enzyme';

import ProjectTable from './ProjectTable';
import {MemoryRouter} from 'react-router-dom';

describe('Project Table Component: ', function () {

  let projectTable;

  beforeEach(() =>{
    const projects = [{_id: 1}, {_id: 2}];
    projectTable = mount(<MemoryRouter><ProjectTable projects={projects} /></MemoryRouter>);
  });

  it('should instantiate the Project Table Component', function () {
    expect(projectTable).toHaveLength(1);
  });

});
