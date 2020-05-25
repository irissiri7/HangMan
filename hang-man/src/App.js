import React from 'react';
import logo from './logo.svg';
import './App.css';
import generateRandomWord from './words'

function App() {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö']
  const letterBtns = letters.map(letter => <button className='letter-btn' onClick={handleClick}>{letter}</button>);
  const randomWord = generateRandomWord();
  

  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p>
        Gissa ordet! En bokstav i taget. Om du gissar fel för många gånger kommer du att <strong>hänga</strong> gubben...
      </p>
      <img id="gallow" src={require('./images/gallow.jpg')} alt="An empty gallow"/>
      <p className="bigText">{generateEmptyRepresentationOfSecretWord(randomWord)}</p>
      <p className="bigText">Antal gissningar: 0</p>
      <div id="btn-container">
        {letterBtns}
      </div>
      <button id="reset-btn" onClick={handleReset}>Återställ</button>
    </div>
  );
}

const handleClick = e => {
  const element = e.target;
  element.style.backgroundColor = '#bdbdbd';
  element.style.boxShadow = '0px 5px #000000';
}

const handleReset = () =>{
  let letterButtons = Array.from(document.getElementsByClassName('letter-btn'));
  letterButtons.map(letterButton => {
    letterButton.style.backgroundColor = '#ffc107';
    letterButton.style.boxShadow = '0px 5px #ff9800';
  })
}

export default App;
