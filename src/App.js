import React from 'react';
import logo from './logo.svg';
import './App.css';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBBFX51zVi6N0a1F_Li-clF00Ta1q_AqJE",
  authDomain: "dianthus-dabf4.firebaseapp.com",
  databaseURL: "https://dianthus-dabf4.firebaseio.com",
  projectId: "dianthus-dabf4",
  storageBucket: "dianthus-dabf4.appspot.com",
  messagingSenderId: "269507538074",
  appId: "1:269507538074:web:c78f4dba0d4ad2d6680323"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
      </header>
    </div>
  );
}

export default App;
