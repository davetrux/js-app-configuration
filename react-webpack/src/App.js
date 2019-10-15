import React from 'react';
import logo from './logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="Configurator Logo" />
        <span>JavaScript Configurations for Everyone!</span>
        <span className="placeholder"></span>
      </header>
      <div className="content">
        Test Phrase:
      </div>
    </div>
  );
}

export default App;
