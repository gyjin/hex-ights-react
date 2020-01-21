import React, { Component } from 'react';
import './App.css';
import ButtonContainer from './components/ButtonContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div className="App background">

        <div className="jumbotron">
          <h1 className="display-2"><strong>Hex-ights</strong></h1>
          <hr className="hr"></hr>
          <p className="lead"><em>light up your life!</em></p>
        </div>

        <div className="button-container">
          <ButtonContainer containerName="Patterns" type="pattern" buttonLabels={["solid", "blink", "wave", "fade", "twinkle", "run", "off"]}/>
        </div>

        <div className="button-container">
          <ButtonContainer className="button-container" containerName="Colors" type="color" buttonLabels={
            {"red": [20, 0, 0], 
            "orange": [20, 5, 0],
            "yellow": [20, 12, 0], 
            "green": [0, 20, 0], 
            "blue": [0, 0, 20], 
            "purple": [12, 0, 20],
            }}/>
        </div>

        <footer className="footer">
          &copy; 2020 Ga-Young Jin
        </footer> 
      </div>
    );
  }
}

export default App;