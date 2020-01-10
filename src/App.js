import React, { Component } from 'react';
import './App.css';
import ButtonContainer from './components/ButtonContainer';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPattern: "hello",
      patternError: "",
      red: "",
      green: "",
      blue: "",
      redError: "",
      greenError: "",
      blueError: "",
    };    
  }

  componentDidMount() {
    const patternUrl = `https://hex-ights.firebaseio.com/pattern.json?auth=` + process.env.REACT_APP_FB_AUTH_KEY

    axios.get(patternUrl).then((response) => {
      this.setState({
        selectedPattern: response.data,
      });
    })
    .catch((error) => {
      this.setState({patternError: error.message });    
    });

    const redUrl = `https://hex-ights.firebaseio.com/red.json?auth=` + process.env.REACT_APP_FB_AUTH_KEY

    axios.get(redUrl).then((response) => {
      this.setState({
        red: response.data,
      });
    })
    .catch((error) => {
      this.setState({redError: error.message });    
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Hex-ights</h1>
        </header>

        {/* add an on/off button here */}

        <ButtonContainer containerName="Patterns" type="pattern" buttonLabels={["blink", "wave"]}/>
        <ButtonContainer containerName="Colors" type="color" buttonLabels={{"red": [255, 0, 0], "green": [0, 255, 0], "blue": [0, 0, 255]}}/>

        <p>{this.state.selectedPattern}</p>
        <p>{this.state.patternError}</p>
        <p>{this.state.red}</p>
        <p>{this.state.redError}</p>
      </div>

    );
  }
}

export default App;