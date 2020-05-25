import React from 'react';
import './App.css';
import generateRandomWord from './words'
import gallow from './images/gallow.jpg';

function App() {
  
  const randomWord = generateRandomWord();
  
  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p>
        Gissa ordet! En bokstav i taget. Om du gissar fel för många gånger kommer du att <strong>hänga</strong> gubben...
      </p>
      <img id="gallow" src={gallow} alt="An empty gallow"/>
      <p id="secretWord" className="bigText">{makeSecretWordRepresentation(randomWord)}</p>
      <p className="bigText">Antal gissningar: 0</p>
      <div id="btn-container">
        {makeLetterButtons()}
      </div>
      <button id="reset-btn" onClick={handleReset}>Återställ</button>
    </div>
  );
}

const makeLetterButtons = () => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö']
  const letterBtns = letters.map(letter => <button className='letter-btn' onClick={handleClick}>{letter}</button>);
  return letterBtns;
}

const handleClick = e => {
  const element = e.target;
  element.style.backgroundColor = '#bdbdbd';
  element.style.boxShadow = '0px 5px #000000';
}

const handleReset = (word) =>{
  let letterButtons = Array.from(document.getElementsByClassName('letter-btn'));
  letterButtons.map(letterButton => {
    letterButton.style.backgroundColor = '#ffc107';
    letterButton.style.boxShadow = '0px 5px #ff9800';
  })

  word = generateRandomWord();
  document.getElementById('secretWord').innerText = makeSecretWordRepresentation(word);
}

const makeSecretWordRepresentation = (word) => {
  let secretWord = '';
  word.split('').map(letter => secretWord += '_ ');
  return secretWord;
}

export default App;
