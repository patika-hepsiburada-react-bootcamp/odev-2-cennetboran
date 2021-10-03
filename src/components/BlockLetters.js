/* 
  Every single block of letters on screen 
*/

import React from "react";
import "../css/BlockLetters.css";

const BlockLetters = (props) => {

    return (
      <div onClick={props.onClick} className="BlockLetters">
        <span>{props.value}</span>
      </div>
    );
  
}

export default BlockLetters;
