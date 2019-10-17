import React from 'react';
import logo from './logo.jpeg';
import reactLogo from './logo.svg';

import './App.css';

function App() {
  let testPhrase = 'Not configured';

  if (process.env.REACT_APP_TEST_PHRASE !== undefined) {
      testPhrase = process.env.REACT_APP_TEST_PHRASE;
  }

  return (
    <div className="App">
      <header className="header">
        <div className="logo"><img src={logo} alt="Configurator Logo" /></div>
        <div className="subtitle">JavaScript Configurations for Everyone!</div>
        <div className="techlogo"><img src={reactLogo} alt="React Logo" /></div>
      </header>
      <div className="content">
        Test Phrase: { testPhrase }!
      </div>
    </div>
  );
}

export default App;
