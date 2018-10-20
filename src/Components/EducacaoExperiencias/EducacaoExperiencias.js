import React from 'react';
import Experiencias from './Experiencias';
import Educacao from './Educacao';
import '../../stylesheet/EducacaoExperiencias.css';


const EducacaoExperiencias = () => {
    return (
      <div className="EducacaoExperiencias">
        <Educacao/>
        <Experiencias/>
      </div>
    );
  }

export default EducacaoExperiencias;