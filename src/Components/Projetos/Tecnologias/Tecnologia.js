import React from 'react';
import '../../stylesheet/Tecnologia.css';


const Tecnologia = () => {
  return (
    <div className="Tecnologia">
      <img className="logo" src={require(`../../img/logos/${this.props.name}-white.png`)} alt="imagens-tecnologia"/>
      <h3 className="TechName">
        {props.name}
      </h3>
    </div>
  );
}

export default Tecnologia;