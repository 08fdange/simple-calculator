import React, {useState} from 'react';
import Calculator from './Calculator.js';
import './App.css';


function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [secNum, setSecNum] = useState("");
  const [operator, setOperator] = useState('');

  const useOperator = {
    '+': function(x, y) {return x + y},
    '-': function(x, y) {return x - y},
    '*': function(x, y) {return x * y},
    '/': function(x, y) {return x / y}
  }

  const handleAC = () => {
    setFirstNum(0);
    setSecNum("");
    setOperator('');
  }

  const handleDelete = () => {
    if(secNum.length === 0 && operator !== '') {
      setOperator('')
    } else if(firstNum.length > 1 && secNum ==="") {
      setFirstNum(firstNum.slice(0, -1));
    } else if(firstNum.length === 1) {
      setFirstNum(0)
    } else {
      setSecNum(secNum.slice(0, -1));
    }
  }

  const handleCurrent = (event) => {
    if (operator === '') {
      if (firstNum !== 0) {
        setFirstNum(firstNum + event.target.value)
      } else {
        setFirstNum(event.target.value)
      }
    }
    else {
      setSecNum(secNum + event.target.value)
    }
  }

  const handleOperator = (event) => {
    setOperator(event.target.value)
  }

  const handleEquals = (event) => {
    if(operator !== "") {
      let x = parseInt(firstNum);
      let y = parseInt(secNum);
      setFirstNum(useOperator[operator](x,y));
      setSecNum("");
      setOperator("");
    }
  }

  return (
    <div className="App">
      <h1 className='header' align='center'>Simple Calculator App</h1>
      <Calculator
        firstNum={firstNum}
        secNum={secNum}
        operator={operator}
        handleDelete={handleDelete}
        handleOperator={handleOperator}
        handleCurrent={handleCurrent}
        handleAC={handleAC}
        handleEquals={handleEquals}
      />
    </div>
  );
}

export default App;
