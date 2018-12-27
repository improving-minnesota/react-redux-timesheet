import React from 'react';
import { shallow } from 'enzyme';

import TimesheetRow from './TimesheetRow';

describe('<TimesheetRow />', () => {
  let wrapper;

  beforeEach(() => {
    const timesheet = {
      beginDate: 'A',
      endDate: 'B',
      name: 'C',
      description: 'D'
    };
    wrapper = shallow(<TimesheetRow timesheet={timesheet} />);
  });

  it('should instantiate the Timesheet Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render values into expected cells', () => {
    expect(wrapper.find('td')).toHaveLength(4);
    expect(wrapper.find('td').at(0).text()).toEqual('A');
    expect(wrapper.find('td').at(1).text()).toEqual('B');
    expect(wrapper.find('td').at(2).text()).toEqual('C');
    expect(wrapper.find('td').at(3).text()).toEqual('D');
  });
});
