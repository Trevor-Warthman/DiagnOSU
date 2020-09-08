import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ChatWindow} from "./ChatWindow";

function App() {
  return (
    <div data-testid="app-div" className="App">
        <ChatWindow/>
    </div>
  );
}

export default App;
