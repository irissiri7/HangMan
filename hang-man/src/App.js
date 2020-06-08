import React, {useState} from 'react';
import './App.css';
import generateRandomWord from './words';
import gallow from './images/gallow.jpg';
import KeyBoard from './components/KeyBoard';
import Header from './components/Header';
import ResetButton from './components/ResetButton';

const App = (props) => {
  
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

  
  return (
    <div className="App">
      <Header/>
      <img id="gallow" src={gallow} alt="An empty gallow"/>
      <p id="secretWord" className="bigText">{makeSecretWordRepresentation()}</p>
      <p className="bigText">Antal gissningar: {count}</p>
      <div id="btn-container">
        <KeyBoard className = 'letter-btn-default' letters={props.letters} handleClick = {handleClick}/>
      </div>
      <ResetButton id= "reset-btn" setRandomWord = {setRandomWord} setCount={setCount} setGuessedLetters = {setGuessedLetters}/>
    </div>
  );
}

export default App;
