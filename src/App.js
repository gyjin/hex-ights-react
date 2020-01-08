import React, { Component } from 'react';
import './App.css';
import ButtonContainer from './components/ButtonContainer';
import axios from 'axios';
// import { FB_AUTH_KEY } from 'react-dotenv';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPattern: "hello",
      patternError: "",
      selectedColor: "",
      colorError: "",
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
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Hex-ights</h1>
        </header>

        {/* add an on/off button here */}

        <ButtonContainer containerName="Patterns" type="pattern" buttonLabels={["blink", "wave"]}/>
        <ButtonContainer containerName="Colors" type="color" buttonLabels={["red", "yellow"]}/>

        <p>{this.state.selectedPattern}</p>
        <p>{this.state.patternError}</p>
        {/* <p>{this.state.selectedColor}</p>
        <p>{this.state.colorError}</p> */}
      </div>

    );
  }
}

export default App;