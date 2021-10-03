/*
  For display a keyboard on screen.
*/

import React from "react";
import Letters from "./Letters";
import BlockLetters from "./BlockLetters";
import "../css/Keyboard.css";


const Keyboard = ({onKeyboard}) => {

  const FIRST_ROW = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const SECOND_ROW = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const THIRD_ROW = ["z", "x", "c", "v", "b", "n", "m"];

  /*
   Renders each letter in a row.
   First creates a button for each letter and then
   wraps with the Letters component.
  */
  const _renderRow = (letters) => {
    const children = letters
      .map((letter) => (
        <BlockLetters
          value={letter}
          onClick={() => onKeyboard(letter)}
          key={`LetterBlock-${letter}`}
        />
      ));
  
    return <Letters>{children}</Letters>;
  }

  return (
    <div className="Keyboard">
      <div key="First" className="Keyboard-FirstRow">
        {_renderRow(FIRST_ROW)}
      </div>
      <div key="Second" className="Keyboard-SecondRow">
        {_renderRow(SECOND_ROW)}
      </div>
      <div key="Third" className="Keyboard-ThirdRow">
        {_renderRow(THIRD_ROW)}
      </div>
    </div>
  );
  
}

export default Keyboard;
