import React, { Component } from 'react';
import Habilidades from './Habilidades';
import Interesses from './Interesses';
import '../../stylesheet/HabilidadesInteresses.css';


class HabilidadesInteresses extends Component {
  render() {
    return (
      <div className="HabilidadesInteresses" id="habilidades-interesses">
        <Habilidades/>
        <Interesses/>
      </div>
    );
  }
}

export default HabilidadesInteresses;