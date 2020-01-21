import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ColorButton = (props) => {

  const changeColor = () => {
    axios.patch(`https://hex-ights.firebaseio.com/.json?auth=` + process.env.REACT_APP_FB_AUTH_KEY, {"red": props.rgb[0], "green": props.rgb[1], "blue": props.rgb[2]})
      .then((response) => {
          console.log(`successfully changed color to ` + props.color)
      })
      .catch((error) => {
          console.log(`color was not successfully changed to ` + props.color)
      });
  }
  

  return (
    <button type="button" class={'btn btn-outline-light spacing ' + props.color} onClick={changeColor}>{props.color}</button>
  );
};

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  rgb: PropTypes.array.isRequired,
};

export default ColorButton;