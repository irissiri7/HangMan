import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p>
        Gissa ordet! En bokstav i taget. Om du gissar fel för många gånger kommer du att <strong>hänga</strong> gubben...
      </p>
      <img id="gallow" src={require('./images/gallow.jpg')} alt="An empty gallow"/>
      <p className="bigText">_ _ _ _ _ _ _ _ _</p>
      <p className="bigText">Antal gissningar: 0</p>
      <button>a</button>
    </div>
  );
}

export default App;
