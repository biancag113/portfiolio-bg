import logo from './logo.svg';
import './Auth.css';
import Amplify from 'aws-amplify';
import React from 'react';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig)

function Auth() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='signout'>
        <AmplifySignOut />
        </div>
        <h3>
        Client Dashboard        
        </h3>
      </header>
      <body>

      </body>
    </div>
  );
}

export default withAuthenticator(Auth);
