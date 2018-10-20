import React from 'react';
import Tecnologia from './Tecnologia';
import '../../stylesheet/Tecnologias.css';
import tecnologias from '../../json/Tecnologias.json'

const Tecnologias = () => {
    
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

export default Tecnologias;