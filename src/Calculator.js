import React from 'react';

const Calculator = (props) => {
    const {firstNum,secNum,operator,handleAC,handleOperator,handleDecimal,handleCurrent,handleEquals,handleDelete} = props;
    return(
        <div className='calculator'>
            <div className='output'>
                <div className='current-operand'>{firstNum} {operator} {secNum}</div>
            </div>
            <button className='span-two' onClick={handleAC}>AC</button>
            <button onClick={handleDelete}>DEL</button>
            <button value='/' onClick={handleOperator}>÷</button>
            <button value='1' onClick={handleCurrent}>1</button>
            <button value='2' onClick={handleCurrent}>2</button>
            <button value='3' onClick={handleCurrent}>3</button>
            <button value='*' onClick={handleOperator}>*</button>
            <button value='4' onClick={handleCurrent}>4</button>
            <button value='5' onClick={handleCurrent}>5</button>
            <button value='6' onClick={handleCurrent}>6</button>
            <button value='+' onClick={handleOperator}>+</button>
            <button value='7' onClick={handleCurrent}>7</button>
            <button value='8' onClick={handleCurrent}>8</button>
            <button value='9' onClick={handleCurrent}>9</button>
            <button value='-' onClick={handleOperator}>-</button>
            <button className='left-bottom' value='.' onClick={handleDecimal}>.</button>
            <button value='0' onClick={handleCurrent}>0</button>
            <button className='span-two right-bottom' onClick={handleEquals}>=</button>     
        </div>
    )
}

export default Calculator;
