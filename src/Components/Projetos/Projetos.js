import React from 'react';
import Projeto from './Projeto';
import '../../stylesheet/Projetos.css';
import projetos from '../../json/Projetos.json'

const Projetos = () => {
    
    return(
        <div className="ProjetosArea">
            <h2 className="AreaName">Projetos</h2>
            <div className="Projetos">
                {projetos.map((i) => {
                    return(
                        <Projeto name={i.name} cargo ={i.cargo} resumo={i.resumo} status={i.status} link={i.link}/> 
                    );   
                })}
            </div>
        </div>
    );
}

export default Projetos;