import React, { Component } from 'react';
import Tag from './Tag';
import '../../stylesheet/TagsArea.css';


class Interesses extends Component {
    
  render() {
    var interesses = [
        {
            title: 'Empreendedorismo'
        },
        {
            title: 'Machine Learning'
        },
        {
            title: 'UI/UX Design'
        },
        {
            title: 'Desenvolvimento Web'
        },
        {
            title: 'Front-end'
        }
      ];

      return(
          <div className="TagsArea" id="Interesses">
            <h1 className="AreaName">Interesses</h1>
            <div className="Tags">
                {interesses.map((i) => {
                    return(
                        <Tag title={i.title}/> 
                    );   
                })}
            </div>
          </div>
      );
    }
}

export default Interesses;