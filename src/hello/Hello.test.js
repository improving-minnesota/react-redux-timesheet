import React from 'react';
import Hello from './Hello';
import renderer from 'react-test-renderer';

describe('Hello World:', function () {


    it('should render with default text', function () {

        const component = renderer.create(
                <Hello/>
        );

        let stringVal = JSON.stringify(component);
        expect(stringVal).toMatch(/Howdy/);
        expect(stringVal).toMatch(/Partner/);

    });

    it('should render with our props', function () {

        const component = renderer.create(
                <Hello friend="Fred"/>
        );

        let stringVal = JSON.stringify(component);
        expect(stringVal).toMatch(/Howdy/);
        expect(stringVal).toMatch(/Fred/);

    });
    
    it('should render to match the snapshot', function () {

        const component = renderer.create(
            <Hello friend="Luke"/>
        );

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });    


});



