import React from 'react';
import ButtonLike from './ButtonLike'
import interesses from '../../json/Interesses.json'
import habilidades from '../../json/Habilidades.json'
import '../../stylesheet/HabilidadesInteresses.css';

const HabilidadesInteresses = () => {
  return (
    <div className="HabilidadesInteresses" id="habilidades-interesses">
      <ButtonLike id={'Habilidades'} info={habilidades}/>
      <ButtonLike id={'Interesses'} info={interesses}/>
    </div>
  );
}

export default HabilidadesInteresses;