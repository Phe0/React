import React, { Component } from 'react';
import InfoEducacao from './InfoEducacao';
import '../../stylesheet/EducacaoExperiencias.css';


class Educacao extends Component {
    
  render() {
    var infos = [
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

      return(
          <div className="InfoArea">
            <h1 className="AreaName" id="NamesExperiencias">Educação</h1>
            <div className="Educacao">
                {infos.map((i) => {
                    return(
                        <InfoEducacao nome={i.nome} local={i.local} periodo={i.periodo} /> 
                    );   
                })}
            </div>
          </div>
      );
    }
}

export default Educacao;