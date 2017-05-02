import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactShallowRenderer from 'react-test-renderer/shallow';

it('renders with our expected text', () => {

    //Shallow renderer to avoid integration testing all subcomponents
    const renderer = new ReactShallowRenderer();
    renderer.render(
            <App/>
    );

    const result = renderer.getRenderOutput();

    let stringVal = JSON.stringify(result);
    expect(stringVal).toMatch(/employees\/:user_id\/timesheets/);

});

