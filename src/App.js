import React, { Component } from 'react';
import './App.css';
import ButtonContainer from './components/ButtonContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPattern: "",
      selectedColor: "",
    };    
  }

  render() {
  return (
    <div className="App">
      <header>
        <h1>Hex-ights</h1>
      </header>

      <ButtonContainer containerName="Patterns" type="pattern" buttonNames={["blink", "wave"]}/>
      <ButtonContainer containerName="Colors" type="color" buttonNames={["red", "yellow"]}/>
    </div>
  );
}
}

export default App;
