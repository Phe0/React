import React from 'react';
import Info from './Info';
import '../../stylesheet/Educacao.css';

const InfoDisplay = (props) => {

    return(
        <div className="InfoArea">
            <h1 className="AreaName" id="NamesExperiencias" >{props.nome}</h1>
            <div className="Experiencias">
                {props.infos.map((i) => {
                    return(
                        <Info nome={i.nome} local={i.local} periodo={i.periodo} /> 
                    );   
                })}
            </div>
        </div>
    );
}


export default InfoDisplay;