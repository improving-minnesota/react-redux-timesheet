import React from 'react';
import Employees from './Employees';
import { shallow, mount } from 'enzyme';
import configureStore from '../../store/configure-store';

const mockStore = configureStore();

describe('Employees Component: ', function () {

  it('should instantiate the Employee Component', function () {
      const component = shallow(
              <Employees store={mockStore}/>
      );

      expect(component).toHaveLength(1);

  });

});
