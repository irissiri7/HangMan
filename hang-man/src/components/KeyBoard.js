import React from 'react';

const KeyBoard = (props) => {
    return props.letters.map(letter => <button key = {letter} className={props.className} onClick={props.handleClick}>{letter}</button>); 
}

export default KeyBoard;