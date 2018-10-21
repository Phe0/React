import React from 'react';
import '../../stylesheet/Presentation.css';
import seta from '../../img/arrow-white.svg'


const Presentation = () => {
  return (
    <div className="Presentation">
      <div className="Presentation__content">
        <img className="foto" src={require('../../img/Pedro.jpg')} alt="Foto Pedro" />
        <h2 className="nome" >Pedro Henrique Andrade Féo</h2>
        <p className="resumo" >Estudante de Engenharia de Software<br></br>
        Brasileiro, Solteiro, 19 Anos
        </p>
      </div>
    </div>
  );
}

export default Presentation;