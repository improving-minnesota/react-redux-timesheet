import React from 'react';
import { shallow } from 'enzyme';

import ProjectTable from './ProjectTable';

describe('Project Table Component: ', () =>  {

  let projectTable;

  beforeEach(() =>{
    const projects = [{}, {}];
    projectTable = shallow(<ProjectTable projects={projects} />);
  });

  it('should instantiate the Project Table Component', () =>  {
    expect(projectTable).toHaveLength(1);
  });

});
