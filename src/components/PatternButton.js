import React from 'react';
import PropTypes from 'prop-types';

const PatternButton = (props) => {
  
  return (
    <div>this is a pattern button. the pattern is {props.pattern}</div>
  );
};

PatternButton.propTypes = {
  pattern: PropTypes.string.isRequired,
};

export default PatternButton;