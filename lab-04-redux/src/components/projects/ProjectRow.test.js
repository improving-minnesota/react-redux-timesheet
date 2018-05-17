import React from 'react';
import { shallow } from 'enzyme';

import ProjectRow from './ProjectRow';

describe('Project Row Component: ', function () {

  let projectRow;

  beforeEach(() =>{
    const project = {};
    projectRow = shallow(<ProjectRow project={project} />);
  });

  it('should instantiate the Project Row Component', function () {
    expect(projectRow).toHaveLength(1);
  });

});
