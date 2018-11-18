import React from 'react'
import '../../stylesheet/Contato.css'
import whatsapp from '../../img/logos/whatsapp-white.png'
import telegram from '../../img/logos/telegram-white.png'
import carta from '../../img/logos/carta-white.png'
import LinhaContato from './LinhaContato'

const Contato = () => {
    return(
        <div className="contato-area">
            <h2 className="title" >Entre em contato</h2>
            <LinhaContato image={whatsapp} text={'+55(61)98294-7102'} />
            <LinhaContato image={telegram} text={'@Feozineo'} />
            <LinhaContato image={carta} text={'pheofo@gmail.com'} />
            <div className="github-linkedin">
                <a href={`https://github.com/Phe0`} >
                    <img className="contato-icon icon-hover" src={require('../../img/logos/github-logo.png')} alt="github-logo" ></img>
                </a>
                <a href={`https://linkedin.com/in/pedrofeo`} >
                    <img className="contato-icon icon-hover" src={require('../../img/logos/linkedin-white.png')} alt="github-logo" ></img>
                </a>
            </div>
        </div>
    )
}

export default Contato;