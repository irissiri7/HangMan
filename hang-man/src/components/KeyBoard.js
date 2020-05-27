import React from 'react';

export default function KeyBoard(props){
    return props.letters.map(letter => <button key = {letter} className={props.className} onClick={props.handleClick}>{letter}</button>); 
}