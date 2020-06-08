import React, {useState} from 'react';
import './App.css';
import generateRandomWord from './words';
import gallow from './images/gallow.jpg';
import KeyBoard from './components/KeyBoard';
import Header from './components/Header';
import Button from './components/Button';

const App = ({letters}) => {
  
  //Hooks
  let [count, setCount] = useState(0);
  let [randomWord, setRandomWord] = useState(generateRandomWord());
  let [guessedLetters, setGuessedLetters] = useState([]);

  


  const handleClick = e => {
    const element = e.target;
    setGuessedLetters(guessedLetters = [...guessedLetters, element.innerText]);
    element.classList.add('letter-btn-inactive');
    element.disabled = true;
    setCount(++count);
  }

  const makeSecretWordRepresentation = () => {
    let secretWord = '';
    randomWord.split('').map((letter, index) => {
      if(randomWord[index] == letter && guessedLetters.includes(letter)){
        secretWord += letter + ' ';
      }
      else{
        secretWord += '_ ';
      }
    });
    return secretWord;
  }

  const handleReset = () => {
    let letterButtons = Array.from(document.getElementsByClassName('letter-btn-inactive'));
    letterButtons.map(letterButton => {
    letterButton.classList.remove('letter-btn-inactive');
    letterButton.disabled = false;
    })
    setRandomWord(generateRandomWord());
    setGuessedLetters([]);
    setCount(0);
}

  
  return (
    <div className="App">
      <Header/>
      <img id="gallow" src={gallow} alt="An empty gallow"/>
      <p id="secretWord" className="bigText">{makeSecretWordRepresentation()}</p>
      <p className="bigText">Antal gissningar: {count}</p>
      <div id="btn-container">
        <KeyBoard className = 'letter-btn-default' letters={letters} handleClick = {handleClick}/>
      </div>
      <Button text="Återställ" id= "reset-btn" handleClick={handleReset}/>
    </div>
  );
}

export default App;
