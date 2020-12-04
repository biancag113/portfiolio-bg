import './App.css';
import Amplify from 'aws-amplify';
import React from 'react';
import awsconfig from './aws-exports';
import {AmplifySignIn} from '@aws-amplify/ui-react';
import About from './About.js'
import { BrowserRouter, Link, Switch} from "react-router-dom";


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

          <button id='login'>Client Log In</button>

      </header>

      <div id='nav'>
     
        <BrowserRouter>
          
            <Link to="/about">
              <button id="nav-button">About</button>
            </Link>

            <Link to="/projects">
              <button id="nav-button">Projects</button>
            </Link>

            <Link to="/blog">
              <button id="nav-button">Blog</button>
            </Link>

            <Link to="/videos">
              <button id="nav-button">Videos</button>
            </Link>

            <Link to="/contact">
              <button id="nav-button">Contact</button>
            </Link>
        
        </BrowserRouter>
  
      </div>

      <div id='signin'>
      </div>

    
          <h6> © 2020, Bianca Gonzalez
        <p>San Francisco  |  Los Angeles</p>
        </h6>
  </div>
  );
}

export default App;
