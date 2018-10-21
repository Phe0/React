import React from 'react';
import ButtonLike from './ButtonLike'
import interesses from '../../json/Interesses.json'
import habilidades from '../../json/Habilidades.json'
import '../../stylesheet/HabilidadesInteresses.css';
import softskills from '../../json/SoftSkills.json'

const HabilidadesInteresses = () => {
  return (
    <div className="HabilidadesInteresses" id="habilidades-interesses">
      <ButtonLike id={'Hard Skills'} info={habilidades}/>
      <ButtonLike id={'Soft Skills'} info={softskills}/>
      <ButtonLike id={'Interesses'} info={interesses}/>
    </div>
  );
}

export default HabilidadesInteresses;