import React from 'react';
import logo from './logo.svg';
import './App.css';
import generateRandomWord from './words';
import LetterButtons from './components/LetterButton';
import SecretWord from './components/SecretWord';
import Header from './components/Header';
import ResetButton from './components/ResetButton';

function App() {
  const randomWord = generateRandomWord();
  
  return (
    <div className="App">
      <Header/>
      <img id="gallow" src={require('./images/gallow.jpg')} alt="An empty gallow"/>
      <SecretWord className = 'bigText' word = {randomWord}/>
      <p className="bigText">Antal gissningar: 0</p>
      <div id="btn-container">
        <LetterButtons />
      </div>
      <ResetButton targetBtns = 'letter-btn'/>
    </div>
  );
}

export default App;
