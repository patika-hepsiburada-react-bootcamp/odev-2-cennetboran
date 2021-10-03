import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import getRandomWord from "./service/wordService";
import "./css/App.css";
import Keyboard from "./components/Keyboard";

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedWord, setSelectedWord] = useState("null");

  const setWord = async () => { 
    // Getting random word from service and set as variable.
    const word = await getRandomWord();
    setSelectedWord(word);
  };

  useEffect(() => {
    setWord();
  }, []);

  const handleNotification = () => { // For showing notification
    setShowNotification(true)
    setTimeout(() => {
        setShowNotification(false)
    },2000)
  }

  const onClick = (key) => { // For handling letter onClick events
    if (playable) {
      const letter = key
      if (selectedWord.includes(letter)) { // if random word contains the given letter
        if (!correctLetters.includes(letter)) { // if clicked letter is not clicked before
          setCorrectLetters((currentLetters) => [...currentLetters, letter]);
        } else { // if clicked letter is clicked before
          handleNotification()
        }
      } else { // if letter is wrong
        if (!wrongLetters.includes(letter)) { // if clicked letter is not clicked before
          setWrongLetters((currentLetters) => [...currentLetters, letter]);
        } else {// if clicked letter is clicked before
          handleNotification()
        }
      }
    }
  }

  useEffect(() => {
    const handleKeydown = (event) => { //keyDown Event Handler
      const { key, keyCode } = event;
      if (playable && ((keyCode >= 65 && keyCode <= 90) || keyCode === 222)) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            handleNotification()
          
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            handleNotification()
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  const playAgain = async () => {
    await setWord(); // set a random word for new game
    setPlayable(true); 

    // Empty Arrays for new game
    setCorrectLetters([]);
    setWrongLetters([]);
  };

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Keyboard onKeyboard={onClick}></Keyboard>
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
