import React from 'react'


const LinhaContato = (props) => {
    return(
        <div className="linha">
            <img className="contato-icon" src={props.image} alt="whatsapp-icon"/>
            <h4 className="contato-text" >{props.text}</h4>
        </div>
    )
}

export default LinhaContato