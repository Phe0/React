import React, { Component } from 'react';
import '../stylesheet/Tecnologia.css';


class Tecnologia extends Component {
  render() {
    return (
      <div className="Tecnologia">
        <img className="logo" src={require(`../img/logos/${this.props.name}-white.png`)} />
        <h3 className="TechName">
          {this.props.name}
        </h3>
      </div>
    );
  }
}

export default Tecnologia;