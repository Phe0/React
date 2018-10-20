import React, { Component } from 'react';
import Tag from './Tag';
import '../../stylesheet/TagsArea.css';

const ButtonLike = (props) => {
    
    return(
        <div className="TagsArea" id={props.id}>
            <h1 className="AreaName">{props.id}</h1>
            <div className="Tags">
                {props.info.map((i) => {
                    return(
                        <Tag title={i.title}/> 
                    );   
                })}
            </div>
        </div>
    );
}

export default ButtonLike