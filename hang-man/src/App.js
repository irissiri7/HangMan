import React, {useState, useEffect} from 'react';
import './App.css';
import generateRandomWord from './words';
import KeyBoard from './components/KeyBoard';
import Header from './components/Header';
import Button from './components/Button';

const App = ({letters}) => {
  
  //Hooks
  let [image, setImage] = useState(1)
  let [count, setCount] = useState(0);
  let [randomWord, setRandomWord] = useState(generateRandomWord());
  let [guessedLetters, setGuessedLetters] = useState([]);

  useEffect(()=>{
    if(makeSecretWordRepresentation() == randomWord){
      alert('you win!')
      handleReset();
    }
    else if(count >= 6){
      alert('you loose');
      handleReset();
    }
  },[image])


  const handleClick = e => {
    const element = e.target;
    const letter = element.innerText;
    if(!randomWord.split('').includes(letter)){
      setCount(prev => prev +1);
      setImage(prev => prev +1);

    }
    setGuessedLetters(guessedLetters = [...guessedLetters, element.innerText]);
    element.classList.add('letter-btn-inactive');
    element.disabled = true;
  }

  const makeSecretWordRepresentation = () => {
    let secretWord = '';
    randomWord.split('').map((letter, index) => {
      if(randomWord[index] == letter && guessedLetters.includes(letter)){
        secretWord += letter;
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
    setImage(1);
    setRandomWord(generateRandomWord());
    setGuessedLetters([]);
    setCount(0);
}

  
  return (
    <div className="App">
      <Header/>
      <img id="gallow" src={require(`./images/gallow${image}.jpg`)} alt="An empty gallow"/>
      <p id="secretWord" className="bigText">{makeSecretWordRepresentation()}</p>
      <p className="bigText">Antal fel gissningar: {count}</p>
      <div id="btn-container">
        <KeyBoard className = 'letter-btn-default' letters={letters} handleClick = {handleClick}/>
      </div>
      <Button text="Återställ" id= "reset-btn" handleClick={handleReset}/>
    </div>
  );
}

export default App;
