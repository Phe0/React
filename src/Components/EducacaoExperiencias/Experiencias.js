import React, { Component } from 'react';
import InfoExperiencias from './InfoExperiencias';
import '../../stylesheet/Educacao.css';


class Experiencias extends Component {
    
  render() {
    var infos = [
        {
            cargo: 'Diretor de Operações' ,
            local: "Orc'estra Gamificação",
            periodo: '2018'
        },
        {
            cargo: 'Desenvolvedor' ,
            local: 'Universidade de Brasília',
            periodo: '2014-Atualmente'
        },
        {
            cargo: 'Assessor de Gestão de Pessoas' ,
            local: "Orc'estra Gamificação",
            periodo: '2017'
        }
      ];

      return(
          <div className="InfoArea">
            <h1 className="AreaName" id="NamesExperiencias" >Experiências</h1>
            <div className="Experiencias">
                {infos.map((i) => {
                    return(
                        <InfoExperiencias cargo={i.cargo} local={i.local} periodo={i.periodo} /> 
                    );   
                })}
            </div>
          </div>
      );
    }
}


export default Experiencias;