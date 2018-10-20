import React from 'react';
import InfoDisplay from './InfoDisplay'
import '../../stylesheet/EducacaoExperiencias.css';
import educacao from '../../json/Educacao.json'
import experiencias from '../../json/Experiencias.json'

const EducacaoExperiencias = () => {
    return (
      <div className="EducacaoExperiencias">
        <InfoDisplay nome={'Educação'} infos={educacao}/>
        <InfoDisplay nome={'Experiências'} infos={experiencias}/>
      </div>
    );
  }

export default EducacaoExperiencias;