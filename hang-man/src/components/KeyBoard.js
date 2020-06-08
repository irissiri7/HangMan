import React from 'react';

const KeyBoard = ({letters, className, handleClick}) => {
    return letters.map(letter => <button key = {letter} className={className} onClick={handleClick}>{letter}</button>); 
}

export default KeyBoard;