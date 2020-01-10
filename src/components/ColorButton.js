import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ColorButton = (props) => {

  const changeColor = () => {
    axios.patch(`https://hex-ights.firebaseio.com/.json?auth=` + process.env.REACT_APP_FB_AUTH_KEY, {"red": 3})
      .then((response) => {
          console.log("successfully changed number")
      })
      .catch((error) => {
          console.log("did not change number")
      });
  }
  

  return (
    <button onClick={changeColor}>this is a color button. the color is {props.color}</button>
  );
};

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorButton;