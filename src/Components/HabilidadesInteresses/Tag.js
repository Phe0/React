import React from 'react';
import '../../stylesheet/Tag.css';


const Tag = (props) => {
  return (
    <div className="Tag">
      <p className="TagName">
        {props.title}
      </p>
    </div>
  );
}

export default Tag;