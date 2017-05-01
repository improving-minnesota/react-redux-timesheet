import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import configureStore from './store/configure-store';

it('renders with our expected text', () => {

    const mockStore = configureStore();

    const component = renderer.create(
            <App store={mockStore}/>
    );


    let stringVal = JSON.stringify(component);
    expect(stringVal).toMatch(/Employees/);
    

    
});

