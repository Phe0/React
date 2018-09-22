import React, { Component } from 'react';
import '../../stylesheet/Infos.css';


class InfoEducacao extends Component {
  render() {
    return (
      <div className="Info">
        <div className="setaPeriodo">
            <img className="seta2" src={require('../../img/seta2.svg')} alt="seta" ></img>
            <p className="periodoEducacao">{this.props.periodo}</p>
        </div>
        <div className="nomeLocal">
            <h4 className="nomeEducacao">{this.props.nome}</h4>
            <p className="localEducacao">{this.props.local}</p>
        </div>
      </div>
    );
  }
}

export default InfoEducacao;