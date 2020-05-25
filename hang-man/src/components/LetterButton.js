import React from 'react';

function LetterButtons (props){
    const letters = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö']
    const handleClick = e => {
        const element = e.target;
        element.style.backgroundColor = '#bdbdbd';
        element.style.boxShadow = '0px 5px #000000';
      }
      
    const letterBtns = letters.map(letter => <button className='letter-btn' onClick={handleClick}>{letter}</button>);
    return letterBtns;
}

export default LetterButtons;