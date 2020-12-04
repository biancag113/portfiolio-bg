import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import React from 'react';
import awsconfig from './aws-exports';
import {AmplifySignIn} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span id='hi'>Hi.</span> I'm Bianca :)
        </h1>
        <h5>
          Full-stack developer. Designer. Coffee Addict.
        </h5>
          <button id='login'>Log In</button>
      </header>
      <div>
      <nav id='nav'>
        <button id='nav-button'>About</button>
        <button id='nav-button'>Projects</button>
        <button id='nav-button'>Videos</button>
        <button id='nav-button'>Contact</button>
      </nav>
      </div>
  </div>
  );
}

export default App;
