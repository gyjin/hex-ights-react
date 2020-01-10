import React from 'react';
import PropTypes from 'prop-types';

const ColorButton = (props) => {

  const changeColor = () => {
    axios.post('http://localhost:3000/pets', pet)
      .then((response) => {
          // What should we do when we know the post request worked?
      })
      .catch((error) => {
          // What should we do when we know the post request failed?
      });
    }
  }

  return (
    <button onClick={changeColor}>this is a color button. the color is {props.color}</button>
  );
};

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorButton;