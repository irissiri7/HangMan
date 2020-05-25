import React from 'react';

function ResetButton(props){
    const handleReset = () => {
        let letterButtons = Array.from(document.getElementsByClassName(props.targetBtns));
        
        letterButtons.map(letterButton => {
          letterButton.style.backgroundColor = '#ffc107';
          letterButton.style.boxShadow = '0px 5px #ff9800';
        })
      }
    
      return <button id='reset-btn' onClick={handleReset}>Återställ</button>
}

export default ResetButton;