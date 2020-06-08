import React from 'react';

const Button = ({id, handleClick}) => {
    
    return <button id={id} onClick={handleClick}>Återställ</button>
}

export default Button;

//id, handleClick, key, className