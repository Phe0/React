import React from 'react';
import '../../stylesheet/Projeto.css';

const Projeto = (props) => {

  return (
    <div className="Projeto">
      <div className="text">
        <div className="setaNome">
            <img className="seta2" src={require('../../img/seta2.svg')} alt="seta" ></img>
            <h4 className="nomeProjeto">{props.name} </h4>
            <p className="cargoProjeto"> -{props.cargo}</p>
        </div>
        <div className="resumoStatusLink">
            <p className="resumoProjeto">{props.resumo}</p>
            <p className="statusProjeto"><b>Status:</b>{props.status}</p>
        </div>
      </div>
      <div className="gitArea">
        <a href={`https://github.com/${props.link}`} >
          <img className="repositorio" src={require('../../img/logos/github-logo.png')} alt="github-logo" ></img>
        </a>
      </div>
    </div>
  )
}

export default Projeto;