import React from 'react';
import generateRandomWord from '../words';

const ResetButton = ({setRandomWord, setGuessedLetters, setCount, id}) => {
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

    return <button id={id} onClick={handleReset}>Återställ</button>
}

export default ResetButton;