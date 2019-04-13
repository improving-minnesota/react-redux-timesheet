import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';
import {NavLink} from 'react-router-dom';

describe('<Navigation />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navigation />);
    });
    it('should instantiage the Navigation Component with three nav links', () => {
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(NavLink)).toHaveLength(3);
    });

});