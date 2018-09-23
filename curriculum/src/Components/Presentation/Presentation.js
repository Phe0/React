import React, { Component } from 'react';
import '../../stylesheet/Presentation.css';


class Presentation extends Component {
  render() {
    return (
      <div className="Presentation">
        <img className="foto" src={require('../../img/Pedro.jpg')} alt="Foto Pedro" />
        <h2 className="nome" >Pedro Henrique Andrade Féo</h2>
        <p className="resumo" >Estudante de Engenharia de Software<br></br>
        Brasileiro, Solteiro, 19 Anos
        </p>
      </div>
    );
  }
}

export default Presentation;