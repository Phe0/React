import React, { Component } from 'react';
import './stylesheet/App.css';
import Presentation from './Components/Presentation';
import HabilidadesInteresses from './Components/HabilidadesInteresses';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Presentation/>
        <HabilidadesInteresses/>
      </div>
    );
  }
}

export default App;
