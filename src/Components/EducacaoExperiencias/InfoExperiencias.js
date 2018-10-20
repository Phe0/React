import React from 'react';
import '../../stylesheet/Infos.css';


const InfoExperiencias = (props) => {
    return (
        <div className="Info">
            <div className="setaPeriodo">
                <img className="seta2" src={require('../../img/seta2.svg')} alt="seta" ></img>
                <p className="periodoEducacao">{props.periodo}</p>
            </div>
            <div className="nomeLocal">
                <h4 className="nomeEducacao">{props.cargo}</h4>
                <p className="localEducacao">{props.local}</p>
            </div>
        </div>
    );
}

export default InfoExperiencias;