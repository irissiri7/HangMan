import React from 'react';
import Button from './Button';

const KeyBoard = ({letters, handleClick, className}) => {
    return letters.map(letter => <Button text={letter} id={letter} key = {letter} className={className} handleClick={handleClick}/>); 
}

export default KeyBoard;