import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <button className="button" onMouseOver={change} onMouseOut={change2}>
        Click
      </button>
      </header>
    </div>
  );
}

function change(){
  console.log('change is hovered');
}

function change2(){
  console.log('change is hovered out');
}

export default App;
