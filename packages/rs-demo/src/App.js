import React from 'react';
import logo from './logo.svg';
import Button from '@siiron/rs-btn/dist/index';
import '@siiron/rs-styles/dist/scss/main.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        {/* <Button text="Hei fra rs-btn" className="my-class" /> */}
      </header>
    </div>
  );
}

export default App;
