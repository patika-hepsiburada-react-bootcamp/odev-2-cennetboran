/*
  Component that shows the word.
  If player has clicked correct letter than
  "-" icon turns into that letter.
*/

import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className="word">
      {selectedWord ? selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      }) : ""}
    </div>
  )
}

export default Word
