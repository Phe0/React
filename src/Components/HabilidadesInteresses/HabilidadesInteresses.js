import React from 'react';
import Habilidades from './Habilidades';
import Interesses from './Interesses';
import '../../stylesheet/HabilidadesInteresses.css';


const HabilidadesInteresses = () => {
  return (
    <div className="HabilidadesInteresses" id="habilidades-interesses">
      <Habilidades/>
      <Interesses/>
    </div>
  );
}

export default HabilidadesInteresses;