import React,{Component} from 'react';
import '../../stylesheet/Presentation.css';
import MePink from '../../img/MePink.svg'
import MePurpleish from '../../img/MePurpleish.svg'
import MePurple from '../../img/MePurple.svg'

var image = [MePink, MePurpleish, MePurple]

class Presentation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isGoing: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      800
    );
  }

  tick() {
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
              <stop offset="100%" stop-color="#e06b6b" />
            </linearGradient>

            <rect fill="url(#gradient)" className="Presentation__name-area__svg__rectangle" /> 
          </svg>

          <div className="Presentation__name-area__names">
            <h1 className="Presentation__name-area__names__name">Pedro <br/> Féo</h1>
            <p className="Presentation__name-area__names__description">Engenharia de Software</p>
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