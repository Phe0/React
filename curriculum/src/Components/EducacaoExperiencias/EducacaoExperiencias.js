import React, { Component } from 'react';
import Experiencias from './Experiencias';
import Educacao from './Educacao';
import '../../stylesheet/EducacaoExperiencias.css';


class EducacaoExperiencias extends Component {
  render() {
    return (
      <div className="EducacaoExperiencias">
        <Educacao/>
        <Experiencias/>
      </div>
    );
  }
}

export default EducacaoExperiencias;