import React from 'react';
import * as chapi from 'credential-handler-polyfill';

import Theme from './components/Theme'
import './App.css';

import ReceiveCredential from './components/ReceiveCredential'

import logo from './logo.svg';

function App() {
  React.useEffect(() => {
    (async () => {
      try {
        await chapi.loadOnce();
      } catch (e) {
        console.error('Error in loadOnce:', e);
      }
    })();
  })
  return (
    <Theme>
      <div className="App">
        <div style={{ maxWidth: '512px', margin: 'auto', paddingTop: '10%', }}>
          <img src={logo} alt="transmute logo" style={{ width: '50%', margin: 'auto', display: 'block', padding: '32px 0px' }} />
          <ReceiveCredential />
        </div>
      </div>
    </Theme>
  );
}

export default App;
