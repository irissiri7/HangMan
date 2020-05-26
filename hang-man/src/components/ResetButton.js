import React from 'react';
import generateRandomWord from '../words';

export default function ResetButton(props){
    const handleReset = () => {
        let letterButtons = Array.from(document.getElementsByClassName('letter-btn-inactive'));
        letterButtons.map(letterButton => {
        letterButton.classList.remove('letter-btn-inactive');
        letterButton.disabled = false;
        })
        props.setRandomWord(generateRandomWord());
        props.setCount(0);
    }

    return <button id={props.id} onClick={handleReset}>Återställ</button>
}