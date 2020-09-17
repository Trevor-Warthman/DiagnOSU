import React from 'react';
import './App.css';
import {ChatWindow} from "./ChatWindow";
function App() {
  return (
    <div data-testid="app-div" className="App">
        <ChatWindow/>
        <img src={logo} alt="React Logo"/>
    </div>
  );
}

export default App;
