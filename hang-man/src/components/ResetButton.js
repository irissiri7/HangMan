import React from 'react';

export default function ResetButton(props){
    return <button id={props.id} onClick={props.handleReset}>Återställ</button>
}