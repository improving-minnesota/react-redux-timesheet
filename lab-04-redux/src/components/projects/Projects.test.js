import React from 'react';
import { shallow } from 'enzyme';

import Projects from './Projects';
import configureStore from '../../store/configure-store';

describe('Projects Component: ', () =>  {

  let projects;
  const mockStore = configureStore();

  beforeEach(() =>{
    projects = shallow(<Projects store={mockStore}/>);
  });

  it('should instantiate the Project Component', () =>  {
    expect(projects).toHaveLength(1);
  });

});
