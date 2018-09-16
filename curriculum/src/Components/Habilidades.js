import React, { Component } from 'react';
import Tag from './Tag';
import '../stylesheet/TagsArea.css';


class Habilidades extends Component {
    
  render() {
    var habilidades = [
        {
              title: 'SCRUM'
        },
        {
            title: 'Gamificação'
        },
        {
            title: 'Gestão de Pessoas'
        },
        {
            title: 'Financeiro'
        },
        {
            title: 'Prototipagem'
        },
        {
            title: 'Adobe XD'
        },
        {
            title: 'Photoshop'
        },
        {
            title: 'Pacote Office'
        },
        {
            title: 'Desenhar'
        }
      ];

      return(
          <div className="TagsArea">
            <h1 className="AreaName">Habilidades</h1>
            <div className="Tags">
                {habilidades.map((i) => {
                    return(
                        <Tag title={i.title}/> 
                    );   
                })}
            </div>
          </div>
      );
    }
}

export default Habilidades;