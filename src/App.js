import React, { Component } from 'react';
import './App.css';
import Hello from './hello/Hello';
import Navigation from './nav/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>

        <Hello friend="WoooHooo!" />

      </div>
    );
  }
}

export default App;
