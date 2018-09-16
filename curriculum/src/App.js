import React, { Component } from 'react';
import './stylesheet/App.css';
import Presentation from './Components/Presentation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Presentation/>
      </div>
    );
  }
}

export default App;
