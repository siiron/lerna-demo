import React from 'react';
import Button from '@siiron/rs-btn/dist/index';
import '@siiron/rs-styles/dist/scss/main.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Demo-time</p>
                <Button text="Hello from rs-btn" className="my-class" />
            </header>
        </div>
    );
}

export default App;
