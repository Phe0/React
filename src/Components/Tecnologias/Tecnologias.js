import React, { Component } from 'react';
import Tecnologia from './Tecnologia';
import '../../stylesheet/Tecnologias.css';


class Tecnologias extends Component {
    render() {
        var tecnologias = [
            {
                name: 'C'
            },
            {
                name: 'C++'
            },
            {
                name: 'Ruby on Rails'
            },

            {
                name: 'Git'
            },
            {
                name: 'HTML'
            },
            {
                name: 'CSS'
            },
            {
                name: 'Bootstrap'
            },
            {
                name: 'Materialize'
            },
            {
                name: 'Javascript'
            },
            {
                name: 'React'
            }
          ];
    
          return(
              <div className="TechArea">
                <h1 className="AreaName">Tecnologias</h1>
                <div className="Tecnologias">
                    {tecnologias.map((i) => {
                        return(
                            <Tecnologia name={i.name}/> 
                        );   
                    })}
                </div>
              </div>
          );
        }
}

export default Tecnologias;