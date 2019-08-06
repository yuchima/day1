import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <button className="button" onMouseOver={change}>
        Click
      </button>
      </header>
    </div>
  );
}

function change(){
  console.log('change is hovered');

}

export default App;
