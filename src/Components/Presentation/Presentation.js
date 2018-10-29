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
      <div>
        <h1>Pedro</h1>
        <h1>Féo</h1>
      </div>
      <div className="Presentation__image">
        <img src={image[this.state.counter]}></img>
      </div>
    </div>
    );
  }
}

export default Presentation;