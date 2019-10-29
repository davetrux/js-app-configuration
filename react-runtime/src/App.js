import React from 'react';
import logo from './logo.jpeg';
import reactLogo from './logo.svg';

import './App.css';

function App() {
  let testPhrase = 'Not configured';

  if (window.config.TEST_PHRASE !== undefined) {
      testPhrase = window.config.TEST_PHRASE;
  }

  return (
    <div className="App">
      <header className="header">
        <div className="logo"><img src={logo} alt="Configurator Logo" /></div>
        <div className="subtitle">CatchPhrase</div>
        <div className="techlogo"><img src={reactLogo} alt="React Logo" /></div>
      </header>
      <div className="content">
        Test Phrase: { testPhrase }!
      </div>
    </div>
  );
}

export default App;
