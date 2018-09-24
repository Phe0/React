import React, { Component } from 'react';
import '../../stylesheet/Projeto.css';

class Projeto extends Component {

  render() {
    return (
      <div className="Projeto">
        <div className="text">
          <div className="setaNome">
              <img className="seta2" src={require('../../img/seta2.svg')} alt="seta" ></img>
              <h4 className="nomeProjeto">{this.props.name} </h4>
              <p className="cargoProjeto"> -{this.props.cargo}</p>
          </div>
          <div className="resumoStatusLink">
              <p className="resumoProjeto">{this.props.resumo}</p>
              <p className="statusProjeto"><b>Status:</b>{this.props.status}</p>
          </div>
        </div>
        <div className="gitArea">
          <a href={`https://github.com/${this.props.link}`} >
            <img className="repositorio" src={require('../../img/logos/github-logo.png')} alt="github-logo" ></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Projeto;