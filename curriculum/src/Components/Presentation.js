import React, { Component } from 'react';

class Presentation extends Component {
  render() {
    return (
      <div className="Presentation">
      <img className="foto" src={require('../img/Pedro.jpg')} />
        <h2 className="nome" >Pedro Henrique Andrade Féo</h2>
        <p className="resumo" >Estudante de Engenharia de Software</p>
        <p className="resumo" >Brasileiro, Solteiro, 19 Anos</p>
      </div>
    );
  }
}

export default Presentation;