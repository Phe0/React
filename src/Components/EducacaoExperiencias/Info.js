import React from 'react';
import '../../stylesheet/Infos.css';


const Info = (props) => {

  return (
    <div className="Info">
      <div className="setaPeriodo">
          <img className="seta2" src={require('../../img/seta2.svg')} alt="seta" ></img>
          <p className="periodoEducacao">{props.periodo}</p>
      </div>
      <div className="nomeLocal">
          <h4 className="nomeEducacao">{props.nome}</h4>
          <p className="localEducacao">{props.local}</p>
      </div>
    </div>
  );
  
}

export default Info;