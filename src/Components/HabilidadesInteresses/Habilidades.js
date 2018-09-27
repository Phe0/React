import React, { Component } from 'react';
import Tag from './Tag';
import '../../stylesheet/TagsArea.css';


class Habilidades extends Component {
    
  render() {
    var habilidades = [
        {
            title: 'Metodologias Ágeis'
        },
        {
            title: 'Gamificação'
        },
        {
            title: 'Gestão de Pessoas'
        },
        {
            title: 'Prototipagem'
        },
        {
            title: 'UI/UX'
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
            title: 'Inglês Avançado'
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