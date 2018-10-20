import React from 'react';
import InfoDisplay from './InfoDisplay'
import '../../stylesheet/EducacaoExperiencias.css';

var educacao = [
  {
      nome: 'Engenharia de Software' ,
      local: 'Universidade de Brasília',
      periodo: '2017-Atualmente'
  },
  {
      nome: 'Ensino Médio' ,
      local: 'Colégio CIMAN',
      periodo: '2014-2016'
  },
  {
      nome: 'Curso de Inglês Avançado',
      local: 'Casa Thomas Jefferson',
      periodo: '2014-2016'
  }
];

var experiencias = [
  {
      nome: 'Diretor de Operações' ,
      local: "Orc'estra Gamificação",
      periodo: '2018'
  },
  {
      nome: 'Desenvolvedor' ,
      local: 'Universidade de Brasília',
      periodo: '2014-Atualmente'
  },
  {
      nome: 'Assessor de Gestão de Pessoas' ,
      local: "Orc'estra Gamificação",
      periodo: '2017'
  }
];


const EducacaoExperiencias = () => {
    return (
      <div className="EducacaoExperiencias">
        <InfoDisplay nome={'Educação'} infos={educacao}/>
        <InfoDisplay nome={'Experiências'} infos={experiencias}/>
      </div>
    );
  }

export default EducacaoExperiencias;