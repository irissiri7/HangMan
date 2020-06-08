import React from 'react';

const Button = ({text, handleClick, className, id}) => {
    
    return <button key={id} onClick={handleClick} id={id} className={className}>{text}</button>
}

Button.defaultProps = { 
    className: '' 
};

export default Button;