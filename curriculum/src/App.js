import React, { Component } from 'react';
import './stylesheet/App.css';
import Presentation from './Components/Presentation';
import HabilidadesInteresses from './Components/HabilidadesInteresses';
import Tecnologias from './Components/Tecnologias';
import EducacaoExperiencias from './Components/EducacaoExperiencias';
import Projetos from './Components/Projetos';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Presentation/>
        <HabilidadesInteresses/>
        <Tecnologias/>
        <EducacaoExperiencias/>
        <Projetos/>
      </div>
    );
  }
}

export default App;
