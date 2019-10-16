import React from 'react';
import logo from './logo.jpeg';
import reactLogo from './logo.svg';

import './App.css';

function App() {
  let testPhrase = 'Not configured';

  if (process.env.TEST_PHRASE !== undefined) {
      testPhrase = process.env.TEST_PHRASE;
  }

  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="Configurator Logo" />
        <span>JavaScript Configurations for Everyone!</span>
        <img src={reactLogo} className="tech-logo" alt="React Logo" />
      </header>
      <div className="content">
        Test Phrase: { testPhrase }
      </div>
    </div>
  );
}

export default App;
