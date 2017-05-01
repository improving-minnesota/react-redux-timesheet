import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';


it('renders with our expected text', () => {

    const component = renderer.create(
            <App/>
    );

    let stringVal = JSON.stringify(component);
    expect(stringVal).toMatch(/Employees/);
    

    
});

