import React, {useState} from 'react';
import './App.css';
import generateRandomWord from './words';
import gallow from './images/gallow.jpg';
import KeyBoard from './components/KeyBoard';
import Header from './components/Header';
import ResetButton from './components/ResetButton';

function App (props) {
  
  //Hooks
  let [count, setCount] = useState(0);
  let [randomWord, setRandomWord] = useState(generateRandomWord());
  let [guessedLetters, setGuessedLetters] = useState([]);


  const handleClick = e => {
    const element = e.target;
    // updateGuessedLetters(guessedLetters.push(element.key));
    console.log(element.getAttribute('key'));
    element.classList.add('letter-btn-inactive');
    element.disabled = true;
    setCount(++count);
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
      <ResetButton id= "reset-btn" setRandomWord = {setRandomWord} setCount={setCount}/>
    </div>
  );
}

export default App;
