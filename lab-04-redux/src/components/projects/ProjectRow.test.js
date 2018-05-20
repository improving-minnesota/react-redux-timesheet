import React from 'react';
import { shallow } from 'enzyme';

import ProjectRow from './ProjectRow';

describe('Project Row Component: ', () => {
  let projectRow;

  beforeEach(() => {
    const project = {};
    projectRow = shallow(<ProjectRow project={project} />);
  });

  it('should instantiate the Project Row Component', () => {
    expect(projectRow).toHaveLength(1);
  });
});
