import React,{Component} from 'react';
import '../../stylesheet/Presentation.css';
import MePink from '../../img/MePink.svg'
import MePurpleish from '../../img/MePurpleish.svg'
import MePurple from '../../img/MePurple.svg'
import Typing from 'react-typing-animation'

const image = [MePink, MePurpleish, MePurple]
const firstName = "Pedro"
const lastName = "Féo"

class Presentation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isGoing: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.timerID = setInterval(() => this.changeImage(), 800)
    }, 4000)
  }


  changeImage = () => {
    if(this.state.counter === 2){
      this.setState({
        isGoing: false
      })
    }
    else if(this.state.counter === 0){
      this.setState({
        isGoing: true
      })
    }
    if(this.state.isGoing){
      this.setState({counter: this.state.counter+1})
    }
    else{
      this.setState({counter: this.state.counter-1}) 
    }
  }

  render(){
    return (
      <div className="Presentation">
        <div className="Presentation__name-area">
          <svg className="Presentation__name-area__svg">
            <linearGradient id="gradient">
              <stop offset="0%" stop-color="#8156bc" />
              <stop offset="50%" stop-color="#e06b6b" />
            </linearGradient>

            <rect fill="url(#gradient)" className="Presentation__name-area__svg__rectangle" /> 
          </svg>

          <div className="Presentation__name-area__names">
            <Typing speed={200} hideCursor={true} >
              <h1 className="Presentation__name-area__names__name--first">Pedro</h1>
            </Typing>
            <Typing speed={200} hideCursor={true} startDelay={1000}>
              <h1 className="Presentation__name-area__names__name--last">Féo</h1>
            </Typing>
            <Typing speed={90} hideCursor={true} startDelay={1600}>
              <p className="Presentation__name-area__names__description">Engenharia de Software</p>
            </Typing>
          </div>
          
          
        </div>

        <div className="Presentation__image">
          <img src={image[this.state.counter]}></img>
        </div>
      </div>
    );
  }

}

export default Presentation;