import React, { Component } from 'react';
import './App.css';
import ButtonContainer from './components/ButtonContainer';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

  render() {
    return (
      <div className="App">
        <header>
          <h1>Hex-ights</h1>
        </header>

        {/* add an on/off button here */}

        <ButtonContainer containerName="Patterns" type="pattern" buttonLabels={["solid", "blink", "wave"]}/>
        <ButtonContainer containerName="Colors" type="color" buttonLabels={
          {"red": [4, 0, 0], 
          "orange": [4, 1, 0],
          "yellow": [3, 2, 0], 
          "green": [0, 4, 0], 
          "blue": [0, 0, 4], 
          "purple": [2, 0, 3],
          }}/>
      </div>

    );
  }
}

export default App;