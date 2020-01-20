import React, { Component } from 'react';
import './App.css';
import ButtonContainer from './components/ButtonContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Hex-ights</h1>
        </header>

        <ButtonContainer containerName="Patterns" type="pattern" buttonLabels={["solid", "blink", "wave", "fade", "twinkle", "run", "off"]}/>
        <ButtonContainer containerName="Colors" type="color" buttonLabels={
          {"red": [20, 0, 0], 
          "orange": [20, 5, 0],
          "yellow": [20, 12, 0], 
          "green": [0, 20, 0], 
          "blue": [0, 0, 20], 
          "purple": [12, 0, 20],
          }}/>
      </div>

    );
  }
}

export default App;