import React, { Component } from 'react';
import '../../stylesheet/Tag.css';


class Tag extends Component {
  render() {
    return (
      <div className="Tag">
        <p className="TagName">
          {this.props.title}
        </p>
      </div>
    );
  }
}

export default Tag;