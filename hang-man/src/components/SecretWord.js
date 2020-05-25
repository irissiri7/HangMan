import React from 'react';

function SecretWord(props){
    let secretWord = '';
    props.word.split('').map(letter => secretWord += '_ ');
    
    return <p className = {props.className}>{secretWord}</p>
}

export default SecretWord;