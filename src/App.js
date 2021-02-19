import React, {useState} from 'react';
import './App.css';


function App() {
  const [result, setResult] = useState(0);
  const [firstNum, setFirstNum] = useState(0);
  const [secNum, setSecNum] = useState(0);
  const [operator, setOperator] = useState('+');

  const handleFirstNumChange = (event) => {
    setFirstNum(event.target.value)
  }

  const handleSecNumChange = (event) => {
    setSecNum(event.target.value)
  }

  const handleOpChange = (event) => {
    setOperator(event.target.value)
  }

  const handleCalc = () => {
    setResult(eval(firstNum + operator + secNum));
  }

  return (
    <div className="App">
      <h1>Simple Calculator App</h1>
      <br/>
      <h1>{result}</h1>
      <br/>
      <span>
        <input type='number' name='firstNumber' onChange={handleFirstNumChange} value={firstNum}></input>
        <select name='operation' onChange={handleOpChange}>
          <option value='+'>+</option>
          <option value='-'>-</option>
          <option value='*'>*</option>
          <option value='/'>/</option>
        </select>
        <input type='number' name='secondNumber' onChange={handleSecNumChange} value={secNum}></input>
      </span>
      <button
        onClick={handleCalc}
      >Calculate
      </button>
    </div>
  );
}

export default App;
