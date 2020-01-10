import React from 'react';
import PropTypes from 'prop-types';

const PatternButton = (props) => {
  
  return (
    <button>this is a pattern button. the pattern is {props.pattern}</button>
  );
};

PatternButton.propTypes = {
  pattern: PropTypes.string.isRequired,
};

export default PatternButton;