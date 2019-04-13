import React from 'react';
import { shallow } from 'enzyme';

import ProjectTable from './ProjectTable';
import ProjectRow from './ProjectRow';

describe('<ProjectTable />', () => {
  // TODO Add tests
  let table;

  beforeEach(() => {
    const projects = [{}, {}];
    table = shallow(<ProjectTable projects={projects} />)
  })

  it('should instantiate the Project Table Component', () => {
    expect(table).toHaveLength(1)
  })

  it('should render a row for each project', () => {
    expect(table.find(ProjectRow)).toHaveLength(2);
  })
});
