import React from 'react';
import PropTypes from 'prop-types';

const ColorButton = (props) => {

  return (
    <div>this is a color button. the color is {props.color}</div>
  );
};

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorButton;