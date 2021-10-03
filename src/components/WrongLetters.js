
/*
  For displaying how much retries left and show which letters
  are wrong that player has clicked 
*/

import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div className="prediction">
        <span>
          Retries left:{" " + (5 - wrongLetters.length)}
        </span>
      </div>
      <div>
        {wrongLetters.length > 0 && <p className="wrong">Wrong</p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
