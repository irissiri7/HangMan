import React, {useState} from 'react';
import './App.css';
import generateRandomWord from './words'
import gallow from './images/gallow.jpg';
import KeyBoard from './components/KeyBoard';
import Header from './components/Header';
import ResetButton from './components/ResetButton';

function App (props) {
  
  //Hooks
  let [count, updateCount] = useState(0);
  let [randomWord, updateRandomWord] = useState(generateRandomWord());
  let [guessedLetters, updateGuessedLetters] = useState([]);


  const handleClick = e => {
    const element = e.target;
    // updateGuessedLetters(guessedLetters.push(element.key));
    console.log(element.getAttribute('key'));
    element.classList.add('letter-btn-inactive');
    element.disabled = true;
    updateCount(++count);
  }

  const handleReset = () => {
    let letterButtons = Array.from(document.getElementsByClassName('letter-btn-inactive'));
    letterButtons.map(letterButton => {
      letterButton.classList.remove('letter-btn-inactive');
      letterButton.disabled = false;
    })
    updateRandomWord(generateRandomWord());
    updateCount(0);
  }

  const makeSecretWordRepresentation = () => {
    let secretWord = '';
    randomWord.split('').map(letter => secretWord += '_ ');
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
      <ResetButton id= "reset-btn" handleReset={handleReset}/>
    </div>
  );
}

export default App;
