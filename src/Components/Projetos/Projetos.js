import React, { Component } from 'react';
import Projeto from './Projeto';
import '../../stylesheet/Projetos.css';


class Projetos extends Component {
    render() {
        var projetos = [
            {
                name: 'Nuntium',
                cargo: 'Desenvolvedor',
                resumo: 'Site para compartilhamento de textos, desenvolvido para a matéria de Orientação à Objetos da Universidade de Brasília',
                status: 'Terminado',
                link: 'Phe0/Nuntium'
            },
            {
                name: 'Kalkuli',
                cargo: 'Desenvolvedor',
                resumo: 'Site para gestão financeira a partir de imagens de DANFEs, desenvolvida para a matéria Métodos de Desenvolvimento de Software da Univeridade de Brasília',
                status: 'Em desenvolvimento',
                link: 'fga-eps-mds/2018.2-Kalkuli'
            },
            {
                name: 'Currículo Online',
                cargo: 'Desenvolvedor',
                resumo: 'Site destinado para o compartilhamento do meu currículo pessoal(este mesmo)',
                status: 'Terminado',
                link: 'Phe0/React'
            }
          ];
    
          return(
              <div className="ProjetosArea">
                <h1 className="AreaName">Projetos</h1>
                <div className="Projetos">
                    {projetos.map((i) => {
                        return(
                            <Projeto name={i.name} cargo ={i.cargo} resumo={i.resumo} status={i.status} link={i.link}/> 
                        );   
                    })}
                </div>
              </div>
          );
        }
}

export default Projetos;