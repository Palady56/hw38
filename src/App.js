import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import { useState } from 'react';
import Input from './components/Input/Input';

function App() {

  const [ showBtn, setShowBtn ] = useState(true)
  const [value, setValue] = useState('');

  const handlerOnClick = () => {
    setShowBtn(false)
  }

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleValue = () => {
    if (!value) {
      alert(`Вы ничего не ввели`)
    } else {
      alert(`Вы ввели: ${value}`);
    }    
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {showBtn && <Button className={"btn"} text="Press to hide" onClick={handlerOnClick} />}

        <Input onChange={handleOnChange} placeholder="Search..."/>

        <Button onClick={handleValue} className={"btn-app btn"} text="Check input value"/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
