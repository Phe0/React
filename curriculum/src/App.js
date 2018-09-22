import React, { Component } from 'react';
import './stylesheet/App.css';
import Presentation from './Components/Presentation/Presentation';
import HabilidadesInteresses from './Components/HabilidadesInteresses/HabilidadesInteresses';
import Tecnologias from './Components/Tecnologias/Tecnologias';
import EducacaoExperiencias from './Components/EducacaoExperiencias/EducacaoExperiencias';
import Projetos from './Components/Projetos/Projetos';


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
